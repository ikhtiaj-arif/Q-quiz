import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachTopic from './EachTopic';
import Heading from './Heading';




const Topics = () => {
    const topics = useLoaderData()
    const {data} =  topics;
   

    return (
        <div>
            <Heading></Heading>
            <div className='w-3/4 mx-auto md:grid grid-cols-2  gap-8'>
            {
                data.map(topic => <EachTopic
                    key={topic.id}
                    topic={topic}
                   
                ></EachTopic>)
            }
        </div>
        </div>
    );
};

export default Topics;