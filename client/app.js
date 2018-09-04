import React from 'react'

import {Navbar} from './components'
import Background from './components/Background'
import GetAWebsite from './components/GetAWebsite'
import Search from './components/Search'
import EnhanceBusiness from './components/EnhanceBusiness'
import CreateAccount from './components/CreateAccount'

const App = () => {
  return (
    <div>
    <CreateAccount />
    <GetAWebsite />
    <EnhanceBusiness />
    <Search />
    <Navbar/>
    <Background/>
    </div>
  )
}

export default App
