import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const QuizApp = () => {

    let iconSize = 10;

    const [quizData, setQuizData] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handelSubmit = () => {
        if (selectedOption !== null) {
            // Update user's answer array with the selected option
            setUserAnswers(prevAnswers => [...prevAnswers, selectedOption]);
            
            // Move to the next question if available
            if (currentQuestion + 1 < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
            }

            // Reset selected option for the next question
            setSelectedOption(null);
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5173/src/Model/Quiz.json");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setQuizData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleCheckeClick = (option) => {
        setSelectedOption(option);
    };

console.log(userAnswers);

    return ( 
        <>
            <div className="container mx-auto my-10">
                <header className='flex justify-between my-5'>
                    <div className="logo w-0.5">
                        <svg className="w-10 h-10 text-gray-800 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                        </svg>
                    </div>
                    <div id="result" className='text-3xl font-bold	'>10/10</div>
                </header>

                <div className="quiz-body">
                    <h1 className='text-4xl'>
                        {quizData.length > 0 && quizData[currentQuestion].question}
                    </h1>
                        
                    {quizData.length > 0 && quizData[currentQuestion].option && (
                        <div className="options">
                            {Object.entries(quizData[currentQuestion].option).map(([key, value]) => (
                                <div key={key} className={`btn ${(selectedOption === key) ? "btnActive" : "btnDeactive"}`} onClick={() => handleCheckeClick(key)}>
                                    <label className='px-5 cursor-pointer'>
                                        <input type="radio" 
                                        className='hidden '
                                        name='option' 
                                        value={key} 
                                        checked={selectedOption === key} 
                                        onChange={() => handleCheckeClick(key)} />
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="rounded-full bg-lime-600 px-5 py-3 text-white" onClick={handelSubmit}>Submit</button>
                </div>
            </div>

            </>






        
        
    );
};

export default QuizApp;
