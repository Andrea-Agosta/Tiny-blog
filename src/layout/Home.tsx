import { useState } from 'react';
import Post from '../components/Post/Post';
import mockPosts from '../mockData/post.json';
import mockUsers from '../mockData/users.json';
import { PostState, UserState } from '../type';

const Home = () => {
  const [postData, setPostData] = useState<PostState[]>(mockPosts.posts);
  const [userData, setUserData] = useState<UserState[]>(mockUsers.users);

  return (
    <section>
      {
        postData.map(article => {
          const author: UserState[] = userData.filter(user => user.id === article.userId);
          return <Post article={article} author={author[0]} />;
        })
      }

    </section>
  )
}

export default Home