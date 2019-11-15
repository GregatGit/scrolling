import React from 'react'
import InfiniteScroll from './InfiniteScrollComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Header from './Header'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Welcome} />
        <Route path="/one" exact component={InfiniteScroll} />
      </BrowserRouter>
    </div>
  )
}

export default App
