import { createReducer } from "@reduxjs/toolkit";
import { combineReducers, Reducer } from "redux";

import {getAlbumAction, getAlbumListAction} from "./actions";
import {AlbumDetailState, AlbumListState, AlbumState} from "./types";

const albumState: AlbumState = {
    albumDetail: {
        album: undefined,
        error: undefined,
        isLoading: false
    },
    albumList: {
        albums: [],
        error: undefined,
        isLoading: false,
    }
}

const albumDetail: Reducer<AlbumDetailState> = createReducer<AlbumDetailState>(albumState.albumDetail, builder =>
    builder.addCase(getAlbumAction.pending, state => {
        state.isLoading = true
    }).addCase(getAlbumAction.fulfilled, (state, action) => {
        state.album = action.payload
        state.isLoading = false
    }).addCase(getAlbumAction.rejected, (state, action) => {
        state.error = action.error
        state.isLoading = false
    })
)

const albumList: Reducer<AlbumListState> = createReducer<AlbumListState>(albumState.albumList, builder =>
    builder.addCase(getAlbumListAction.pending, state => {
        state.isLoading = true
    }).addCase(getAlbumListAction.fulfilled, (state, action) => {
        state.albums = action.payload
        state.isLoading = false
    }).addCase(getAlbumListAction.rejected, (state, action) => {
        state.error = action.error
        state.isLoading = false
    })
)

export default combineReducers<AlbumState>({
    albumDetail,
    albumList
})