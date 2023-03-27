import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import EjectIcon from '@mui/icons-material/Eject';
import { Bookmark, History } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

import './index.css'
import { borderRadius, fontWeight } from '@mui/system';
function MainQuestion() {

    const [show,setshow]=useState(false)
  return (
    <div>
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2 className='main-question'>Question Title</h2>
                    <Link to='/add-question'>
                        <button>Ask Query</button>
                    </Link>
                    </div>
                   <div className='main-desc'>
                   <div className='info'>
                    <p>Timestamp</p>
                    <p>Active<span>Today</span>
                    </p>
                    <p>Viewed<span>70 times</span></p>
                   </div>

                   </div>
                   <div className='all-questions'>
                   <div className='all-question-container'>
                    <div className='all-question-left'>
                        <div className='all-option'>
                        
                            <p className='arrow'>0</p>
                            <Bookmark />
                            <History />
                        </div>
                    </div>
                    <div className='question-answer'>
                        <p>This is question section</p>
                        <div className='author'>
                            <small>asked "Timestamp"</small>
                            <div className='question-answer'>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className='comments'>
                                    <p>Comment your Answer -<span>User name</span><small>Timestamp</small></p>
                                </div>
                                <p onClick={()=>setshow(!show)}>Add a comment</p>
                                {
                                  show && ( <div className='title'>
                                  <textarea type='text' 
                                  placeholder='Add your comment' 
                                   row={5}
                                   style={{
                                    margin :"5px 0px",
                                    padding :"10px",
                                    border :"1px solid rgba(0,0,0,0.5)",
                                    borderRadius :"4px",
                                    outline:"none"
                               

                                  }}></textarea>
                                  <button style={{
                                    maxWidth:"fit-content"
                                  }}>Add comment</button>
                                  </div>
                                )}
                            </div>
                        </div>
                        <div  style={{
                            flexDirection:"column"
                        }
                        
                        }className='all-question'>
                        <p style={{
                            marginBottom:"20px",
                            fontSize:"1.4 rem",
                            fontWeight:"300"
                        }}>No of Answer</p>
                            <div className='all-question-container'>
                            <div className='all-question-left'>
                                <div className='all-options'>
                                    <div className='arrow'>0</div>
                                    <Bookmark />
                                    <History />

                                </div>
                            </div>
                            <div className='question answer'>
                                <p>This is question section</p>
                                <small>asked "Timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author name</p>

                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                    <div className='main-answer'>
                      <h3 style={{
                        fontSize:"22px",
                        margin:"10px 0",
                        fontWeight:"400"
                      }}>Your Answer</h3>
                      <ReactQuill className='react-quill' theme='snow'  
                      style={{
                        height:"200px",
                      }}

                      />

                    </div>
                    <button style={{
                        maxWidth:"fit-content",
                        marginTop:"100px"


                    }}>Post your comment</button>
                   </div>

                   </div>
            </div>
        </div>
    </div>
  )
}

export default MainQuestion