import { useEffect, useState } from 'react'
import AuthorsBadge from '../components/AuthorsBadge';
import Card from '../components/Card';
import { PostState, UserState } from '../type';

export const AuthorPosts = () => {
  const [posts, setPosts] = useState<PostState[]>([]);
  const [usersData, setUsersData] = useState<UserState>({} as UserState);

  useEffect(() => {
    let id: string = '';
    let authorId = window.location.href.match(/\/(\d+)\//);
    authorId && (id = authorId[1]);
    fetch(`https://dummyjson.com/posts/user/${id}`)
      .then(res => res.json())
      .then(res => setPosts(res.posts));

    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(res => setUsersData(res))
  }, []);

  return (
    <section>
      <div className='m-3 md:m-5 lg:m-10 flex justify-center'>
        <AuthorsBadge id={usersData.id} url={usersData.image} name={usersData.firstName} lastName={usersData.lastName} />
      </div>
      <div className='m-3 md:m-5 lg:m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {posts?.map(post => <Card key={post.id} article={post} />)}
      </div>
    </section>
  )
}
