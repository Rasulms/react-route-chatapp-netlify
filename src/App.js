
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
// import PostPage from './PostPage';
// import { Navigate } from 'react-router-dom';
// import { format } from 'date-fns';
import { Route, Routes } from 'react-router-dom'
// import PostLayout from './PostLayout';
import PostPage from './PostPage';
// import api from './api/post.js';
import EditPost from './EditPost.js';
import { DataProvider } from './contexts/DataContext';
// import useWindowResize from './hooks/useWindowResize.js';
// import useAxiosFetch from './hooks/useAxiosFetch.js';

// import Post from './post';
// import RoutePage from './Routes';

function App() {

  return (
    <div className='App' >
      <DataProvider>
        {/* <nav>
        <ul>
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to={'/about'} >About</Link></li>
          <li><Link to={'/newpost'} >New Post</Link></li>
          <li><Link to={'/postpage'} >Post Page</Link></li>


        </ul>
      </nav>
      <RoutePage /> */}
        <Header
          title="Social Media App"
        />
        <Nav />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='post' >
            <Route index element={<NewPost />} />
            <Route path=':id' element={<PostPage />} />

          </Route>
          <Route path='/edit/:id' element={<EditPost />} />

          <Route path='*' element={<Missing />} />
          {/* <Route path='/postpage' element={<PostLayout />} /> */}


        </Routes >
        <Footer />
      </DataProvider>

    </div>

  );
}

export default App;
