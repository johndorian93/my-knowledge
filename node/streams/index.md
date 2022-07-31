There are two types of streams:
- writable
- readable

Streams are used to processing huge amount of data chunk by chunk.

Readable streams.
Let's say that we have a huge text file and we want to process it. There is no sense to load it to the memory and process it as a whole. It is inefficient.
Instead of that we can read it chunk by chunk in optimal way.

Writable streams.
Let's flip the situation, we want to create a new file and put huge amount of data there. We can use writable streams for it. Write the file line by line instead putting all data at once. The last operation could fail because of memory problems or so. It is better to do it chunk-by-chunk.


There is a very useful library to transforms streams that is called through2: https://www.npmjs.com/package/through2

There is a nice analogy between streams - to be more specific pipes - and how express.js works.
Basically the next function of middleware acts the same as pipes.