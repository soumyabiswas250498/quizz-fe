import React from 'react'
import Options from './Options'
import Question from './Question'


type IMcq = {
    question: string;
    exams?: string[];
    options: string[];
    correct: number;
    explaination?: string;
}

type IProps = {
    mcq: IMcq
}

export default function Mcq(props: IProps) {
    const { mcq } = props;
    return (
        <div className="w-full justify-center select-none bg-slate-600 text-white text-xs lg:text-sm">
            {/* bg-slate-300 text-slate-600 */}
            <Question question={mcq.question} exams={mcq.exams} />
            <Options options={mcq.options} correct={mcq.correct} explaination={mcq.explaination} />

        </div>
    )
}
