import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Options from './Options';


const EachQuiz = ({item, idx}) => {
    console.log(item)
    const {correctAnswer, question, options, id} = item;

   

    const handleOptionClick = (option) => {
        if(option === correctAnswer) {
            console.log('congrats')
            toast.success("Correct Answer!", {autoClose: 700})
        }else{
            console.log('wrong answer')
            toast.error("Wrong Answer!", {autoClose: 700})
        }
        
    }

    const handleEyeBtn = () => {
        console.log(correctAnswer)
        toast.warning(`${correctAnswer}`)
    }


    return (
        <div>
            <div className='border'>
                 <div className='p-3 flex justify-between'>
                    <div className='w-10/12'>
                    <span>Question {idx+1}:</span>
                     <span className='m-2'>{question}</span>
                    </div>
                     <EyeIcon onClick={handleEyeBtn} className="h-6 w-6 text-blue-500 cursor-pointer"/>
                  </div>
                <ul className='md:grid grid-cols-2 gap-2'>
                  {
                    options.map((option,idx)=> <Options
                        key={idx}
                        option={option}
                        handleOptionClick={handleOptionClick}
                    ></Options>)
                  }
                </ul>
                <ToastContainer />
            </div>

            
        </div>
    );
};

export default EachQuiz;