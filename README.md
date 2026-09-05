# Fox Insurance Practice Capstone

A 4-5 day **practice project** designed to prepare students for the WA3478 Phase 3 capstone.

## Scenario
Fox Insurance needs a **Customer Service Request Tracker** for service representatives and administrators. The application tracks customers, insurance policies, and service requests such as address changes, billing questions, coverage updates, document requests, and cancellation inquiries.

This practice project intentionally mirrors the technical workflow of the final capstone while using a different business problem.

## Technology Stack
- Node.js + Express + TypeScript
- MongoDB + Mongoose
- React + TypeScript + Vite
- JWT authentication + bcrypt password hashing
- Docker + Docker Compose
- Nginx + self-signed SSL/TLS
- Kubernetes with Kind
- Vitest / React Testing Library
- Git / GitHub workflow

## Suggested 4-5 Day Plan
| Day | Focus | Main Deliverable |
|---|---|---|
| Day 1 | API + MongoDB + Authentication | Working REST API and seed data |
| Day 2 | React client + auth + dashboard | Login, dashboard, customer/policy views |
| Day 3 | Service request CRUD + testing | End-to-end request workflow |
| Day 4 | Docker + Nginx + SSL | Full-stack container deployment |
| Day 5 | Kind/Kubernetes + review | K8s deployment, documentation, presentation |

## Quick Start - Local Development
### Prerequisites
- Node.js 20+
- npm 10+
- MongoDB 7 or 8 locally, or Docker

### API
```bash
cd fox-api
cp .env.example .env
npm install
npm run seed
npm run dev
```
API: http://localhost:4000

### Client
```bash
cd fox-client
npm install
npm run dev
```
Client: http://localhost:5173

## Docker Compose
```bash
docker compose up --build
```
Open: http://localhost:3000

## Production HTTPS Demo
```bash
./generate-certs.sh
docker compose -f docker-compose.prod.yml up --build
```
Open: https://localhost:8443

## Kubernetes / Kind
See `docs/DAY5-KUBERNETES.md`.

## Seed Login Accounts
- Admin: `admin@foxinsurance.demo` / `Password123!`
- Representative: `rep@foxinsurance.demo` / `Password123!`

## Student Learning Rule
AI tools are permitted for practice, but students should be able to explain every significant component, route, model, React hook, Docker instruction, and Kubernetes manifest they submit.

## Repository Map
- `fox-api/` - Express + TypeScript backend
- `fox-client/` - React + TypeScript frontend
- `k8s/` - Kind and Kubernetes manifests
- `docs/` - student guides, review questions, presentation checklist
- `docker-compose.yml` - development full stack
- `docker-compose.prod.yml` - Nginx + HTTPS production-style stack
- `generate-certs.sh` - local self-signed certificate helper
