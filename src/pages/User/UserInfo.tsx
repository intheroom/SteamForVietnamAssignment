import { Container, Form, Col, Row } from "react-bootstrap";

import { UserInformation } from "../../models/User";

interface Props {
    user: UserInformation
}

const renderInfoEntry = (title: string, value: string) => (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
            {title}
        </Form.Label>
        <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={value} />
        </Col>
    </Form.Group>
)

const UserInfo = ({ user }: Props) => (
    <Container>
        <Form>
            {renderInfoEntry('Name', user.name)}
            {renderInfoEntry('Username', user.username)}
            {renderInfoEntry('Email', user.email)}
            {user.phone && renderInfoEntry('Phone number', user.phone)}
        </Form>
    </Container>
)

export default UserInfo