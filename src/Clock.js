import React, {Component} from 'react' ;    
import styled from 'styled-components' ; 

const Wrapper = styled.div`
    padding : 5em ; 
    background: papayawhip ;
` ; 

const Title = styled.div`
    font-size : 1.5em ; 
    text-algin : center ; 
    color : ${state => state.date % 2 === 0 ? "black" : "palevioletred" } ; 
`

class Clock extends Component {

    constructor(props) {
        super(props) ; 
        this.state = {date : new Date()} ; 
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick() , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID) ; 
    }

    tick () {
        this.setState({
            date : new Date()
        }) ;
    }

    handleClick() {
        
    }

    render () {
        return (
            <Wrapper> 
                <div> 
                    <Title> 
                    <h1> Hello World, </h1>
                    <h1> It is {this.state.date.toLocaleTimeString()} </h1> 
                    </Title>
                </div>
            </Wrapper>
        ) ; 
    }
}

export default Clock ; 