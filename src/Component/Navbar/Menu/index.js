import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 
import ButtonNavbar from './ButtonNavbar' ; 

const Wrapper = styled.div`
    width : 35%  ; 
    color : white ; 
    display : flex ; 
    flex-direction : row ; 
    line-height : 30px ; 
` ; 

export default class Menu extends Component {
    constructor (props) {
        super (props) ; 
        this.state = {
            type : 'home'
        } ; 
    }

    Switchmenu (menuchoosing) {
        // alert("Click Click") ;
        if (menuchoosing === this.state.type) return ;  
        this.setState({
            type : menuchoosing
        }) ; 
    }

    render () {
        console.log(this.state) ;
        return (
            <Wrapper>
                {/* <button onClick={() => this.Switchmenu('HOME')}>button</button> */}
                <ButtonNavbar onClick={() => this.Switchmenu('home')} activeColor={this.state.type === 'home'} content="HOME"/>
                <ButtonNavbar onClick={() => this.Switchmenu('feature')} activeColor={this.state.type === 'feature'} content="FEATURES"/>
                <ButtonNavbar onClick={() => this.Switchmenu('mega')} activeColor={this.state.type === 'mega'} content="MEGA MENU"/>
                <ButtonNavbar onClick={() => this.Switchmenu('cate')} activeColor={this.state.type === 'cate'} content="CATEGORIES"/>
                <ButtonNavbar onClick={() => this.Switchmenu('about')} activeColor={this.state.type === 'about'} content="ABOUT"/>
            </Wrapper>
        ) ; 
    }
}