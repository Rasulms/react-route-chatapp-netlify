import React from 'react'
import { Link, Outlet } from 'react-router-dom';


const PostLayout = () => {
    return (
        <>
            <Link to={'/post/1'}  > Post 1</Link>
            <Link to={'/post/2'}  > Post 2</Link>
            <Link to={'/post/3'}  > Post 3</Link>
            <Link to={'/postpage/newpost'}  > New Post</Link>
            <Outlet />

        </>
    )
}

export default PostLayout
