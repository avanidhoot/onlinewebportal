import React, { Component } from 'react';
import { Form, Input,Button } from 'semantic-ui-react'

class Login extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Field required>
                        <label>Email</label>
                        <Input placeholder='Email' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input type='password' placeholder='Password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
                <p >
                    Login
                </p>
        );
    }
}

export default Login;
