import React from 'react'
import InfiniteScroll from './InfiniteScrollComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './Welcome'

export const App = () => {
  return (
    <div>
      <h1>SCROLLING</h1>
      <BrowserRouter>
        <Route path="/" exact component={Welcome} />
        <Route path="/one" exact component={InfiniteScroll} />
      </BrowserRouter>
    </div>
  )
}

export default App
