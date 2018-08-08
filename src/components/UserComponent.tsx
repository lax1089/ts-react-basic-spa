import * as React from 'react';

import { Input, InputGroup } from 'reactstrap';

interface IProps {
    email: string;
    username: string;
    onFormFieldChange: ((name: any) => void)
}

class User extends React.Component<IProps, {}> {

    constructor(props: any) {
      super(props)

      this.handleChange = this.handleChange.bind(this);
    }

    public render() {
        return (
        <div>
            <div className="jumbotron">
                <h1 className="display-3">User Component</h1>
            </div>
            <InputGroup>
                <Input 
                    placeholder="username" 
                    name = "username"
                    value = {this.props.username}
                    onChange = {this.handleChange}
                />
            </InputGroup>
            <br />
            <InputGroup>
                <Input 
                    type="email" 
                    placeholder="email"
                    name = "email" 
                    value = {this.props.email}
                    onChange = {this.handleChange}
                />
            </InputGroup>
            <br />
        </div>
        )
    }

    private handleChange(event: any) {
        const { target } = event;
        const { name, value } = target;
        this.props.onFormFieldChange({ [name]: value });
    }
}

export default User;