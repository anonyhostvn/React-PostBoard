import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 

// import Fontawesmome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons' ; 
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons' ; 

const Div = styled.div`
    width : 30% ;
    padding-top : 0.5em ; 
` ;

const Icontact = styled.span`
    -webkit-transition: color 0.5s;
    transition: color 0.5s;
    color : white ; 
    padding : 0.5rem ; 
    :hover {
        color : #35b083 ; 
        cursor: pointer; 
    }
` ; 

export default class Contact extends Component {
    constructor(props) {
        super (props) ; 
    }

    render () {
        return (
            <Div>
                <Icontact> <FontAwesomeIcon icon={faCoffee} /> </Icontact>
                <Icontact> <FontAwesomeIcon icon={faStroopwafel}/> </Icontact>
                <Icontact> <FontAwesomeIcon icon={faStroopwafel}/> </Icontact>
                <Icontact> <FontAwesomeIcon icon={faStroopwafel}/> </Icontact>
                <Icontact> <FontAwesomeIcon icon={faStroopwafel}/> </Icontact>
                <Icontact> <FontAwesomeIcon icon={faStroopwafel}/> </Icontact>
            </Div> 
        ) ;
    }
}