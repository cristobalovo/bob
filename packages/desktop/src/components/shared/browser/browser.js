import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Browser = () => {
  const [loaded, load] = useState(false)
  const searchState = useSelector(state => state.search);
  const { currentSearch } = searchState;

  useEffect(() => {
    load(true)
  }, [])

  const renderWebview = () => {
    return <webview id="foo" src={currentSearch}></webview>
  }

  return (
    <div className="browser">
      {
        !loaded ? "loading..." : renderWebview()
      }
    </div>
  )
}

export default Browser;