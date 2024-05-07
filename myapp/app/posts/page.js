import Link from "next/link"


async function Posts() {
    //https://jsonplaceholder.typicode.com/posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json() 
   const posts = data.map((post)=> {
    return<>
    <Link href={`/posts/${post.id}`}>
    <div className="bg-info p-2 ">
        <div className="product p-2 bg-light rounded-2">
        <h5 className=" text-start text-dark fw-bold">{post.title}</h5>
        <h5 className=" text-muted">{post.body}</h5>
        </div>
        
    </div></Link>
    </>
   })
  return (
    <div className='container'>
      posts
      <div className="row">
    {posts}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Posts
