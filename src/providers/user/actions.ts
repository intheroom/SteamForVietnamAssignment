import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import { getComments, getPost, getUser, getUserAlbums, getUserList, getUserPosts } from "../../apis/user/user";

import { PostDetail, User, UserInformation } from "./types";

export const getUserListAction = createAsyncThunk<UserInformation[], void>('GET_USER_LIST', async () => {
    try {
        return await getUserList()
    } catch (e) {
        console.log("Error when fetching: ", e)
        throw e
    }
})

export const getUserDetailAction = createAsyncThunk<User, { userId: string }>('GET_USER', async ( { userId} ) => {
    try {
        const user = await getUser(userId)
        const posts = await getUserPosts(userId)
        const albums = await getUserAlbums(userId)
        return {
            ...user,
            posts,
            albums
        }
    } catch (e) {
        console.log("Error when fetching: ", e)
        throw e
    }
})

export const getPostDetailAction = createAsyncThunk<PostDetail, { postId: string }>('GET_POST_DETAIL', async ({ postId }) => {
    try {
        const post = await getPost(postId)
        const comments = await getComments(postId)
        return {
            ...post,
            comments
        }
    } catch (e) {
        console.log("Error when fetching: ", e)
        throw e
    }
})

export const clearSelectedPost = createAction('CLEAR_SELECTED_POST')