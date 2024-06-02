const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://mongodb:27017/medical-appointment', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true } // 'doctor' or 'patient'
}));

const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  doctor: { type: String, required: true },
  patient: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'scheduled' } // 'scheduled', 'completed', 'cancelled'
}));

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send({ message: 'Unauthorized' });

  jwt.verify(token, 'secret-key', (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized' });
    req.user = decoded;
    next();
  });
};

app.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username, password: req.body.password });
  if (!user) return res.status(401).send({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, role: user.role }, 'secret-key');
  res.send({ token });
});

app.post('/appointments', authMiddleware, async (req, res) => {
  if (req.user.role !== 'patient') return res.status(403).send({ message: 'Forbidden' });

  const appointment = new Appointment({ ...req.body, patient: req.user.id });
  await appointment.save();
  res.send({ message: 'Appointment scheduled successfully' });
});

app.get('/appointments', authMiddleware, async (req, res) => {
  const appointments = await Appointment.find({ 
    [req.user.role === 'doctor' ? 'doctor' : 'patient']: req.user.id 
  });
  res.send(appointments);
});

app.put('/appointments/:id', authMiddleware, async (req, res) => {
  if (req.user.role !== 'doctor') return res.status(403).send({ message: 'Forbidden' });

  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(appointment);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


