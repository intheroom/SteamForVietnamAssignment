import { SerializedError } from "@reduxjs/toolkit";
import { User, UserInformation } from "../../models/User";
import { PostDetail } from "../../models/Post";

export interface UserListState {
    users: UserInformation[]
    error?: SerializedError
    isLoading: boolean
}

export interface UserDetailState {
    user?: User
    error?: SerializedError
    isLoading: boolean
}

export interface PostDetailState {
    post?: PostDetail
    error?: SerializedError
    isLoading: boolean
}

export interface UserState {
    userList: UserListState
    userDetail: UserDetailState
    postDetail: PostDetailState
}
