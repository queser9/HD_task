# Medical Appointment System

## Overview
This project is a cloud-native medical appointment system built with Node.js and deployed on Google Cloud Platform (GCP). The application allows users to register, log in, and manage medical appointments. The project is designed to be scalable, secure, and efficient.

## Features
- **User Registration:** Allows new users to register with the system.
- **User Login:** Authenticates users and provides access to the application.
- **Appointment Management:** Allows users to schedule, view, and manage medical appointments.

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Cloud Platform:** Google Cloud Platform (GCP)

## Architecture
The system is built using a microservices architecture, with each component running in a separate container. The application uses MongoDB for data storage and is deployed on a Kubernetes cluster in GCP.

## Project Setup

### Prerequisites
- Node.js
- Docker
- Kubernetes
- MongoDB
- Google Cloud Platform (GCP) account

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/medical-appointment-system.git
    cd medical-appointment-system
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    MONGO_URI=<Your MongoDB URI>
    PORT=3000
    ```

4. **Build and run the Docker container:**
    ```bash
    docker build -t medical-appointment-system .
    docker run -p 3000:3000 --env-file .env medical-appointment-system
    ```

5. **Deploy to Kubernetes:**
    ```bash
    kubectl apply -f deployment.yaml
    kubectl apply -f service.yaml
    ```

### Usage

1. **Access the application:**
    Open your web browser and navigate to `http://<your-kubernetes-external-ip>`.

2. **Register a new user:**
    Fill in the registration form and submit to create a new account.

3. **Log in:**
    Use your registered credentials to log in to the application.

4. **Manage appointments:**
    Schedule, view, and manage your medical appointments through the application interface.

## Challenges Encountered
1. **Configuring MongoDB Connection**
    - **Issue:** Encountered issues connecting to MongoDB.
    - **Solution:** Resolved by deploying MongoDB as a service in Kubernetes and updating the application code to connect to the MongoDB instance in Kubernetes. 

2. **Docker Image Build**
    - **Issue:** Faced compatibility issues with Node.js version during Docker image build.
    - **Solution:** Updated the Node.js version and modified the Dockerfile to ensure compatibility.

3. **Kubernetes Pod Status Issues**
    - **Issue:** Pods were not in the Running state, showing Error or CrashLoopBackOff status.
    - **Solution:** Investigated the issue by checking the Pod logs and identified errors in the application code. Fixed the errors, rebuilt the Docker image, and updated the Kubernetes deployment.

4. **Unfamiliarity with Google Cloud**
    - **Issue:** Lack of familiarity with using Google Cloud Platform (GCP), leading to difficulties in setting up the GCP project and enabling APIs.
    - **Solution:** Overcame this by consulting online resources and tutorials to learn how to create a GCP project, enable necessary APIs, create a service account, and generate keys.

## Conclusion
This project demonstrates how to build and deploy a cloud-native medical appointment system using Node.js, Docker, Kubernetes, and GCP. Throughout the process, various technical challenges were encountered and resolved, providing deeper understanding and practical experience in cloud-native application development.

## Purpose and Benefits

Creating the Medical Appointment System was a personal endeavor to address the inefficiencies and frustrations of scheduling medical appointments. The constant phone calls, long waiting times, and frequent miscommunications make the process stressful for both patients and healthcare providers. I wanted to create a system that could alleviate these issues, making the process smoother and more reliable.

This application brings ease and order to appointment scheduling by automating the process, reducing the burden on medical staff, and minimizing errors. Patients can access the system from anywhere, at any time, allowing them to manage their appointments conveniently. Automated reminders and notifications enhance communication, reducing missed appointments and ensuring both parties are always informed.

Building this as a cloud-native application ensures scalability and efficiency as the user base grows. The centralized database offers secure and accessible data management, helping healthcare providers make informed decisions. Security was a top priority, ensuring patient data is protected through best practices and regulatory compliance.

Although this is just an initial version, I believe it is a promising prototype. In the future, if given the opportunity, I aim to develop more user-friendly features to benefit the community further. This project is my attempt to make a meaningful impact by improving the healthcare experience, reducing stress, and enhancing communication.
