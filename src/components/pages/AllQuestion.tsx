import React from 'react'
import Options from "../mcq/Options";
import Question from "../mcq/Question";


const question = {
    question: 'Who was the first PM of India ?',
    options: ['Jawar Lal Nehru', 'M K Gandhi', 'Babasaheb Ambedkar', "Subhash Chandra Bose"],
    correct: 1,
    explaination: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime consectetur dolorum autem consequatur.'

}


export default function AllQuestion() {
    return (
        <div className="w-full justify-center bg-slate-600 text-white">
            <Question question={question.question} />
            <Options options={question.options} correct={question.correct} />

        </div>
    )
}
