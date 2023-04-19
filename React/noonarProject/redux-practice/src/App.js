import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  let count = useSelector(state=>state.count);
  let id = useSelector(state=>state.id);
  let password = useSelector(state=>state.password);
  let dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT",payload:{num:5}});
  };
  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"aaa",password:"123"}})
  };
  const decrement = () =>{
    dispatch({type:"DECREMENT",payload:{num:1}});
  };

  return (
    <div className='App'>
      <h1>ID: {id} / PW: {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가 !</button>
      <button onClick={login}>Login</button>
      <button onClick={decrement}>감소 !</button>
      <Box />
    </div>
  );
}

export default App;
