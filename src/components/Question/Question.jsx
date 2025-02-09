import React from 'react'
import './Question.css'
import { QuestionData } from '../../utils/constant/Question'

const Question = () => {
  return (
    <div className='question-wrapper'>
      {QuestionData.map((item, index)=>{
        return(
            <div className='content'>
                <div className=''>
                    <h1>{item.title}</h1>
                    <h6>{item.SubTitle}</h6>
                </div>
                <div className='btn'>
                    <button>{item.btn}</button>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Question
