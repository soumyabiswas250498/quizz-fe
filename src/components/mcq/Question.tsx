import React from 'react'

type IProps = {
    question: string;
}


export default function Question(props: IProps) {
    const { question } = props;
    return (
        <div className='w-full px-8 py-4'>{question}</div>
    )
}
