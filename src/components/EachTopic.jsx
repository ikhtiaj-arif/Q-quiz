import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const EachTopic = ({topic}) => {
  console.log(topic)
    const {id, logo, name} = topic;
    return (
        <div className='w-18 border-2 shadow-xl rounded-xl mx-4 my-8'>
            <img className='w-9/12 mt-4 mx-auto rounded-xl  bg-slate-700' src={logo} alt="" />
          <div className='text-center m-4'>
            <h2 className='text-5xl font-semibold p-3 text-cyan-700'>{name}</h2>

            <Link to={`/quiz/${id}`}>
            <button className='mx-auto my-4 flex items-center bg-cyan-600 hover:bg-cyan-400 text-xl font-medium text-white px-8 py-3 rounded-lg'>Start Quiz
            <ArrowRightIcon className="h-6 w-6 ml-2 text-white"/>
            </button>
            </Link>

          </div>
        </div>
    );
};

export default EachTopic;