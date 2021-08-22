import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardColumns, Modal, Button, Container } from 'react-bootstrap'

import { clearSelectedPost, getPostDetailAction } from "../../providers/user/actions";
import { postDetailSelector } from "../../providers/user/selector";
import { User } from "../../models/User";
import { Comment, Post, PostDetail } from "../../models/Post";

import 'bootstrap/dist/css/bootstrap.css';

const renderPost = (name: string, post: Post, onSelect: (postId: string) => void) => (
    <Card>
        <Card.Header>{name + ": " + post.title}</Card.Header>
        <Card.Body>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary" onClick={e => onSelect(post.id)}>Open post</Button>
        </Card.Body>
    </Card>
)

const CommentSection = ({ comments }: { comments: Comment[] }) => (
    <Container>
        <h3>Comments</h3>
        {comments.map(comment => (
            <Card>
                <Card.Header>From: {comment.name}</Card.Header>
                <Card.Body>
                    <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
            </Card>
        ))}
    </Container>
)


const PostModal = ({ name, post, onClose }: { name: string, post: PostDetail, onClose: () => void }) => {
    return (
        <Modal show={post} centered scrollable>
            <Modal.Header closeButton onHide={onClose}>{name + ": " + post.title}</Modal.Header>
            <Modal.Body>
                <p>{post.body}</p>
                {post?.comments && <CommentSection comments={post.comments}/>}
            </Modal.Body>
        </Modal>
    )
}

interface Props {
    userDetail: User
}

const UserPost = ({ userDetail }: Props) => {
    const dispatch = useDispatch()
    const selectedPost = useSelector(postDetailSelector)

    const handlePostClick = (postId: string) => dispatch(getPostDetailAction({ postId }))

    const handleClosePost = () => dispatch(clearSelectedPost())

    return (
        <div>
            <CardColumns>
                {userDetail?.posts && userDetail.posts.map(post => renderPost(userDetail.name, post, handlePostClick))}
            </CardColumns>
            {selectedPost && <PostModal name={userDetail.name} post={selectedPost} onClose={handleClosePost}/>}
        </div>
    )
}

export default UserPost