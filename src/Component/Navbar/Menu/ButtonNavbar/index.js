import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 
import Dropdown from '../../../Dropdown'; 

const Div = styled.div`
    color : ${props => props.activeColor ? '#35b083' : 'white'}; 
    height : 100% ; 
    width : 100%; 
    text-align : center ; 
    font-size : 0.7rem ; 
    font-family : NavbarFont ; 
    padding-left : 2px ; 
    padding-right: 2px ; 
    transition : color 0.5s ; 
    -webkit-transition : color 0.5s ; 
    background-color : ${props => props.activeColor ? '#777' : 'transparent'} ; 
    :hover {
        color : #35b083 ;
        cursor : pointer ; 
    }
    :active {
        color : black ; 
    }

    display : block ; 
` ; 

const Wrapper = styled.div`
    display : flex ; 
    flex-direction : column ; 
    width : 20% ; 
    display : inline-block ; 
    :hover {
        display : block ; 
    }
` ; 

export default class ButtonNavbar extends Component {
    constructor(props) {
        super (props) ; 

        this.state = {
            showMenu : false 
        }
    }

    render () {
        console.log(this.state) ; 
        return (
            <Wrapper onMouseOver= {() => this.setState({showMenu : true})} onMouseLeave = {() => this.setState({showMenu : false})} >
                <Div onClick={this.props.onClick} activeColor={this.props.activeColor}> {this.props.content} </Div>

                {
                    this.state.showMenu
                    ? (
                        <Dropdown/>
                    )

                    : (
                        null
                    )
                }
               
            </Wrapper>
        ) ; 
    }



}