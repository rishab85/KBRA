import React from 'react';
import Loader from '../atoms/loader';
import {useSelector} from 'react-redux';
import {selectPageLoading} from '../../store/ui/selector';

function PageLoader(){
    const isLoading = useSelector(selectPageLoading);
    if(!isLoading) return null;
    return(<Loader />)
}

export default PageLoader;