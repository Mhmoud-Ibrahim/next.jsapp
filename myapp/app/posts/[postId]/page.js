import React from 'react'

  async function PostDetails({params}) {
    const postId = params.postId
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{next:{
        revalidate:120,
    }})
    const post = await response.json() 
   

  return (
    <div>
      PostDetails
      <div className='w-75 m-auto bg-body-secondary p-2 rounded-2 shadow py-3'>
        <h2 className='fw-bold text-success'>{post.title}</h2>
        <h4 className=' text-muted'>{post.body}</h4>
        
      </div>
    </div>
  )
}

export default PostDetails
