import React from 'react'
import GreenButton from './GreenButton'

export default class Search extends React.Component {
  constructor(){
    super()
  }


  render(){
    return (
      <div id="searchBarContainer">
        <input id="searchBar" type="text" placeholder="write your domain here..."/>
        <GreenButton buttonText="Search" size="large" radius="rectangle"/>
      </div>
    )
  }
}
