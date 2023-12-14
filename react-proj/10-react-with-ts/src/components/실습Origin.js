// PostList 컴포넌트 입니다.
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();

      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className="PostList">
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PostList;

// PostItem 컴포넌트입니다.
// const PostItem = (props) => {
//     const { post } = props;

//     return (
//       <div className='PostItem'>
//         <div>
//           <span className='id'>No. {post.id}</span>
//           <span className='title'>- {post.title}</span>
//         </div>
//         <p className='body'>{post.body.slice(0, 120)}...</p>
//       </div>
//     );
//   };

//   export default PostItem;
