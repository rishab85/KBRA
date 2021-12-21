import {createSelector} from 'reselect';

export const getStateSlice = (state={}) => state['ui'];
export const selectPageLoading = createSelector(getStateSlice, (state)=>state.loading)
export const selectError = createSelector(getStateSlice, (state)=>state.error)