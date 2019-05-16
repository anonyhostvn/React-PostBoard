import React, {Component} from 'react' ;

class Button extends Component {

    render () {
        return (
            <div>
                <h1> Todo apps by {this.props.name} </h1>
            </div>
        )
    }
}

export default Button ; 