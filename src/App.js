import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './css/App.scss';

const App = (page) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
 
   useEffect(() => {
      setLoading(true);
      fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(json => {
        setPosts(json.data);
          setLoading(false);
      });
  }, [page]);
 // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className='wrapper'>
      <h1 className=''>User List</h1>
     <Posts posts={currentPosts} loading={loading} />
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />  
    </div>
  );
};

export default App;
