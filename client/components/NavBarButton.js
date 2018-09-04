import React from 'react'

class NavbarButton extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hover: false,
    }

    this.defaultStyle = this.props.style;
    this.buttonText = this.props.buttonText;
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(){
    this.setState({
      hover: true,
    });
  }

  onMouseLeave(){
    this.setState({
      hover: false,
    })
  }

  render(){

    const backGroundColorToUse = this.state.hover ? "grey" : null;
    return (
        <div id={this.defaultStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={{color: backGroundColorToUse}}>{this.buttonText}</div>
      )
  }
}

export default NavbarButton
