import {createAction} from "@reduxjs/toolkit";
import {SET_LOADING, SET_ERROR} from './action-type';

export const setLoading = createAction(SET_LOADING);
export const setError = createAction(SET_ERROR);