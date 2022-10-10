import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachTopic from './EachTopic';



const Topics = () => {
    const tpoics = useLoaderData()
    const loadedTopics =  tpoics.data;
    return (
        <div className='w-3/4 grid grid-cols-2  gap-8'>
            {
                loadedTopics.map(topic => <EachTopic
                    key={topic.id}
                    topic={topic}
                ></EachTopic>)
            }
        </div>
    );
};

export default Topics;