import { useEffect, useState } from 'react'
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
        <div className='border-2 shadow-lg flex p-4 rounded-lg bg-white'>
          <img src={usersData.image} alt='author avatar' className="overflow-hidden rounded-full shadow h-10" />
          <p className="text-lg text-[#2E4057] ml-5 mt-2 md:pr-5"> {usersData.firstName} {usersData.lastName} </p>
        </div>
      </div>
      <div className='m-3 md:m-5 lg:m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {posts?.map(post => <Card key={post.id} article={post} />)}
      </div>
    </section>
  )

}
