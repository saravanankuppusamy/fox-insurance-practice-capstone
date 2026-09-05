# Day 4 - Docker, Compose, Nginx, SSL

## Goals
Understand how the same application moves from local processes to containers.

## Tasks
1. Build API multi-stage Docker image.
2. Build React assets and serve them from Nginx.
3. Use Docker Compose to run MongoDB + API + client.
4. Verify container DNS: Nginx uses `api:4000`, API uses `mongo:27017`.
5. Generate a self-signed certificate using `generate-certs.sh`.
6. Start `docker-compose.prod.yml`.
7. Verify HTTP redirects to HTTPS.
8. Confirm the browser warning is expected for a development self-signed certificate.

## Security Reminder
Never commit private key files from `certs/`.
