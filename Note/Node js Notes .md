# Node js notes

1. Utilities & Architecture

- Node.js Events & Call Stack / Callback Queue:
  Node runs JavaScript on an event-driven, single-threaded loop. The call stack processes function calls, while async operations (I/O, timers) are deferred to the callback queue and executed when the stack is clear—this is the Event Loop.

- MVC Architecture:
  Separates concerns: Model (data layer), View (presentation), Controller (business logic). In Node, frameworks like Express often structure apps this way.

- HTTP Methods:
  Standard verbs: GET (read), POST (create), PUT/PATCH (update), DELETE (delete), plus HEAD, OPTIONS. Each corresponds to a RESTful action.

- Schemas/Models (Mongoose):
  Define structured data models in Node via Mongoose: schemas with fields, types, validation, and compile them into models for CRUD operations.

2. Core Modules

- fs (file system): reading/writing files, streaming file data.

- path: handle file/directory paths, normalization, joining.

- http: build HTTP/S servers.

- url: URL parsing & formatting.

- os: OS-level info (CPU, memory, network).

- events: create and handle EventEmitter instances.

- stream: manage streaming data—Readable, Writable, Transform streams.

3. Asynchronous Programming

- Callbacks: traditional style (fs.readFile('file', cb)), prone to “callback hell.”

- Promises: new Promise(), .then() and .catch() chaining.

- Async/Await: wrap Promises in async function foo() { await ... }.

- Error Handling: try/catch with async/await, handle errors in .catch() for Promises, use process.on('uncaughtException') or Express error handlers for robustness.

4. Middleware & Routing (Express)

- Basic Routes:

js
Copy
Edit
app.get('/posts', handler)
app.post('/posts', handler)
Middleware:
Functions that access req, res, and next(). They can parse JSON (body-parser), handle CORS, logging, validation, error-handling, etc.

5. Authentication & Authorization

- JWT: stateless tokens that carry info; signed and verified on each request.

- OAuth: authorization protocol for delegation (e.g., “Login with Google”).

- Session-based (e.g. Express-Session): stores session IDs server-side; clients hold only cookies.

6. WebSockets & Real-Time
   Socket.io: abstraction over WebSockets + fallback: enables real-time bidirectional communication.

- WebRTC: browser-to-browser peer connections with low latency; used for audio/video.

- Event-Driven Architecture: decouple modules using events—for instance, an EventEmitter for business signals, broadcasting updates via WebSockets.

7. Microservices & API Gateway

- Building microservices: modular services each running on Node (e.g., one for users, one for payments).

- API Gateway: a front-facing layer (built with Express, Fastify or Kong) that routes requests to appropriate microservices.

- Service Discovery & Communication: techniques like Consul or Eureka, or using simple DNS/registry via Docker/
- Kubernetes; communication via HTTP or message bus (RabbitMQ, Kafka).

8. Performance Optimization

- Caching: in-app or distributed caches via Redis or Memcached to reduce load.

- Load Balancing: spread traffic across instances (e.g., NGINX, AWS ELB).

- Async Best Practices: offload CPU-heavy tasks, batch DB calls, avoid blocking the Event Loop, use streams for large data.

9. Logging & Monitoring

- Winston/Morgan: Winston for structured logs, Morgan for HTTP request logging.

- ELK Stack: aggregate and search logs using Elasticsearch, Logstash, Kibana.

- APM Tools: New Relic, DataDog, or open-source alternatives to monitor performance metrics and trace bottlenecks.

10. Testing in Node.js

- Unit Testing: Jest, Mocha + Chai for isolated function/component tests.

- Integration Testing: spin up DB or services and test API endpoints.

- E2E: Cypress or Selenium to simulate full workflows via front-end and backend.

11. Background Jobs & Queues

- Bull.js: backed by Redis—use for robust job queues.

- Agenda.js: scheduling jobs (like batch emails, cron tasks).

- Useful for tasks that don't belong in request-response cycle.

12. CI/CD

- Dockerizing Apps: Dockerfile with FROM node, copying dependencies, CMD node index.js.

- CI Pipelines: GitHub Actions or Jenkins pipelining tests/builds/deployments.

- Deploying: push images or code to AWS (ECS, Lambda), DigitalOcean droplets, or Heroku.

13. GraphQL Advanced Concepts

- Apollo Server: Node GraphQL implementation.

- Resolvers & Schema Stitching: modularize complex schemas by merging multiple GraphQL schemas/resolvers.

- Subscriptions: GraphQL’s real-time support for Pub/Sub over WebSockets.

14. Building a Full-stack MERN App

- Backend: Node + Express + MongoDB, JWT auth, GraphQL or REST API.

- Frontend: React SPA, fetch access tokens, manage auth state.

- State Management: Redux or React Context.

- Integration: React fetches data from Express, which uses Mongoose; authentication shared via token; WebSockets (via Socket.io-Apollo subscriptions) for real-time features.
