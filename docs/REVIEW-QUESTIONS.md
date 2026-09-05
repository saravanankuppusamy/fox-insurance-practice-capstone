# Practice Project Review Questions and Reflection

## Architecture
1. Explain the request/response flow from the React client to MongoDB and back.
2. Why is TypeScript useful on both the frontend and backend?
3. What responsibilities belong in Express middleware?
4. Why are Mongoose references useful for Customer -> Policy -> ServiceRequest relationships?

## Authentication and Security
5. What happens during login from password submission to JWT creation?
6. Why should passwords be hashed with bcrypt?
7. Why should JWT secrets and MongoDB connection strings not be committed to Git?
8. What is the difference between authentication and authorization?

## React
9. What is the purpose of AuthContext?
10. Why does ProtectedRoute exist?
11. When does `useEffect` run on the Dashboard page?
12. Explain loading, success, empty, and error UI states.

## Docker / Nginx / SSL
13. What problem does Docker Compose solve?
14. Why can the API connect to `mongo` and Nginx connect to `api` by service name?
15. What is a multi-stage Docker build?
16. What does Nginx do in this project?
17. Why does a self-signed certificate produce a browser warning?

## Kubernetes
18. Explain Deployment vs Service.
19. Why is MongoDB backed by a PersistentVolumeClaim?
20. Why is `imagePullPolicy: Never` useful with Kind-loaded local images?
21. What do readiness and liveness probes tell Kubernetes?

## Reflection
22. What was your most difficult problem?
23. How did you diagnose and solve it?
24. Which AI tools did you use, and for what tasks?
25. What percentage of the work was primarily yours vs AI-assisted?
26. Rate your full-stack development confidence before and after this practice project.
27. What will you do differently in the September capstone?
