import { SerializedError } from "@reduxjs/toolkit";
import { Album, AlbumDetail } from "../../models/Album";


export interface AlbumDetailState {
    album?: AlbumDetail
    isLoading: boolean
    error?: SerializedError
}

export interface AlbumListState {
    albums: Album[],
    error?: SerializedError,
    isLoading: boolean
}

export interface AlbumState {
    albumList: AlbumListState
    albumDetail: AlbumDetailState
}
