**# The project is made to serve _cdsw_ and _e2e_ component as part of POC.**

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run (node version 18)

### `npm install`

### `npm start`

Commands to deploy to rke dev env.

### docker buildx build --platform=linux/amd64 -t crony:v1 .

### docker tag crony:v1 docker-registry.infra.cloudera.com/kubecat-dev/crony:v1

### docker push docker-registry.infra.cloudera.com/kubecat-dev/crony:v1

### helm upgrade crony-v1 crony/ --install --values crony/values.yaml --values crony/values-rke-dev.yaml --create-namespace --namespace crony-1 --debug
