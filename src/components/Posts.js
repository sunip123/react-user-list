import React from 'react';
import Search from '../components/Search'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="wrapper">
      <Search/>
        <div className="cards_wrap">
          <div className="card_item">
            <div className="card_inner">
              {posts.map(post => (
             <p key={post.id} className='list-group-item'>
              <div className="card_top">
                  <img src={post.avatar}  alt={post.first_name}/> 
                </div>  
              <div className="card_bottom">
                 <div className="card_category">
                  {post.first_name} {post.last_name}
                   </div>
                <div className="card_info">
                  <p class="title"> {post.email}</p>
                </div> 
            </div>
      </p>))} 
       </div>
        </div>
         </div>
          </div>
  );
};

export default Posts;
