


import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowResize from '../hooks/useWindowResize'
import useAxiosFetch from '../hooks/useAxiosFetch'
import api from '../api/post.js'
import { format } from 'date-fns';


const DataContext = createContext({})

export const DataProvider = ({ children }) => {


    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResult, setSearcResult] = useState([])

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')

    const navigate = useNavigate()
    const { width } = useWindowResize()
    const { data, isLoading, fetchError } = useAxiosFetch('http://localhost:3500/posts')

    useEffect(() => {
        setPosts(data)
    }, [data])
    // console.log(posts);

    useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            ||
            ((post.title).toLowerCase()).includes(search.toLowerCase()));
        setSearcResult(filteredResults.reverse());
    }, [posts, search])


    const handleSubmit = async (e) => {
        e.preventDefault()
        const date = format(new Date(), 'MMMM dd,yyyy pp');
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const result = { id, title: postTitle, datetime: date, body: postBody }
        try {
            const response = await api.post('/posts', result)
            const addNewPost = [...posts, response.data]
            setPosts(addNewPost);
            localStorage.setItem('items', JSON.stringify(addNewPost))
            setPostTitle('')
            setPostBody('')
            navigate('/')
        }
        catch (err) {
            console.log(err.message);

        }
    }
    const handleDelete = async (id) => {

        try {
            await api.delete(`posts/${id}`)
            const filteredPost = posts.filter((p) => {
                return p.id !== id;
            })
            setPosts(filteredPost)
            navigate('/')
        } catch (err) {
            console.log(err.messgae);
        }
    }
    const handleEdit = async (id) => {
        const date = format(new Date(), 'MMMM dd,yyyy pp');
        const result = { id, title: editTitle, datetime: date, body: editBody }
        try {
            const response = await api.put(`posts/${result.id}`, result);
            setPosts(posts.map((post) => post.id === id ? { ...response.data } : post))
            setEditBody('')
            setEditTitle('')
            navigate('/')
        }
        catch (err) {
        }
    }

    return (
        <DataContext.Provider value={{

            searchResult, width, search, setSearch, isLoading, fetchError,
            postTitle, setPostTitle, postBody, setPostBody, handleSubmit,
            handleDelete, posts, handleEdit, editTitle,
            setEditTitle, editBody, setEditBody,
        }}>
            {children}

        </DataContext.Provider>
    )
}

export default DataContext


// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await api.get('/posts')
//       setPosts(response.data)

//     }
//     catch (err) {
//       if (err.response) {
//         console.log(err.response.data);
//       }
//       else {
//         console.log(`Error is : ${err.message}`);
//       }

//     }

//   }
//   fetchData()
// }, [])