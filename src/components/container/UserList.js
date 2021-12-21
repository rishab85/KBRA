import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserList } from '../../store/user/selector';
import Card from '../atoms/card';

function UserList(){

    const userListResponse = useSelector(selectUserList);
    // Title: {title}<br/>
    // First name: {firstName}<br/>
    // Last name: {lastName}<br/>
    // Email: {email} <br/>
    // Age: {age}<br/>

    function UserList(){
        return userListResponse.map((each)=>{

            const {
                name: {
                    title,
                    first,
                    last
                },
                picture: {
                    thumbnail
                },
                email,
                login:{
                    uuid
                },
                dob: {
                    age
                }
            } = each;
            return <Card title={title} firstName={first} lastName={last} email={email} thumbnail={thumbnail} key={uuid} age={age}/>
        })
    }
    return(
        <UserList />
    )
    

}

export default UserList;