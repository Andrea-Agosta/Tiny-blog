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
      <div className='flex justify-center'>
        <AuthorsBadge id={usersData.id} url={usersData.image} name={usersData.firstName} lastName={usersData.lastName} />
      </div>
      <div className='bg-[#2E4057] my-10 rounded-md'>
        <h1 className='text-[#EFF1F3] p-4 font-medium text-lg'>List of Articles</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#EFF1F3] p-2 md:p-5 rounded-b-md'>
          {posts?.map(post => <Card key={post.id} article={post} />)}
        </div>

      </div>
    </section>
  )
}
