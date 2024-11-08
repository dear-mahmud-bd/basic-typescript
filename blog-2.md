# Handling Asynchronous Operations in TypeScript Using `async`/`await`
The asynchronous operations in TypeScript can be performed in the same way as simple JavaScript. Use the Promises, Callbacks, and async/await statements to handle the asynchronous operation in TypeScript. In TypeScript, function async and await with a Promise to simplify asynchronous code and make it more readable. The below syntax will show how one can use different approaches to handle the asynchronous operations in TypeScript. 


## Introduction
In TypeScript, asynchronous operations have traditionally been managed using `callbacks` and `promises`. With the introduction of `async`/`await`, handling asynchronous operations has become simpler and more readable.


### Terminology
- **Callback**: A callback function is a function that is passed as an argument to another function and is executed after that function has finished (A callback function can run after another function has finished).
- **Asynchronous**: Functions running in parallel with other functions are called asynchronous.
- **Promise**: "Producing code" is code that can take some time. "Consuming code" is code that must wait for the result. (A Promise is an Object that links Producing code and Consuming code)
- **Async/Await**: A syntax in TypeScript that simplifies working with promises, making asynchronous code appear synchronous (async makes a function return a Promise, await makes a function wait for a Promise).


## Why Use `async`/`await`?
- **Readability**: `async`/`await` makes the code easier to read and understand.
- **Error Handling**: It allows `try/catch` blocks for error handling.


## Examples

### Using Promises
```typescript
const fetchDataPromise = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
};
const displayData = async () => {
    const data = await fetchDataPromise();
    console.log(data);
};
displayData();
```


### Using `async` / `await`
```typescript
const fetchDataAsync = async (): Promise<string> => {
    new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
}
const displayData = async () => {
    const data = await fetchDataAsync();
    console.log(data);
};
displayData();
```