import React from 'react';
import './index.css';

function Card(props){
    const {thumbnail, title, firstName, lastName, email, age} = props
    return(
        <div className='card-wrapper'>
            <img src={thumbnail} width={60} height={60} alt={firstName}/>
            <div className='card-detail'>
                Title: {title}<br/>
                First name: {firstName}<br/>
                Last name: {lastName}<br/>
                Email: {email} <br/>
                Age: {age}<br/>
            </div>
        </div>
    )
}

export default Card;