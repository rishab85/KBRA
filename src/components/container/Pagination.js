import React,  {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "../../store/user/selector";
import { saveUser } from "../../store/user/actions";
import request from '../../request';

function Pagination(){
    const userInfo = useSelector(selectUserInfo)
    const {page} = userInfo;
    const dispatch = useDispatch();
    async function handlePagination(page){
            const users = await request('user', {params: {page}});
            dispatch(saveUser(users))
    }

    function handlePrev(){
        handlePagination(page-1)
    }

    function handleNext(){
        handlePagination(page+1)
    }

    return <div className="pagination-wrapper">
        <button disabled={page===1} onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
    </div>
}

export default Pagination