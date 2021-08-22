import { combineReducers, Reducer } from 'redux'
import { createReducer } from "@reduxjs/toolkit";

import {PostDetailState, UserDetailState, UserListState, UserState} from "./types";
import {clearSelectedPost, getPostDetailAction, getUserDetailAction, getUserListAction} from "./actions";

const userState: UserState = {
    userList: {
        users: [],
        error: undefined,
        isLoading: false
    },
    userDetail: {
        user: undefined,
        error: undefined,
        isLoading: false
    },
    postDetail: {
        post: undefined,
        error: undefined,
        isLoading: false
    }
}

const userList: Reducer<UserListState> = createReducer<UserListState>(userState.userList, builder =>
    builder
        .addCase(getUserListAction.pending, state => {
            state.isLoading = true
        })
        .addCase(getUserListAction.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false
        })
        .addCase(getUserListAction.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false
        })
)

const userDetail: Reducer<UserDetailState> = createReducer<UserDetailState>(userState.userDetail, builder =>
    builder
        .addCase(getUserDetailAction.pending, state => {
            state.isLoading = true
        })
        .addCase(getUserDetailAction.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
        })
        .addCase(getUserDetailAction.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false
        })
)

const postDetail: Reducer<PostDetailState> = createReducer<PostDetailState>(userState.postDetail, builder =>
    builder
        .addCase(getPostDetailAction.pending, state => {
            state.isLoading = true
        })
        .addCase(getPostDetailAction.fulfilled, (state, action) => {
            state.post = action.payload
            state.isLoading = false
        })
        .addCase(getPostDetailAction.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false
        })
        .addCase(clearSelectedPost, state => {
            state.post = undefined
            state.isLoading = false
            state.error = undefined
        })
)

export default combineReducers<UserState>({
    userList,
    userDetail,
    postDetail
})
