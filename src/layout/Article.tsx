import { useEffect, useState } from 'react'
import { PostState, UserState } from '../type';
import mockPosts from '../mockData/post.json';
import mockUsers from '../mockData/users.json';
import { Link } from 'react-router-dom';

const Article = () => {
  let idFromUrl = -1;
  let regex = /\/([0-9]+)(?=[^/]*$)/;
  const url: string = window.location.href;
  const partialUrl = regex.exec(String(url));
  if (partialUrl) {
    idFromUrl = Number(partialUrl[1]);
  }
  const [postsData, setPostsData] = useState<PostState>(mockPosts.posts.find(post => post.id === idFromUrl) as PostState);
  const [usersData, setUsersData] = useState<UserState>(mockUsers.users.find(user => user.id === postsData.userId) as UserState);

  useEffect(() => {
  }, [])

  return (
    <article className=" border-2 rounded-2xl p-5 drop-shadow-md bg-[#EFF1F3] m-20">
      <div className='flex flex-row'>
        <div className="w-2/3 p-5 pt-0">
          <h1 className="mt-5 font text-4xl font-bold tracking-tight text-[#2F2D2E]">
            {postsData.title}
          </h1>
          <p className="mt-4 text-xl text-[#2E4057] mb-5">
            {postsData.body}
          </p>
        </div>
        <figure className="overflow-hidden rounded-lg shadow h-52" >
          <img
            src={`https://picsum.photos/id/${postsData.id + 100}/400/200`}
            alt="article"
          />
        </figure>
      </div>
      <div className='ml-5 pb-5'>
        <span className="bg-green-700 text-white px-2 py-1 rounded-full text-xs font-medium">{postsData.tags[0]}</span>
        <p className="mt-6 text-lg text-[#2E4057] mb-1"> Written by: </p>
        <div className='flex justify-between'>
          <div className='border-2 shadow-lg w-80 flex p-4 h-20'>
            <img src={usersData.image} alt='author avatar' className="overflow-hidden rounded-full shadow h-10" />
            <p className="text-lg text-[#2E4057] ml-5 mt-2"> {usersData.firstName} {usersData.lastName} </p>
          </div>
          <Link
            to={`/`}
            className="inline-block rounded-md border border-transparent bg-[#F18F01] py-3 px-8 text-center font-medium text-white hover:bg-[#CB7A01] mt-7 mr-5"
          >
            Back to Home
          </Link>
        </div>
      </div>

    </article >
  )
}

export default Article