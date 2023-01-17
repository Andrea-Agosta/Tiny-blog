import { useEffect, useState } from 'react'
import { PostState, UserState } from '../type';
import { Link } from 'react-router-dom';
import AuthorsBadge from '../components/AuthorsBadge';
import Comments from '../components/Comments';

const Article = () => {
  const [postsData, setPostsData] = useState<PostState>({} as PostState);
  const [usersData, setUsersData] = useState<UserState>({} as UserState);
  let idFromUrl = -1;
  let regex = /\/([0-9]+)(?=[^/]*$)/;
  const url: string = window.location.href;
  const partialUrl = regex.exec(String(url));
  if (partialUrl) {
    idFromUrl = Number(partialUrl[1]);
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${idFromUrl}`)
      .then(res => res.json())
      .then(res => {
        setPostsData(res);
        return res.userId;
      })
      .then(id => {
        fetch(`https://dummyjson.com/users/${id}`)
          .then(res => res.json())
          .then(res => setUsersData(res))
      })
  }, [idFromUrl])

  return (
    <>
      <article className="border-2 rounded-2xl p-5 drop-shadow-md bg-[#EFF1F3] m-3 md:m-20">
        <div className='flex flex-col-reverse md:flex-row'>
          <div className="md:w-2/3 p-5 pt-0">
            <h1 className="mt-5 font text-4xl font-bold tracking-tight text-[#2F2D2E]">
              {postsData.title}
            </h1>
            <p className="mt-4 text-xl text-[#2E4057] mb-5">
              {postsData.body}
            </p>
          </div>
          <figure className="overflow-hidden " >
            <img
              src={`https://picsum.photos/id/${postsData.id + 100}/400/400`}
              alt="article"
              className='rounded-lg'
            />
          </figure>
        </div>
        <div className='ml-5 pb-5'>
          {/* <span className="bg-green-700 text-white px-2 py-1 rounded-full text-xs font-medium">{postsData.tags[0][0].toUpperCase() + postsData.tags[0].slice(1)}</span> */}
          <p className="mt-6 text-lg text-[#2E4057] mb-1"> Written by: </p>
          <div className='flex justify-between flex-col md:flex-row'>
            <AuthorsBadge id={postsData.userId} url={usersData.image} name={usersData.firstName} lastName={usersData.lastName} />
            <Link
              to={`/`}
              className="inline-block rounded-md border border-transparent bg-[#F18F01] py-3 px-8 text-center font-medium text-white hover:bg-[#CB7A01] mt-7 md:mr-5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </article >
      <Comments id={postsData.id} />
    </>
  )
}

export default Article