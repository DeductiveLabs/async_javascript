# Asynchronous javascript with Q

## Installation

```
npm install
```

## Examples

### Asynchronous function
`async.js`
We want to access the returend value.
The function returns a value asynchronous. The value is undefined when we try to access it.

### Asynchronous function with Q
`async_with_q.js`
The function returns a promise. When the promise gets resolved the `then` method gets triggered.

### Chained asynchronous functions
`chained_async.js`
We want to send the output of the first asynchronous function to the next one and then get the resulting value.

### Chained asynchronous functions with Q
`chained_async_with_q`
In the `then` method of the first promise we return the promise from the second function. The first promise is then resolved and can be used as the input of the second function. When the second promise resolves, the final value is accessable.

### Combined asynchronous functions
`combined_async.js`
We have 2 asynchronous functions. We want to get the value from both of them and then combine them.

### Combined asynchronous functions with Q
`combined_async_with_q.js`
We create a new asynchronous function that returns a promise that resolves both values when both of the input promises gets resolved.

### Error handling with Q
`async_error`
Our `getData` functions has an error and the promise gets rejected instead of resolved.

### Chained error handling with Q
Again our `getData` fails. This time the rejected promise gets propagated through the `addData` function.

### Combined error handling with Q
The error gets propagated also when the asynchronous functions are combined.



