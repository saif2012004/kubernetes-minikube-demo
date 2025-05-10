# Kubernetes Project with Minikube

This project demonstrates the deployment of a web application using Kubernetes and Minikube, with CI/CD integration through GitHub Actions.

## Project Structure

```
.
├── app/                    # Web application code
├── k8s/                    # Kubernetes manifests
│   ├── deployment.yaml
│   └── service.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Dockerfile
└── README.md
```

## Prerequisites

- Docker
- Minikube
- kubectl
- Node.js (for local development)

## Setup Instructions

### 1. Install Prerequisites

- Install Docker: https://docs.docker.com/get-docker/
- Install Minikube: https://minikube.sigs.k8s.io/docs/start/
- Install kubectl: https://kubernetes.io/docs/tasks/tools/

### 2. Start Minikube

```bash
minikube start
```

### 3. Build and Run Locally

```bash
# Build Docker image
docker build -t my-app:latest .

# Run container
docker run -p 3000:3000 my-app:latest
```

### 4. Deploy to Kubernetes

```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Get service URL
minikube service my-app-service
```

## Development

The application is a Node.js web application with a React frontend. To run locally:

```bash
cd app
npm install
npm start
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow:

1. Builds the Docker image
2. Pushes to Docker Hub
3. Deploys to Minikube

## License

MIT
