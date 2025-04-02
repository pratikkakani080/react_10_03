import React, { useContext } from 'react'
import Context from '../../../configs/context';

function Child2(props) {
    const data = 'this variable is from child 2'
    const store = useContext(Context)
    console.log('store**', store);
    console.log('console from child 2', store.globalData)
  return (
    <div onClick={() => props.setState(data)}>Child2</div>
  )
}

export default Child2