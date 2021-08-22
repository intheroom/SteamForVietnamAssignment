export interface Album {
    userId: string
    id: string
    title: string
}

export interface Photo {
    albumId: string
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

export interface AlbumDetail extends Album {
    photos?: Photo[]
}