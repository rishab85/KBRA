import {createSelector} from 'reselect';

export const getStateSlice = (state={}) => state['users'];
export const selectUsers = createSelector(getStateSlice, (state)=>state.users || {})
export const selectUserList = createSelector(selectUsers, (state)=>state.results||[])
export const selectUserInfo = createSelector(selectUsers, (state)=>state.info||[])
export const selectPageLoading = createSelector(getStateSlice, (state)=>state.loading)
export const selectCurrentPage = createSelector(getStateSlice, (state)=>state.currentPage)
export const selectError = createSelector(getStateSlice, (state)=>state.error)