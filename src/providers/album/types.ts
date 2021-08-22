import { SerializedError } from "@reduxjs/toolkit";

import {Album, Photo} from "../user/types";

export interface AlbumDetail extends Album {
    photos?: Photo[]
}


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