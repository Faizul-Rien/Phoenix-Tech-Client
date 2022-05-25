import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (
        <div>
            <section className='grid grid-cols-1 lg:grid-cols-2 lg:ml-16 mb-20 lg:mt-10'>
            <div class="card lg:w-11/12  mb-10 mt-10 lg:mt-0 bg-pink-100">
  <div class="card-body">
    <h2 class="card-title text-lg text-orange-500"> How will you improve the performance of a React Application?</h2>
    <p className='text-xs'>Optimizing performance is an important technique to consider before shipping a React application. You can explore different ways of optimizing a React application that can enable a significant increase in speed and overall user experience for your applications.Another way of optimizing a React app is by making sure you bundle your app for production before deploying. By default, your app is in development mode, which means React will include helpful warnings. This can be very useful while you’re developing, but it can make your app size large and responses slower than usual.Lazy loading is a great technique for optimizing and speeding up the render time of your app. The idea of lazy loading is to load a component only when it is needed. React comes bundled with the React.React.memo is a great way of optimizing performance as it helps cache functional components.When you want to render an enormous table or list of data, it can significantly slow down your app’s performance. Virtualization can help in a scenario like this with the help of a library like react-window.The techniques outlined above are all great ways for you to take into practice optimizing performance for your application. </p>
  </div>
</div>
            <div class="card lg:w-11/12 bg-pink-100 mb-10 ">
  <div class="card-body">
    <h2 class="card-title text-lg text-orange-500">What are the different ways to manage a state in a React application?</h2>
    <p className='text-xs'>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.Sometimes the useState hook won’t cut it, especially when dealing with complex state behavior that may involve large objects. The useReducer hook is a powerful provided React hook for dealing with complex state management that doesn’t require third-party dependencies. Also, it reduces the amount of data recreated with each render.When using React hooks, you can sometimes end up with incredibly complex state logic within one component that utilizes multiple types of hooks to achieve one purpose.Thankfully, we can make custom React hooks to encompass complex logic into a single accessible hook. This can come in handy for forms, toggles, asynchronous behavior, and anything else where you end up with a mess of hooks in your component.In most cases, you don’t need a state management library. Only in larger applications that are dealing with complex states should you bring in an external library to manage it.Even then, reconsider if you can’t just use the provided Context API to share data between components.</p>
  </div>
</div>
            <div class="card lg:w-11/12 bg-pink-100 mb-10 ">
  <div class="card-body ">
    <h2 class="card-title text-lg text-orange-500">How does prototypical inheritance work?</h2>
    <p className='text-xs'>In programming, we often want to take something and extend it.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods,just build a new object on top of it Prototypal inheritance is a language feature that helps in thatIn JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”: When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.The property [[Prototype]] is internal and hidden, but there are many ways to set it.There are only two limitations:The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.The value of __proto__ can be either an object or null. Other types are ignored.Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.</p>
  </div>
</div>
            <div class="card lg:w-11/12 bg-pink-100 mb-10 ">
  <div class="card-body">
    <h2 class="card-title text-lg text-orange-500">Why you do not set the state directly in React?</h2>
    <p className='text-xs'>Despite React’s popularity, one of its biggest drawbacks is its components re-rendering excessively. When developing React applications, you may have noticed that state updates don’t immediately reflect new values after being changed. React state is a plain JavaScript object that holds information that influences the output of a render.To update state in React components, we’ll use either the this.setState function or the updater function returned by the React.useState() Hook in class and function components, respectively.State updates in React are asynchronous; when an update is requested, there is no guarantee that the updates will be made immediately. The updater functions enqueue changes to the component state, but React may delay the changes, updating several components in a single pass.In React, every state update causes the component being updated to re-render. Because re-rendering is an expensive operation, making state updates synchronously can cause serious performance issues, for example, increasing load times or causing your application to crash. By batching state updates, React avoids unnecessary re-renders, boosting performance overall.</p>
  </div>
</div>
            <div class="card lg:w-11/12 bg-pink-100 mb-10 ">
  <div class="card-body">
    <h2 class="card-title text-lg text-orange-500">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
    <p className='text-xs'>In JavaScript, you will often be working with data that is stored in Arrays. A common task will be searching the array to find if it contains a value (or values) that satisfies certain search criteria. Depending on the task at hand, you may be interested in a boolean value for confirmation, an index for the position of the value in the array, or a separate array containing all the search results.The find() method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined.find() is helpful for use cases where you want a single search result value.The array.find() method checks all the array elements, and whichever the first element meets, the condition will print. If more than one item meets the condition, the first item satisfying the requirement is returned.avascript Array Find method is a pure function because it does not mutate an array on which it is called. Instead, it will return a value that satisfies its condition.</p>
  </div>
</div>
            <div class="card lg:w-11/12 bg-pink-100 ">
  <div class="card-body">
    <h2 class="card-title text-lg text-orange-500">What is a unit test? Why should write unit tests?</h2>
    <p className='text-xs'>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.Unittesting is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results. </p>
  </div>
</div>
        
        </section>
        <Footer></Footer>
        </div>
    );
};

export default Blog;