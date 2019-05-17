import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 

const Div = styled.div`
    width : 30vh; 
    background-color : #a7c0cd ;  
    display: flex ; 
    flex-direction : column ; 
    position : absolute ;
` ; 

const A = styled.a`
    text-decoration : none ;
    border-bottom : solid #f0f0f0 1px ;
    background-color:  #fff ; 
    padding : 0.4rem ; 
    font-family : NavbarFont ; 
    font-size : 0.7rem ; 
    color : black ;
    transition : background-color 0.7s ; 
    transition : color 0.7s ; 
    :hover {
        background-color : #f7f7f7   ; 
        color : #35b083 ; 
    }
` ; 

export default class Dropdown extends Component {
    constructor(props) {
        super (props) ; 
    }

    render () {

        const ListRendering = this.props.items.map(item => (<A href="#" key={item.id}> {item.title} </A>)) ; 

        return (
            <Div>
                {
                    ListRendering
                }
            </Div>
        ) ; 
    }
}