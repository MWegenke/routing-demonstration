import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Marines } from './Components/Marines';
import { Ussf } from './Components/Ussf';
import { Usaf } from './Components/Usaf';
import { Navy } from './Components/Usn';

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
      <button onClick={() => { navigate('/') }}>HOME</button>

      <Routes>
        <Route path='/' element={<h1>YOU ARE HOME</h1>} />
        <Route path='/navy' element={<Navy />} />
        <Route path='/ussf' element={<Ussf />} />
        <Route path='/usaf' element={<Usaf />} />
        <Route path='/marines' element={<Marines />} />
      </Routes>
    </>
  )
}