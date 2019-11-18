import React from 'react';
const person =(props)=>{
    return (
        <div className="person">
        <h1>{props.name}</h1>
        <p>My Age : {props.age}</p>
        {props.children}
        </div>
    );
};

export default person;