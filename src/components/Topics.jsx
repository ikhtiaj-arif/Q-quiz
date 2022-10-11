import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EachTopic from './EachTopic';




const Topics = () => {
    const topics = useLoaderData()
    const {data} =  topics;
   

    return (
        <div className='w-3/4 mx-auto md:grid grid-cols-2  gap-8'>
            {
                data.map(topic => <EachTopic
                    key={topic.id}
                    topic={topic}
                   
                ></EachTopic>)
            }
        </div>
    );
};

export default Topics;