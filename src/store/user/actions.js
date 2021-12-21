import {createAction} from "@reduxjs/toolkit";
import {FETCH_USER, SAVE_USER, SET_PAGINATION, SET_LOADING, SET_ERROR} from './action-type';

export const fetchUser = createAction(FETCH_USER);
export const saveUser = createAction(SAVE_USER);
export const setPagination = createAction(SET_PAGINATION);
export const setLoading = createAction(SET_LOADING);
export const setError = createAction(SET_ERROR);