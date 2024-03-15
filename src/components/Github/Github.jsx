import React, { useEffect, useState } from 'react'

function Github() {

const [data,setData]=useState([]);

    useEffect(()=>{
   fetch('https://api.github.com/users/rahul-b89')
   .then(response=>response.json())
   .then(data=>{setData(data)})
    },[])

  return (
    <div className='txt-center m-4 bg-gray-600 text-red-600 text-4xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
  )
}

export default Github


//Github provides a way to start fetching data from an api and store it 
//as a cache as soon as the user hovers over the api link instead of clicking it so that
//when user clicks on the link the already fetched data can be shown instantaneously
//instead of fetching at the moment when the api link is clicked
//this just improves some lagging in our webpage when api data loads
//learn about it later, it is called loader and hook is called useLoaderData