import React, {useEffect} from "react";
import request from '../../request'
import PageLoader from "./page-loader";
import Pagination from "./Pagination";
import UserList from "./UserList";
import { useDispatch } from "react-redux";
import {saveUser} from '../../store/user/actions';

function Grid(){

    const dispatch = useDispatch();

    useEffect(()=>{

        (async ()=> {

            const users = await request('user', {params: {page: 1}});
            dispatch(saveUser(users))

        })()

    })
    return (
        <div className="grid-wrapper">
            <PageLoader/>
            <Pagination />
            <UserList />
        </div>
    )
}

export default Grid