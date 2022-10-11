import React from 'react';

const EachQuiz = ({item, idx}) => {
    console.log(item)
    const {correctAnswer, question, options, id} = item


    return (
        <div>
            <div className='border'>
                 <div className='p-3'>
                    <span>Question {idx+1}:</span>
                     <span>{question}</span>
                     </div>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <label htmlFor="">{options[0]}</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label htmlFor="">{options[1]}</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label htmlFor="">{options[2]}</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label htmlFor="">{options[3]}</label>
                    </li>
                   

                </ul>
            </div>

            
        </div>
    );
};

export default EachQuiz;