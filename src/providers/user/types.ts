import { SerializedError } from "@reduxjs/toolkit";

export interface UserInformation {
    id: string
    name: string
    username: string
    email: string
    phone?: string
}

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

export interface Comment {
    postId: string
    id: string
    name: string
    email: string
    body: string
}

export interface Post {
    userId: string
    id: string
    title: string
    body: string
}

export interface PostDetail extends Post {
    comments?: Comment[]
}

export interface Photo {
    albumId: string
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

export interface Album {
    userId: string
    id: string
    title: string
}

export interface User extends UserInformation {
    posts?: Post[]
    albums?: Album[]
}