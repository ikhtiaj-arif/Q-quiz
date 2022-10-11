import React from 'react';
import {useLoaderData} from 'react-router-dom'


const Quiz = () => {
    const quizTopic = useLoaderData();
    const {data} = quizTopic;
    const {name} = data;
    return (
        <div>
            <h1>This is quiz : {name}</h1>
        </div>
    );
};

export default Quiz;