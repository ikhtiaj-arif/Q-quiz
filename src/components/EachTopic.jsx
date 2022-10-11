import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const EachTopic = ({topic}) => {
    const {id, logo, name} = topic;
    return (
        <div className='w-18 border-2 shadow-xl rounded-lg m-4'>
            <img className='w-9/12 mt-4 mx-auto rounded-lg  bg-slate-700' src={logo} alt="" />
          <div className='text-center m-4'>
            <h2 className='text-3xl font-semibold p-3 text-gray-600'>topic: {name}</h2>

            <Link to={`/quiz/${id}`}>
            <button className='mx-auto flex items-center bg-cyan-600 hover:bg-cyan-400 text-lg font-medium text-white px-5 py-1 rounded'>Start Quiz
            <ArrowRightIcon className="h-6 w-6 ml-2 text-white"/>
            </button>
            </Link>

          </div>
        </div>
    );
};

export default EachTopic;