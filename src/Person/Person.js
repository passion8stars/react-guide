import React, { useState } from 'react';
const Person = (props) => {
    const [count, setCount] = useState(0);
    const [likeCount, setLikeCount] = useState('Good');
    const handleLikeCount = () => {
        setLikeCount('Bad')
    }
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p >My Age : {props.age}</p>
            {props.children}
            <button onClick={() => setCount(count + 1)}>Click ({count})</button>
            <button onClick={handleLikeCount}>Likes ({likeCount})</button>
            <input type="text" value={props.name} onChange={props.changed} id={props.key}/>
            <button onClick={props.click}>Remove</button>
        </div>
    );
};

export default Person;