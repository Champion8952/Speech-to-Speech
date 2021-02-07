import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

export default class Buttons extends React.Component {
    
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            <div>
                <Button variant="outline-primary">File Upload</Button>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Target Language selection
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Chinese</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}