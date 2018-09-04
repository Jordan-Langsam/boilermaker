import React from 'react';

class GreenButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hover: false,
    }

    this.size = props.size;
    this.radius = props.radius;
    this.buttonText = props.buttonText;
    this.defaultStyle = `greenButton ${this.radius} ${this.size}`
    this.hoverStyle = "greenButton hoverOpacity";
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(){
    this.setState({
      hover: true,
    })
  }

  onMouseLeave(){
    this.setState({
      hover: false,
    })
  }

  render(){
    const backgroundColorToUse = this.state.hover ? 'gray' : null;

    return <button className={this.defaultStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
    style={{backgroundColor: backgroundColorToUse}}>{this.buttonText}</button>
  }
}

export default GreenButton;
