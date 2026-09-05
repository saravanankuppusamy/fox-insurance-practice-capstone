# Fox Insurance Practice Capstone - Student Lab Guide

## Business Problem
Fox Insurance representatives currently manage customer service requests through email and spreadsheets. Build a web application that lets authenticated users manage customers, policies, and service requests.

## Core Models
### User
- name
- email
- passwordHash
- role: `representative` or `admin`

### Customer
- customerNumber
- firstName
- lastName
- email
- phone
- state
- status: `active` or `inactive`
- owner (User reference)

### Policy
- policyNumber
- customer (Customer reference)
- type: `auto`, `home`, `travel`, `health`
- premium
- status: `active`, `pending`, `cancelled`, `expired`
- effectiveDate
- expirationDate

### ServiceRequest
- requestNumber
- customer
- policy (optional)
- category: `billing`, `coverage-change`, `documents`, `address-change`, `cancellation`, `other`
- description
- priority: `low`, `medium`, `high`
- status: `open`, `in-progress`, `resolved`, `closed`
- assignedTo
- notes[]

## Required Features
1. Register/login using JWT authentication.
2. Protect application routes.
3. CRUD for customers.
4. CRUD for policies.
5. CRUD for service requests.
6. Search and filter service requests.
7. Add notes to a service request.
8. Dashboard totals and status summaries.
9. Centralized backend error handling.
10. Dockerized frontend/API/database.
11. HTTPS through Nginx with a self-signed certificate.
12. Deploy to a local Kind cluster.
13. Add API and React tests.
14. Prepare a README and short presentation.

## Acceptance Criteria
- Unauthenticated users cannot use protected API routes.
- Passwords are never returned from the API.
- Validation errors return meaningful HTTP 400 responses.
- Duplicate email or unique business IDs return HTTP 409.
- Client handles loading and error states.
- Dashboard reads live data from the API.
- Docker Compose starts the complete system.
- Kubernetes resources become Ready.
