import React, { useRef, useState } from "react";
import "./Kuis.css"
import { dataM5K11 } from "./DataK11";
import { postQuiz } from "../quizcontroler/quizpost";


export default function KuisM1K10() {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(dataM5K11[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_array = [option1, option2, option3, option4]

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.answer === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
                // Add correct animation
                e.target.classList.add("animate-correct");
                setTimeout(() => {
                    e.target.classList.remove("animate-correct");
                }, 1500); // Remove animation after 1.5 seconds
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.answer].current.classList.add("correct");
                // Add incorrect animation
                e.target.classList.add("animate-incorrect");
                setTimeout(() => {
                    e.target.classList.remove("animate-incorrect");
                }, 1500); // Remove animation after 1.5 seconds
            }
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === dataM5K11.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(prev => prev + 1);
            setQuestion(dataM5K11[index + 1]); // Update this line
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(dataM5K11[0]);
        setScore(0);
        setLock(false);
        setResult(false)
    }

    const data = {
        quizname : "Exposition Text",
        score : score * 10,
        percobaan : 0,
        username : localStorage.getItem("username")
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    await postQuiz(data)
    reset()
    }

    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className=" bg-white rounded-xl py-10 px-5 mx-10 justify-center lg:w-1/2 md:w-1/3 drop-shadow-2xl shadow-2xl">

                    <div className=" text-center mb-20 mx-auto"><h3 className="font-medium text-lg mb-2">Kuis Kelas 11</h3>
                        <h1 className="font-bold text-3xl">Exposition Text </h1>
                    </div>
                    {result ? <></> : <>
                        <div className="mb-10 w-full">
                            <h3 className="font-semibold text-base mb-10">{index + 1} . {question.question}</h3>
                            <ul className="">
                                <li ref={option1} onClick={(e) => { checkAns(e, 0) }} className="border-2 px-2 py-3 mb-3 rounded-lg hover:bg-indigo-300 transition duration-300 hover:drop-shadow-lg">{question.options[0]}</li>
                                <li ref={option2} onClick={(e) => { checkAns(e, 1) }} className="border-2 px-2 py-3 mb-3 rounded-lg hover:bg-indigo-300 transition duration-300 hover:drop-shadow-lg">{question.options[1]}</li>
                                <li ref={option3} onClick={(e) => { checkAns(e, 2) }} className="border-2 px-2 py-3 mb-3 rounded-lg hover:bg-indigo-300 transition duration-300 hover:drop-shadow-lg">{question.options[2]}</li>
                                <li ref={option4} onClick={(e) => { checkAns(e, 3) }} className="border-2 px-2 py-3 mb-3 rounded-lg hover:bg-indigo-300 transition duration-300 hover:drop-shadow-lg">{question.options[3]}</li>
                            </ul>
                        </div>
                        <div className="justify-center text-center">
                            <button onClick={next} className="px-5 py-2 bg-indigo-400 rounded-lg mb-3 hover:bg-indigo-500">Next</button>
                            <div className="index text-sm">{index + 1} of {dataM5K11.length} questions</div>
                        </div>
                    </>}
                    {result ? (
                        <div className="text-center">
                            <h1 className="font-bold text-8xl mb-10">{Math.round(score / dataM5K11.length * 100)}</h1>
                            <h1 className="mb-5 text-lg font-semibold">
                                You Score {score} out of {dataM5K11.length} questions
                            </h1>
                            <button onClick={reset} className="px-5 py-2 bg-indigo-400 rounded-lg mb-3 mr-2 hover:bg-indigo-500">
                                reset
                            </button>
                            <button onClick={handleSubmit} className="px-5 py-2 bg-indigo-400 rounded-lg mb-3 ml-2 hover:bg-indigo-500">
                                Submit result
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}


                </div>
            </div>
        </>
    )
}