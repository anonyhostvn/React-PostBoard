import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 

const Div = styled.div`
    color : ${props => props.activeColor ? '#35b083' : 'white'}; 
    height : 100% ; 
    width : 20%; 
    text-align : center ; 
    font-size : 0.7rem ; 
    font-family : NavbarFont ; 
    padding-left : 2px ; 
    padding-right: 2px ; 
    transition : color 0.5s ; 
    -webkit-transition : color 0.5s ; 
    :hover {
        color : #35b083 ;
        cursor : pointer ; 
    }
    :active {
        color : black ; 
    }
    display : block ; 
` ; 

export default class ButtonNavbar extends Component {
    constructor(props) {
        super (props) ; 
    }

    render () {
        return (
            <Div onMouseUp={() => alert('1')} onClick={this.props.onClick} activeColor={this.props.activeColor}> {this.props.content} </Div>
        ) ; 
    }



}