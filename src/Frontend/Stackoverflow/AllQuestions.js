import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/AllQuestions.css'


const AllQuestions = () => {
  return (
    <div>
        <div className='all-questions'>
            <div className='all-question-container'>
                <div className='all-questions-left'>
                    <div className='all-options'>
                    <div className='all-options'>
                        <p>0</p>
                        <span>Votes</span>
                    </div>

                    <div className='all-options'>
                        <p>0</p>
                        <span>Answer</span>
                        </div>

                        <div className='all-options'>
                        <small>0 views</small>
                        </div>
                    </div>
                </div>
                <div className='question-anser'>
                    <Link>This is question title</Link>
                    <div className='all-option'>
                        <Link to='/question'>What is javascript </Link>
                        <div style={{
                           width :"90%"

                        }}></div>
                    </div> 
                    <div>Javascript is a scripting language for web developent.It is used for to make the web pages can be interactive.I t can be uses for client side and server side</div>
                </div>
            </div>
            <div style={{
                display :"flex",
                
            }}>
                <span className='question-tags'>react
                </span>
                <span className='question-tags'>antd
                </span>
                <span className='question-tags'>frontend
                </span>
               
                <div className='author'>
                    <small>Timestamp</small>
                    <div className='author-details'>
                        <Avatar />
                        <p>User name</p>
                    </div>
                </div>

                     
                
            </div>
        </div>
    </div>
  )
}

export default AllQuestions