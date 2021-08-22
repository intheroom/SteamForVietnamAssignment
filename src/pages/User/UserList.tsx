import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";

import { Container, ListGroup } from 'react-bootstrap'

import { getUserListAction } from "../../providers/user/actions";
import { AppDispatch, RootState } from "../../app/store";
import { userListSelector } from "../../providers/user/selector";
import Header from "../../components/Header";
import { UserInformation } from "../../models/User";

import 'bootstrap/dist/css/bootstrap.css';

const UserList = () => {
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserListAction())
    }, [dispatch])

    const userList = useSelector<RootState, UserInformation[]>(state => userListSelector(state))

    return (
        <Container>
            <Header title={'User List'} />
            <ListGroup>
                {userList.map(userInfo => (
                    <ListGroup.Item><a href={`users/${userInfo.id}`}>{userInfo.name}</a></ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}

export default UserList