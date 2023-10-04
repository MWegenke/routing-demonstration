import React from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import {Marines} from './marines'


const Navy = () => (
  <h1>Navy</h1>
)

const Usaf = () =>(
  <h1>USAF</h1>
)

const Ussf = () =>(
  <h1>USSF</h1>
)

export const App = () => {
  const navigate = useNavigate();

  return (
    <>
    <h1>CHOOSE YOUR TEAM</h1>
    <ul>
      <li>
        <Link to='/navy'>NAVY</Link>
      </li>
      <li>
        <Link to='/ussf'>USSF</Link>
      </li>
      <li>
        <Link to='/usaf'>USAF</Link>
      </li>
      <li>
        <Link to='/marines'>Marines</Link>
      </li>
    </ul>
    <button onClick={() => {navigate('/')}}>HOME</button>
  <Routes>
    <Route path='/' element={<h1>YOU ARE HOME</h1>}/>
    <Route path='/navy' element={<Navy />} />
    <Route path='/ussf' element={<Ussf />} />
    <Route path='/usaf' element={<Usaf />} />
    <Route path='/marines' element={<Marines />} />
  </Routes>
  </>
  )
}