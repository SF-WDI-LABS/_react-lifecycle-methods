# React Component Lifecycle

### Why is this important?

When React creates components, it inherently invokes lifecycle methods under the hood. As a developer, it's good to understand them because you may want to perform certain operations when a component is created, updated, or destroyed.

### What are the objectives?

* Clarify the three categories of React lifecycle methods
* Identify which lifecycle methods are appropriate for different situations
* Code some basic samples implmementing lifecycle methods

React class components provide several lifecycle methods that you can use to control your application based on the state of the UI.

These methods happen automatically - but you can call them to modify them.

These methods are called at specific points in the rendering process. You can use these methods to perform actions based on what's happening on the DOM.

* `componentDidMount`, for example, is called immediately *after* a component is rendered to the DOM.
* `componentWillUnmount` is called immediately *before* a component is removed from the DOM.

Some common uses of lifecycle methods are making asynchronous requests, binding event listeners, and optimizing for performance.

## At a very high level

React components' lifecycle events fall into three broad categories:


* **Initializing / Mounting** e.g. What happens when the component is created? Was an initial state set? Methods:
  - `constructor()`
    - This is sometimes referred to as a combination of `getInitialState()` and `getDefaultProps()`
  - `componentWillMount()`
  - `componentDidMount()`
  - `render()`


* **Updating** e.g. Did an event happen that changed the state? Methods:
  - `componentWillReceiveProps()`
  - `shouldComponentUpdate()`
  - `componentWillUpdate()`
  - `componentDidUpdate()`
  - `render()`


* **Destruction / Unmounting** e.g. What needs to happen when we're done with the component? Method:
  - `componentWillUnmount()`


## Let's examine!

Clone down this repo, `cd` into the sample project folder, and `npm install` and `npm start`. You'll see a basic app that lets us increment a counter. Check out the code in App.js and notice we've added some of the lifecycle methods and console logs for when they occur. Try incrementing or decrementing a counter. What do you notice? Which lifecycle methods are being called?

### Reference
* [medium article](https://medium.com/mofed/reacts-component-lifecycles-adf0ebc89d23)
* [another good article](http://busypeoples.github.io/post/react-component-lifecycle/)
* [specific React docs](https://facebook.github.io/react/docs/state-and-lifecycle.html)