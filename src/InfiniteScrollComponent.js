import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8,
}

const InfiniteScrollComponent = () => {
  const amount = 15
  const limit = 50
  const [items, setItems] = useState(Array.from({ length: amount }))
  const [message, setMessage] = useState('Loading...')

  const fetchMoreData = () => {
    if (items.length >= limit) {
      setMessage('...all done...')
      return
    }
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setItems(
        items.concat(Array.from({ length: amount })),
      )
    }, 1500)
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>{message}</h4>}
      >
        {items.map((i, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default InfiniteScrollComponent
