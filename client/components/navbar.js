import React from 'react'
import NavbarButton from './navBarButton'
import GreenButton from './GreenButton'

export default class Navbar extends React.Component {
  constructor(){
    super();

    this.createCenterButtons = this.createCenterButtons.bind(this);
    this.createLeftBoldButton = this.createLeftBoldButton.bind(this);
    this.createRightButtons = this.createRightButtons.bind(this);
  }

  createRightButtons() {
    let buttons = [];

    buttons.push(<NavbarButton buttonText='Login' style='navBar-rightButton' key='Login'/>);
    buttons.push(<GreenButton buttonText='Support' key='Support'/>);

    return buttons;
  }

  createCenterButtons(){
    let buttons = [];

    for (let i = 0; i < arguments.length; i++){
      buttons.push(<NavbarButton buttonText={arguments[i]}style='navBar-regularButton' key={i}/>)
    }

    return buttons;
  }

  createLeftBoldButton(){
    return <NavbarButton buttonText='MyWebNow' style='navBar-boldText' key='myWebNow'/>
  }

  render(){
    return (
      <div id="flex-container-row-wrap">
        <div>
          {this.createLeftBoldButton()}
        </div>
        <div id="flex-container-centerButtons">
          {this.createCenterButtons('Home', 'Why Us', 'Contact Us')}
        </div>
        <div id="flex-container-rightButtons">
          {this.createRightButtons()}
        </div>
      </div>
      )
  }
}
