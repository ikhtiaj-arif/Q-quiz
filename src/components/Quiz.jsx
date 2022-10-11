import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Options from './Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'


const Quiz = () => {
    const quizTopic = useLoaderData();
    const {data} = quizTopic;
   const eachQuiz = data.questions;
    // console.log(eachQuiz);
    const [finalResults, setFinalResults] = useState(true)
    const [score, setScore] = useState(0);
    const [currQuestion, setCurrQuestion] = useState(0);

    const {correctAnswer, question, options, id} = eachQuiz[currQuestion];

    

// helper function
const handleOptionClick = (option) => {
    if(option === correctAnswer) {
        console.log('congrats')
        toast.success("Correct Answer!", {autoClose: 700})
        setScore(score + 1)
    }else{
        console.log('wrong answer')
        toast.error("Wrong Answer!", {autoClose: 700})
    }
    if(currQuestion + 1 < eachQuiz.length){
        setCurrQuestion(currQuestion + 1);
    }else{
        setFinalResults(true)
    }
    
}

const handleEyeBtn = () => {
    console.log(correctAnswer)
    toast.warning(`${correctAnswer}`)
}
const resetQuiz = () => {
    setScore(0)
    setFinalResults(false)
    setCurrQuestion(0)
}




    
    
    return (
        <div className=' w-100 md:w-3/4 lg:w-6/12 mx-4 md:mx-auto mt-8'>
            <h1 className='text-center p-6 text-4xl font-semibold text-cyan-600'>Quiz for {data.name}</h1>


            {
            finalResults ? (
                    
                <div className='bg-slate-400 rounded-xl text-center py-8 px-5 mt-8'>
                    <h1 className='text-4xl text-white font-bold'>Total Score</h1>
                    <h2 className='text-xl p-3 text-white font-semibold'>You Scored {score} Out Of {eachQuiz.length}</h2>
                    <button onClick={resetQuiz} className="bg-red-600 px-6 py-2 text-white hover:bg-red-500 text-lg font-semibold rounded-lg">Reset</button>
                </div>

            ) : (

                
              
                    <div className='border-2 rounded-lg shadow-xl m-6 p-6'>
                    <div className='text-center p-3 font-semibold text-2xl text-gray-600'>Question{currQuestion + 1} Out Of {eachQuiz.length}:</div>
                        <div className='p-1 flex justify-between items-center'>
                            
                            <div className='mt-2 mr-3 md:mt-0 py-4 md:px-5 w-11/12 mx-auto font-medium text-lg text-cyan-700'>{question}</div>
                    
                            <EyeIcon onClick={handleEyeBtn} className="h-6 w-6 text-cyan-500 cursor-pointer"/>
                        </div>
                     
                        <ul className='md:grid grid-cols-2 gap-4'>
                        {
                            options.map((option, idx) => <Options
                                key={idx}
                                option={option}
                                handleOptionClick={handleOptionClick}
                            ></Options>
                                
                            )
                        }
                    </ul>
                    <ToastContainer />

                    </div>
                    
               
               
             )
             }

  
        </div>
    );
};

export default Quiz;