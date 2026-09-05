# Day 1 - API, MongoDB, Authentication

## Goals
Build the Express + TypeScript backend and understand the complete request path:
`HTTP Request -> Route -> Middleware -> Mongoose Model -> MongoDB -> JSON Response`.

## Tasks
1. Install dependencies and review `tsconfig.json`.
2. Configure `.env` with `PORT`, `MONGODB_URI`, `JWT_SECRET`, `CLIENT_ORIGIN`.
3. Review the Mongoose models.
4. Run the seed script.
5. Test `/api/health`.
6. Register and login.
7. Copy the JWT and test protected routes.
8. Create, update, list, filter, and delete customers.
9. Repeat for policies and service requests.
10. Inspect validation and centralized error handling.

## Useful curl examples
```bash
curl http://localhost:4000/api/health

curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@foxinsurance.demo","password":"Password123!"}'
```

## Checkpoint
You should be able to explain why authentication middleware runs before protected route logic and why the API stores references as MongoDB ObjectIds.
