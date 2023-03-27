import React from 'react'
import './css/index.css'
import Main from './Main'
import Sidebar from './Sidebar'
import './css/Sidebar.css'

function index() {
  return (
    <div>
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar />
               
                <Main />
            </div>
        </div>
    </div>
  )
}

export default index