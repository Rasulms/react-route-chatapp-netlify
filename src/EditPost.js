import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './contexts/DataContext'


const EditPost = () => {
    const { posts, handleEdit, editTitle,
        setEditTitle, editBody, setEditBody } = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find((post) => (post.id).toString() === id)
    useEffect(() => {
        setEditBody(post.body)
        setEditTitle(post.title)
    }, [post, setEditBody, setEditTitle])


    return (
        <main className='NewPost' >
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text" I
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type='submit' onClick={() => handleEdit(post.id)} >Submit</button>
            </form>

        </main>

    )
}

export default EditPost
