import { Album } from "./Album";
import { Post } from "./Post";

export interface UserInformation {
    id: string
    name: string
    username: string
    email: string
    phone?: string
}

export interface User extends UserInformation {
    posts?: Post[]
    albums?: Album[]
}