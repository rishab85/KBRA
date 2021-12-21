import {createReducer} from '@reduxjs/toolkit';
import {setLoading, setError} from './actions';

const initialState = {loading: false, error: false}

export const uiReducer = createReducer(initialState, (builder)=>{
 builder
 .addCase(setLoading, (state, action)=>{
     state.loading = action.payload;
 })
 .addCase(setError, (state, action)=>{
     state.error= action.payload;
 })
 .addDefaultCase((state, action)=>{})
})

export default uiReducer