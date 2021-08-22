import React from "react";

import { Container, ListGroup } from 'react-bootstrap'

import { User } from "../../providers/user/types";

interface Props {
    userDetail: User
}

export const UserAlbum = ({ userDetail }: Props) => {
    return (
        <div>
            {userDetail?.albums && <ListGroup>
                {userDetail.albums.map(album => (
                    <ListGroup.Item><a href={`/albums/${album.id}`}>{album.title}</a></ListGroup.Item>
                ))}
            </ListGroup>}
        </div>
    )
}

export default UserAlbum