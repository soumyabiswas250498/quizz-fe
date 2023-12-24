"use client"
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { FaAngleDown } from "react-icons/fa";
type IProps = {
    options: string[];
    correct: number;
    explaination?: string
}


export default function Options(props: IProps) {
    const { options, correct, explaination } = props;
    const [selected, setSelected] = useState(-1);
    const [showAns, setShowAns] = useState(false);
    const [showAccordion, setShowAccordion] = useState(false)

    return (
        <div className='w-full px-8 py-1'>
            {
                options.map((item, index) => <div key={index + item} className={`flex items-center gap-2 border-[2px] border-zinc-500 rounded ${showAns && (correct - 1) === index ? 'bg-green-500' : showAns && (correct - 1) !== selected && selected === index ? 'bg-red-500' : 'hover:bg-slate-400'}  px-2 py-[2px] my-1 cursor-pointer`} onClick={() => { setSelected(index) }}>
                    <div className='flex justify-center items-center bg-white w-4 h-4 '> <div className={`${selected === index ? 'bg-yellow-400' : 'bg-white'}  w-2 h-2`}></div> </div> {item}
                </div>)
            }
            <div className='w-full flex justify-end items-center h-8 px-2 py-2'>
                <div className={`w-fit bg-slate-200 text-black px-2 rounded cursor-pointer ${selected === -1 && 'hidden'}`} onClick={() => { setShowAns(true) }}>Submit</div>
            </div>
            <div className={`w-full py-1 ${!showAns && 'hidden'}`}>
                <Disclosure>
                    <Disclosure.Button className="py-1 px-2 flex justify-between items-center w-full text-white rounded bg-[#b74af78f]">
                        <p>Expaination</p>
                        <FaAngleDown />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-white px-2 bg-[#b84af752] rounded-b">
                        {explaination}
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        </div>
    )
}
