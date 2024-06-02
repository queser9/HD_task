# Medical Appointment System

## Project Overview
This project is a cloud-native medical appointment system built with Node.js and deployed on Google Cloud Platform (GCP). The project includes user registration, login, and appointment management functionalities.

## Tools and Technologies
- Node.js
- Express.js
- MongoDB
- Docker
- Kubernetes
- Google Cloud Platform (GCP)

## Steps and Configurations

### 1. GitHub Repository
- Created a GitHub repository and pushed all the source code and configuration files.

### 2. GCP Setup
- Created a GCP project and enabled the necessary APIs.
- Created a service account and generated a key file.

### 3. Docker Image Build and Push
- Built the Docker image using the following command:
```bash
  docker build -t gcr.io/my-project-3-425203/medical-appointment-system:latest .
```
- Pushed the Docker image to Google Container Registry (GCR)
```bash
docker push gcr.io/my-project-3-425203/medical-appointment-system:latest
```
### 4. Kubernetes Deployment
- Created a Kubernetes cluster and deployed the application using the following commands:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
- Checked the status of the Pods and Services:
```bash
kubectl get pods
kubectl get services
```
### 5. MongoDB Deployment and Service Creation
- Deployed MongoDB using the following command:
```bash
kubectl apply -f mongodb-deployment.yaml
```
### Challenges Encountered
Configuring MongoDB Connection

- Issue: Encountered issues connecting to MongoDB.
Solution: Resolved by deploying MongoDB as a service in Kubernetes and updating the application code to connect to the MongoDB instance in Kubernetes. Specific steps included creating MongoDB Deployment and Service, and updating the MongoDB connection string in the Node.js application to use the Kubernetes service address.
Docker Image Build

- Issue: Faced compatibility issues with Node.js version during Docker image build.
Solution: Updated the Node.js version and modified the Dockerfile to ensure compatibility. Specific steps included specifying a newer Node.js version in the Dockerfile, rebuilding the image, and pushing it to GCR.
Kubernetes Pod Status Issues

- Issue: Pods were not in the Running state, showing Error or CrashLoopBackOff status.
Solution: Investigated the issue by checking the Pod logs and identified errors in the application code. Fixed the errors, rebuilt the Docker image, and updated the Kubernetes deployment. Specific steps included using kubectl logs to check Pod logs, fixing the errors, rebuilding the image, and redeploying the application.
Unfamiliarity with Google Cloud

- Issue: Lack of familiarity with using Google Cloud Platform (GCP), leading to difficulties in setting up the GCP project and enabling APIs.
Solution: Overcame this by consulting online resources and tutorials to learn how to create a GCP project, enable necessary APIs, create a service account, and generate keys. Specific steps included accessing GCP documentation and tutorials and following step-by-step instructions to complete the GCP setup.

### Conclusion
This project demonstrates how to build and deploy a cloud-native medical appointment system using Node.js, Docker, Kubernetes, and GCP. Throughout the process, various technical challenges were encountered and resolved, providing deeper understanding and practical experience in cloud-native application development.