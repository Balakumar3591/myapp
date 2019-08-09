import React from 'react';
// Functional components example(often to be used and it is a best practice)
const person = (props)=>{
    //return<p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!</p>
    // outputting dynamic content to the webpage
    // For doing dynamic outputting we need to use {}
    return<p>I'm {props.name} and I am {props.age} years old!</p>
    // if we use Functional components we need to use props.parameters or attributes to fetch value and render it in UI
    // if we use class-based components we need to use this.props to fetch value and render it in UI
}

export default person;