import React from "react";
import { useHistory } from 'react-router-dom'

import { Container, Row, Col, Card } from 'react-bootstrap'

import Header from "../../components/Header";

import styles from './Home.module.css'

const renderCard = ({ title, body, onClick, imgPath }: { title: string, body?: string, onClick?: () => void, imgPath: string }) => (
    <Col>
        <Card onClick={onClick} className={styles.card}>
            <Card.Img variant="top" src={imgPath} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
)

const Home = () => {
    const history = useHistory()

    return (
        <Container>
            <Header title={'Home'} />
            <Row xs={1} md={2} className="g-2">
                {renderCard({ title: 'User List', body: 'Explore users to see their posts and photo albums', onClick: () => history.push('/users'), imgPath: '/users.jpg' })}
                {renderCard({ title: 'Album List', body: 'Explore photo albums', onClick: () => history.push('/albums'), imgPath: '/albums.jpg' })}
            </Row>
        </Container>
    )
}

export default Home