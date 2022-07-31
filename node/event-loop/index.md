Assumptions
- Node.js JS code runs on a single thread. Only one thing happening at time
- It simplifies a lot. Don't have to worry about concurrency issues
- For browsers there is one event loop for every browser tab to separate things and avoid the whole browser's crash due to heavy processing or infinite loop
- Web workers run in their own event loop
- JS engine, e.g.: V8 consist of heap, stack
- JS engine does not contain things like: AJAX, DOM, setTimeouts and more. It is up to browser or other environment (node)
- JS has single call stack (one thread, one thing at time)
- "Block" operation means that it is something that takes relatively long time. For example console.log is not "blocked" operation, but connecting a DB is.
- If we use functions like fs.readFileSync then our call stack is literally blocked and no other actions can be done meanwhile. The other actions will be performed once the file reading is finished. It is extremely inefficient.
- That is why - for this example - we should use fs.readFileAsync. Ok, we have to deal with callbacks but we can perform other operations in meantime.
- That is why callbacks are so popular in JS

Heap (V8)
- Responsible for memory allocation

Call stack (V8)
- LIFO queue (last in first out)
- Stack of functions to execute

WebAPIs/C++ API
- For browser WebAPI contains DOM, AJAX, setTimeout and other features
- For node C++ API contains fs, crypto and other features

Callback queue
- Stores callbacks from WebAPI/C++ API. It handles macrotasks (setTimeout, setImmediate)

Job queue
- It is extra queue, similar to the callback queue, but dedicated to Promises. It handles microtasks (Promise.then())

Event loop
- EventLoop constantly checks both callback queue and stack. If there is a callback on the callback queue and stack is empty then the function from callback queue is moved to the stack and executed

Resources
- Good examples of functions processing - https://nodejs.dev/learn/the-nodejs-event-loop
- Event loop explanation - https://www.youtube.com/watch?v=8aGhZQkoFbQ

Others:
- setTimeout with 0
It defers execution of code in time. If we want to make sure that some code is ran after some other code (e.g. console.log) then wrap it with the setTimeout with 0. The callback will go through callback queue and go to stack once it is empty
Interesting thing. The second parameter (time) of setTimeout does not guarantee that the function passed in the first parameter executes exactly in the time, it is rather AT LEAST in this time. For example, time = 2000 and execution may be done in time = 2001
Pretty always it has higher priority than setImmediate in terms of execution

- setImmediate 
Makes sure that function or instruction wrapped by this function will be run immediately after the browser has completed other operations such as events and display updates
"When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the setImmediate() function provided by Node.js"
It has rather low priority in terms of execution

- process.nextTick
It has the highest priority in terms of execution

Source: https://nodejs.dev/learn/understanding-setimmediate
