#React Notes =========    
    
    + Create an React Component : 
        + import React, {Component} from 'react'
        + class Class_name extends Component {

        }

    + Component accept arbitrary inputs (called props) and return React element describing what should appear on the screen
        - eg :
            <button name="Long"/> : so in the class button component, to get the props : this.props.name 

    + *All React components must act like pure functions with respect to their props.*

    + Constructor of a class : 
        eg: 
            constructor(props) {
                super(props);
            }

        * Class Component should alway call the base constructor with props

    + Create a state of class: 
        eg : 
            constructor(props) {
                super(props);
                this.state = {date: new Date()} ;
            }

    + Life Cycle Method : 
        - componentDidMount() {

        }

        - componentWillMount () {

        }

##Lifecycle of a react component of class Clock : 
    1. First, when a class is called, React call the constructor of the component 
    2. Then, react call the render method, update the DOM
    3. After that, method componentDidMount() will be call, the setInterval will ask browser to call tick() once a second
    4. Everytime tick() is call, it use the setState(). And thank to the setState, react know State is changed and call 
    render() method again 

##Using State Correctly
    1. Do not modify state directly (must use the setState())
    2. State maybe update asynchronous. 
        eg : 
            if we muse update a variables arcording to state and props 
                + Wrong : this.setState ({counter : this.state.counter  + this.props.increment})
                + Right : this.setState ((state , props) => ({ counter : state.counter + props.increment}))

    3. State Updates are Merged 

##Styled-Component
    - Install : npm install --save styled-components
    - Declare an Style : 
        eg : 
            const Title = styled.h1`
                font-size : 1.5em ; 
                text-algin : center ; 
            ` ; 
    


