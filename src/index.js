import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// Let's explore the nuanced difference between
// using the 'function' keyword and arrow functions
function createObject() {
  console.log('outermost this:', this) // undefined

  return { // return an object
    arrowFunction: () => {
      console.log('arrowFunction this:', this) // undefined
    },
    functionKeywordFunction: function () {
      console.log('functionKeyword this:', this) // points to both!
    }
  }
}

const obj = createObject();
console.log('obj:', obj)
obj.arrowFunction()
obj.functionKeywordFunction()

