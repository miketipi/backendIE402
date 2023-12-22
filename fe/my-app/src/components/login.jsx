import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Login = props => {
    const [username, setName] = useState("");
    const [password,setPwd ] = useState("");
    let navigate = useNavigate();
    const onChangeName = e => {
        const name = e.target.value;
        setName(name);
    }
    const onChangeId = e => {
        const id = e.target.value;
        setPwd(id);
    }
    const login = () => {
        props.login({ username: username, password: password });
        navigate('/');
    }
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={onChangeName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter id"
                        value={password}
                        onChange={onChangeId}
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>Submit</Button>
            </Form>
        </div>)
    
}
export default Login;