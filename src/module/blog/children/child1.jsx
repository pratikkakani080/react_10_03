import React, { useContext } from 'react'
import Context from '../../../configs/context';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../../reducers/mySlice';

function Child1(props) {
  const dispatch = useDispatch()
    const data = 'this variable is from child 1'
    // console.log('console from child 1', props.state)
    const store = useContext(Context)
    // console.log('store**', store);
    
  return (
    <>
    <div onClick={() => store.setGlobalData({ data: data })}>Child1</div>
    <button onClick={() => dispatch(increment(4))}>increase count</button>
    <button onClick={() => dispatch(decrement(2))}>decrease count</button>
    </>
  )
}

export default Child1