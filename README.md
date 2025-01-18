# Node.js Server Hang: Missing res.end()

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` after sending the response.  This can lead to the server hanging and connections remaining open indefinitely.

## Bug

The `bug.js` file contains a simple HTTP server that omits the crucial `res.end()` call. This causes the server to hang, as the client doesn't receive a proper response closure.

## Solution

The `bugSolution.js` file corrects the issue by adding the `res.end()` call after `res.write()`. This ensures that the connection is properly closed after sending the response, preventing the server from hanging.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to see the hanging server.
4. Run `node bugSolution.js` to see the corrected version.