import React, { useRef } from 'react';
import QuizApp from '../component/QuizApp';

const QuizPage = () => {

    let iconSize = 10;
    const handelResult = useRef();

    const handelSubmit = (event) => {
        handelResult.innerText = "skldjfkskdjfk";
    }

    return (
        <div>
            <div className="container mx-auto my-10">
                <header className='flex justify-between my-5'>
                    <div className="logo w-0.5">
                        <svg className="w-10 h-10 text-gray-800 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                        </svg>
                    </div>
                    <div id="result" className='text-3xl font-bold	'>10/10</div>
                </header>

                <form className="quiz-body" action='post'>
                    <QuizApp />
                <button className="rounded-full bg-lime-600 px-5 py-3 text-white" id="submit" onClick={()=>handelSubmit()}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default QuizPage;