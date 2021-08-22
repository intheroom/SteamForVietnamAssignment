import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAlbum, getAlbumList, getPhotos } from "../../apis/user/user";
import { Album, AlbumDetail } from "../../models/Album";

export const getAlbumAction = createAsyncThunk<AlbumDetail, { albumId: string }>('GET_PHOTOS', async ({ albumId }) => {
    try {
        const album = await getAlbum(albumId)
        const photos = await getPhotos(albumId)
        return {
            ...album,
            photos
        }
    } catch (e) {
        console.log("Error when fetching: ", e)
        throw e
    }
})

export const getAlbumListAction = createAsyncThunk<Album[], void>('GET_ALBUM_LIST', async () => {
    try {
        return await getAlbumList()
    } catch (e) {
        console.log("Error when fetching: ", e)
        throw e
    }
})