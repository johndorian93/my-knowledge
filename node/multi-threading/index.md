Source:
https://stackoverflow.com/questions/56656498/how-do-cluster-and-worker-threads-work-in-node-js

Assumptions:
- JS is single threaded
- Node.js is an environment that runs JS engine not in a web browser
- A single process may contain number of threads.
- A process is launched on a CPU
- "Worker" is synonyms of "Process"

We have two ways of dealing multi-threading in node.


1. Clusters

- One process is launched on each CPU
- If we have 4 CPU then we have 1 + 4 processes
- Primary process forks workers and each worker runs separate - for example - HTTP server
- Communication is done via IPC
- Each process has its own memory with it's own Node (v8) instance
- A weakness: creating tons of the processes create memory issues
- Use case: running multiple HTTP servers that share the same port.

The perfect example is throng library: https://www.npmjs.com/package/throng
And Heroku clustering: https://devcenter.heroku.com/articles/node-concurrency
That uses the "WEB_CONCURRENCY" env variable to run multiple HTTP servers.

2. Worker threads

- Only one process total
- It creates multiple threads.
- Each thread has its own Node instance (so one event loop, one JS V8 engine)
- Node is embedding itself and creating a new thread
- Threads share memory with other threads (e.g. SharedArrayBuffer)
- Use case: intensive tasks like data processing or file accessing. 
- JS is single threaded, synchronous tasks can be made more efficient with workers
