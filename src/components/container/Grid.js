import React, {useEffect} from "react";
import request from '../../request'
import PageLoader from "./page-loader";
import Pagination from "./Pagination";
import ErrorMessage from "./ErrorMessage";
import UserList from "./UserList";
import { useDispatch } from "react-redux";
import {saveUser} from '../../store/user/actions';

function Grid(){

    const dispatch = useDispatch();

    useEffect(()=>{

        (async ()=> {

            const queryParams = window.location.search;
            const hasPage = queryParams.includes('page');

            const paramsObj = hasPage ? {params: {}} : {params: {page: 1}}
            const users = await request('user', paramsObj);
            dispatch(saveUser(users))

        })()

    })
    return (
        <div className="grid-wrapper">
            <ErrorMessage />
            <PageLoader/>
            <Pagination />
            <UserList />
        </div>
    )
}

export default Grid