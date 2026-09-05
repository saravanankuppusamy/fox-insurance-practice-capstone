# Day 5 - Kubernetes with Kind

## Create Cluster
```bash
kind create cluster --name fox-practice --config k8s/kind-config.yaml
```

## Build Images
```bash
docker build -t fox-practice-api:latest ./fox-api
docker build -t fox-practice-client:latest ./fox-client
kind load docker-image fox-practice-api:latest --name fox-practice
kind load docker-image fox-practice-client:latest --name fox-practice
```

## Deploy
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/mongo.yaml
kubectl apply -f k8s/api.yaml
kubectl apply -f k8s/client.yaml
```

## Verify
```bash
kubectl get all -n fox-practice
kubectl get pvc -n fox-practice
kubectl logs -n fox-practice deployment/fox-api
```

Open http://localhost:30080

## Cleanup
```bash
kind delete cluster --name fox-practice
```
