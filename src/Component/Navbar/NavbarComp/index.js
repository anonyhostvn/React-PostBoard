import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 

const Button = styled.div`
    padding : 0.5rem ;
    margin : 0 ;
    color : white ; 
` ; 

export default class NavbarComp extends Component {
    constructor (props) {
        super(props) ; 
    }

    render () {
        return (
            <Button> {this.props.content} </Button>
        ) ; 
    }
}