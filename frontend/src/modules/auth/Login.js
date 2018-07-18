import React, { Component } from 'react';
import { Form, Input,Button } from 'semantic-ui-react'

class Login extends Component {
    render() {
        return (
            <div>
                <h1>LOGIN</h1>
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
        );
    }
}

export default Login;
