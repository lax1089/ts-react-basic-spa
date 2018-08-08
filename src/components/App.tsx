import '../styles/App.css';

import About from './AboutComponent';
import Home from './HomeComponent';
import User from './UserComponent';

import * as React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'

import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
   } from 'reactstrap';

// interface IProps {}

interface IState {
  email: string;
  isOpen: boolean;
  username: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      email: '',
      isOpen: false,
      username: '',
    }
  }
  
  public render() {
    return (
      <Router>
        <div>
          <Navbar color="light-grey" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-2" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                      <Link to="/about">Option 1</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/user">Option 2</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/home">Home</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          <div className="container">
            <br />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route 
                path="/user" 
                render={props => 
                  <User 
                    username={this.state.username}
                    email={this.state.email}
                    onFormFieldChange={(field: any) => console.log('App:onFormFieldChange', field) || this.setState(field)}
                  />
                } 
              />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  
}

export default App;
