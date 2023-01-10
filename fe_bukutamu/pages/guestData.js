import React from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'

export default function GuestData() {
    return (
        <>
            <Head>
                <title>Guest Book | Data Guest</title>
            </Head>

            <div className='flex h-full'>
                <div className="flex flex-col w-80 px-4 py-8 border-r">
                    <Navbar />
                </div>
                <div className='w-full p-4 m-12 bg-slate-200 mt-28'></div>
            </div>
        </>
    )
}
