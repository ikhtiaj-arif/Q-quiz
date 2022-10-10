import React from 'react';

const EachTopic = ({topic}) => {
    const {logo, name} = topic;
    return (
        <div className='w-18 border-2 rounded'>
            <img className='w-9/12 bg-slate-700' src={logo} alt="" />
            <h2>topic: {name}</h2>
            <button className='bg-cyan-400 text-white px-3 py-1 rounded'>Start Quiz</button>
        </div>
    );
};

export default EachTopic;