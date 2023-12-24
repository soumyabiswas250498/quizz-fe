import React from 'react'
import Mcq from '../mcq/Mcq'


const mcqData = {
    question: 'Who was the first PM of India ?',
    exams: ['cgl-2016', 'cgl-2020'],
    options: ['Jawar Lal Nehru', 'M K Gandhi', 'Babasaheb Ambedkar', "Subhash Chandra Bose"],
    correct: 1,
    explaination: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime consectetur dolorum autem consequatur.'
}


export default function AllQuestion() {
    return (
        <Mcq mcq={mcqData} />
    )
}
