import React from 'react';
import {useSelector} from 'react-redux';
import {selectError} from '../../store/ui/selector';

function ErrorMessage(){

    const hasError = useSelector(selectError);

    if(!hasError) return null;

    return(<div>OOPS!! something went wrong.</div>)
}

export default ErrorMessage;