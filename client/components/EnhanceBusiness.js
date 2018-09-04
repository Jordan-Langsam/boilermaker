import React from 'react'
import GreenButton from './GreenButton'

export default class EnhanceBusiness extends React.Component {

  render(){
    return (
      <div id="enhanceYourBusiness">
        <div id="enhanceBusinessText">
          Learn how we can enhance your business
        </div>
        <GreenButton buttonText="↓" radius="circle"/>
      </div>
    )
  }
}
