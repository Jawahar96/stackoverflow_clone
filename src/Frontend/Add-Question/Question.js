import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Question.css'
// import { TagsInput } from 'react-tag-input-component'

function Question() {
  return (
    <div>
      <div className='add-question'>
        <div className='add-question-container'>
            <div className='head-title'>
                <h2>ASK A QUESTION</h2>
            </div>
            <div className='question-container'>
                <div className='question-option'>
                <div className='question-option'>
                <div className='title'>
                    <h3>Title</h3>
                    <small>Be specific amd imaging you are asking question for another person</small>
                    <input type="text" placeholder='Add question title' />
                    <ReactQuill className='react-quill' theme='snow'/>   
                </div>
                <div className='question-option'>
                <div className='title'>
                    <h3>Body</h3>
                    <small>Include all the information someone would need to answer your question</small>
                    <input type="text" placeholder='Add question title'>
                        
                    </input></div>
                </div>
                <div className='question-option'>
                    <div className='title'>
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what is you question about for</p>
                        {/* <TagsInput name='tags' placeHolder='Enter a new Tag' /> */}
                        <input type='text' placeholder='Enter a  Tag' />
                    </div>
                </div>
                </div>
                </div>
                <button className='button'>Add your question</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Question