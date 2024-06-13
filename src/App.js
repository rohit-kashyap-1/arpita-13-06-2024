import logo from './logo.svg';
import './App.css';

import Controlled from './components/Controlled';
import { useState } from 'react';
import Dashboard from './components/Dashboard';


function App() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [isLogin, setIsLogin] = useState((localStorage.getItem('isLogin') != undefined && localStorage.getItem('isLogin') != null && localStorage.getItem('isLogin') == 'true') ? true : false)
  let [error, setError] = useState('')


  //localStorage:
  const admin_username = 'rohit_tgc'
  const admin_password = 'rohit@123'

  const login = (e) => {
    e.preventDefault()
    //localStorage


    if (username == admin_username && password == admin_password) {
      setIsLogin(true)
      localStorage.setItem('isLogin', true)
    } else {
      setError('Username or password is incorrect')
      setIsLogin(false)
    }


  }

  const logout = () => {
    setIsLogin(false)
    localStorage.removeItem('isLogin')
    setUsername('')
    setPassword('')
  }
  return (
    <div className="container-fluid pt-4">


      {(isLogin == true) ?
        <div>
          <Dashboard />
          <br />
          <button className='btn btn-secondary' onClick={logout} >Logout</button>
        </div>
        :
        <div className='row'>
          <div className='col-md-4'>

          </div>
          <div className='col-md-8'>
            <div className='card' style={{ width: '350px' }}>
              <div className='card-body'>
                <form action='' method='' onSubmit={login}>
                  <h3>User Login</h3>
                  <hr />
                  <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input type='text' className='form-control' placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type='password' className='form-control' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  </div>
                  <div className='text-danger'>{error}</div>
                  <button className='btn btn-dark'>Login</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      }


    </div>
  );
}

export default App;
