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
            <div className='border-2 rounded-lg shadow-xl m-6 p-6'>
                 <div className='p-1 flex justify-between'>
                    <div className='md:flex justify-between w-11/12 py-3'>
                        <div className='font-semibold text-2xl text-gray-600'>Question {idx+1}:</div>
                        <div className='mt-2 md:mt-0 md:px-5 font-medium text-lg text-cyan-700'>{question}</div>
                    </div>
                     <EyeIcon onClick={handleEyeBtn} className="h-6 w-6 text-cyan-600 cursor-pointer"/>
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