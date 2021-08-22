import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Container, ListGroup } from "react-bootstrap";

import { getAlbumListAction } from "../../providers/album/actions";
import { albumListSelector } from "../../providers/album/selector";
import Header from "../../components/Header";

const AlbumList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAlbumListAction())
    }, [dispatch])

    const albumList = useSelector(albumListSelector)

    return (
        <Container>
            <Header title={'Album List'} />
            <ListGroup>
                {albumList.map(album => (
                    <ListGroup.Item><a href={`albums/${album.id}`}>{album.title}</a></ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}

export default AlbumList