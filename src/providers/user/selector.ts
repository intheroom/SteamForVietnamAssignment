import { RootState } from "../../app/store";

export const userListSelector = (state: RootState) => state.user.userList.users

export const userDetailSelector = (state: RootState) => state.user.userDetail.user

export const postDetailSelector = (state: RootState) => state.user.postDetail.post