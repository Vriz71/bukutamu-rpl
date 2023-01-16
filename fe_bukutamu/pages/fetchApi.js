import React, { useState, useEffect } from 'react'

const Blog = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
            return response.json();
        }).then((data) => {
            setPosts(data)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex-col my-10'>
            <h1 className='text-4xl font-bold text-slate-700 text-center my-8'>
                My <span className='text-green-700'>Albums</span>
            </h1>

            {
                posts.length > 0 && (
                    <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                            {
                                posts.map((post) => (
                                    <div className='md:mx-0 mx-5 w-72 h-48 rounded-lg cursor-pointer bg-blue-600 shadow-lg'>
                                        <h3 key={post.id}>{post.title}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Blog