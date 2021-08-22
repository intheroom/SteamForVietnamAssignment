import { User, UserInformation } from "../../models/User";
import { Album, Photo } from "../../models/Album";
import { Comment, Post } from "../../models/Post";

export const getUserList = async (): Promise<UserInformation[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
}

export const getUser = async (userId: string): Promise<User> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(r => r.json())
}

export const getUserPosts = async (userId: string): Promise<Post[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(r => r.json())
}

export const getPost = async (postId: string): Promise<Post> => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(r => r.json())
}

export const getComments =  async (postId: string): Promise<Comment[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(r => r.json())
}

export const getUserAlbums = async (userId: string): Promise<Album[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`).then(r => r.json())
}

export const getAlbum = async (albumId: string): Promise<Album> => {
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`).then(r => r.json())
}

export const getAlbumList = async (): Promise<Album[]> => {
    return fetch('https://jsonplaceholder.typicode.com/albums').then(r => r.json())
}

export const getPhotos = async (albumId: string): Promise<Photo[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then(r => r.json())
}