import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 

const Div = styled.div`
    width : 100vh; 
    background-color : #a7c0cd ;  
    display: flex ; 
    flex-direction : column ; 
    position : absolute ;
` ; 

const A = styled.a`
    text-decoration : none ;
` ; 

export default class Dropdown extends Component {
    constructor(props) {
        super (props) ; 
    }

    render () {
        return (
            <Div>
                <A href="#"> Link 1 </A>
                <A href="#"> Link 2 </A>
                <A href="#"> Link 3 </A>
            </Div>
        ) ; 
    }
}