import {RootState} from "../../app/store";

export const albumSelector = (state: RootState) => state.album.albumDetail.album

export const albumListSelector = (state: RootState) => state.album.albumList.albums