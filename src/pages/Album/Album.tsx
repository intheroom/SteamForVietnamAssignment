import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import { Modal } from 'react-bootstrap'

import {getAlbumAction} from "../../providers/album/actions";
import {albumSelector} from "../../providers/album/selector";
import {Photo} from "../../providers/user/types";

import styles from './Album.module.css'

const ImageGrid = ({ photos, onClick }: { photos: Photo[], onClick: (photo: Photo) => void }) => (
    <div className={styles.imgGrid}>
        {photos.map(photo => (
            <div className={styles.imgWrap} key={photo.id} onClick={e => onClick(photo)}>
                <img title={photo.title} src={photo.thumbnailUrl} />
            </div>
        ))}
    </div>
)

const ImageModal = ({ photo, onClose }: { photo: Photo, onClose: () => void }) => {
    return (
        <Modal show={photo} centered size="lg">
            <Modal.Header closeButton onHide={onClose}>{photo.title}</Modal.Header>
            <Modal.Body>
                <img title={photo.title} src={photo.url} className={styles.imgCenter} />
            </Modal.Body>
        </Modal>
    )
}

const Album = () => {
    const dispatch = useDispatch()
    const { albumId } = useParams<{ albumId: string }>()
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

    useEffect(() => {
        dispatch(getAlbumAction({ albumId }))
    }, [dispatch, albumId])

    const album = useSelector(albumSelector)

    const handlePhotoClick = (photo: Photo) => setSelectedPhoto(photo)

    const handleClosePhoto = () => setSelectedPhoto(null)

    return (
        <div>
            <h1>Album: {album?.title}</h1>
            {album?.photos && <ImageGrid photos={album.photos} onClick={handlePhotoClick} />}
            {selectedPhoto && <ImageModal photo={selectedPhoto} onClose={handleClosePhoto} />}
        </div>
    )
}

export default Album