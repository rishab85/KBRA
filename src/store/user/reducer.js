import {createReducer} from '@reduxjs/toolkit';
import {saveUser, setPagination, setLoading, setError} from './actions';

const initialState = {users: [], currentPage: 0, loading: false, error: false}

export const userReducer = createReducer(initialState, (builder)=>{
 builder
 .addCase(saveUser, (state,action)=>{
    state.users = action.payload;
    state.error = false;
 })
 .addCase(setPagination, (state, action)=>{
    state.currentPage = action.payload;
 })
 .addCase(setLoading, (state, action)=>{
     state.loading = action.payload;
 })
 .addCase(setError, (state, action)=>{
     state.error= action.payload;
 })
 .addDefaultCase((state, action)=>{})
})

export default userReducer