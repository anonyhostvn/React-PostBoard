import React, {Component} from 'react' ; 
import Navbar from '../Navbar' ; 

export default class App extends Component {
    constructor (props) {
        super(props) ; 
    }

    render () {
        return (
            <div> 
                <Navbar/> 
                <h1> Hello </h1>
            </div> 
        )
    }
}