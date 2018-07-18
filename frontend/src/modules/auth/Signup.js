import React, { Component } from 'react';

import { Form, Input,Button } from 'semantic-ui-react'

class Signup extends Component {
    render() {
        return (
            <div>
                <h1>SIGNUP</h1>
                <Form>
                    <Form.Field required>
                        <label>Name</label>
                        <Input placeholder='Name' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Contact Number</label>
                        <Input placeholder='Contact Number' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Date Of Birth</label>
                        <Input placeholder='YYYY/MM/DD' />
                    </Form.Field>
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

export default Signup;
