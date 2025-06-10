import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() { 
  const { username } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  },[username])


  return (
    <div className='flex flex-col py-12 text-3xl text-gray-900 bg-gray-300 pl-12'>
      <div className='flex flex-col gap-7'>
        <h1 className='text-2xl font-bold text-gray-950'>github : {data.login}</h1>
        <h1 className='text-2xl font-bold text-gray-950'>name : {data.name}</h1>
        <h1 className='text-2xl font-bold text-gray-950'>github Followers : {data.followers}</h1>
        <h1 className='text-2xl font-bold text-gray-950'>
          github url : {data.url}
          </h1>
      </div>
      <button className='mt-10 w-36 px-8 py-4 bg-gray-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105' onClick={() => {
        getData();
      }}>GetData</button>
    </div>
  )
}

export default Github