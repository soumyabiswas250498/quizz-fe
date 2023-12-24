import React from 'react'

type IProps = {
    question: string;
    exams?: string[]
}


export default function Question(props: IProps) {
    const { question, exams } = props;
    return (
        <div className='px-8 py-1'>
            <div className='w-full'>{question}</div>
            <div className='w-full flex justify-end text-xs gap-1'>{exams?.map((item, index) => <p key={index + item}>{item}</p>)}</div>
        </div>
    )
}
