import React, { useContext } from 'react'
import Context from '../../../configs/context';

function Child1(props) {
    const data = 'this variable is from child 1'
    console.log('console from child 1', props.state)
    const store = useContext(Context)
    console.log('store**', store);
    
  return (
    <div onClick={() => store.setGlobalData({ data: data })}>Child1</div>
  )
}

export default Child1