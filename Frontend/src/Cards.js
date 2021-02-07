import React from 'react';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import '../App.css';

export default class Cards extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render() {
        return (
          <CardDeck>
            <Card>
                <Card.Body>
                <Card.Title>ASR</Card.Title>
                <Card.Text>
                    Automatic Speech Recognition
                </Card.Text>
                <Button className="button" variant="outline-dark">Run ASR</Button>
                <Button className="button" variant="success">Output of ASR</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>MT</Card.Title>
                <Card.Text>
                    Machine Translation
                </Card.Text>
                <Button className="button" variant="outline-dark">Run MT</Button>
                <Button className="button" variant="success">Output of MT</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>TTS</Card.Title>
                <Card.Text>
                    Text to Speech
                </Card.Text>
                <Button className="button" variant="outline-dark">Run TTS</Button>
                <Button className="button" variant="success">Output of TTS</Button>
                </Card.Body>
            </Card>
          </CardDeck>
        );
    }
}