import React from 'react';
const person =(props)=>{
    return (
        <div class="person">
        <h1>{props.name}</h1>
        <p>My Age : {props.age}</p>
        </div>
    );
};

export default person;