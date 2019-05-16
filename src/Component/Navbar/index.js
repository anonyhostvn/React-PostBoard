import React, {Component} from 'react' ; 
import styled from 'styled-components' ;   
import Menu from './Menu' ; 
import Contact from './Contact' ; 

const Div = styled.div`
    background-color : black ; 
    height : 2rem ;
    padding-left : 3rem ; 
    padding-right : 3rem ;
    display : flex ; 
    background-color : #414141 ; 
` ;

const Space = styled.div`
    width : 35% ; 
` ; 

const Header = styled.div`
    color : white ; 
` ; 

export default class Navbar extends Component {
    constructor(props) {
        super(props) ; 
    }

    render () {
        return (
            <Div> 
                <Menu/> 
                <Space> </Space> 
                <Contact/> 
            </Div>
        ) ;
    }
}