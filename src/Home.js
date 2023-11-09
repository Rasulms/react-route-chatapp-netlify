import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './contexts/DataContext';


const Home = () => {
    const { searchResult, fetchError, isLoading } = useContext(DataContext)
    return (
        <main className="Home">
            {isLoading && (<p style={{ textAlign: 'center' }} >Loading Feeds ...</p>)}
            {!isLoading && fetchError && (<p>{fetchError}</p>)}
            {!fetchError && !isLoading && (searchResult.length ?
                <Feed posts={searchResult} />
                :
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>)
            }
        </main>
    )
}

export default Home
