import React, {useEffect} from "react";
import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";

import { Container, Tabs, Tab } from 'react-bootstrap'

import { getUserDetailAction } from "../../providers/user/actions";
import { userDetailSelector } from "../../providers/user/selector";
import UserPost from "./UserPost";
import UserAlbum from "./UserAlbum";
import UserInfo from "./UserInfo";

const UserDetail = () => {
    const dispatch = useDispatch()
    const { userId } = useParams<{ userId: string }>()

    useEffect(() => {
        dispatch(getUserDetailAction({ userId }))
    }, [dispatch, userId])

    const userDetail = useSelector(userDetailSelector)

    return (
        <Container>
            <h1>{userDetail?.name}</h1>
            <Tabs defaultActiveKey='info'>
                <Tab eventKey='info' title='User Info'>{userDetail && <UserInfo user={userDetail}/>}</Tab>
                <Tab eventKey='posts' title='User Posts'>{userDetail && <UserPost userDetail={userDetail}/>}</Tab>
                <Tab eventKey='albums' title='User Albums'>{userDetail && <UserAlbum userDetail={userDetail}/>}</Tab>
            </Tabs>
        </Container>
    )
}

export default UserDetail