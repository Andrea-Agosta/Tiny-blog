import { ChangeEvent, useEffect, useState } from 'react'
import { CommentsData, PostState, UserState } from '../type';
import { Link } from 'react-router-dom';
import AuthorsBadge from '../components/AuthorsBadge';
import Comments from '../components/Comments';
import { useAuth0 } from "@auth0/auth0-react";

const Article = () => {
  const [postsData, setPostsData] = useState<PostState>({} as PostState);
  const [usersData, setUsersData] = useState<UserState>({} as UserState);
  const [comments, setComments] = useState<CommentsData[]>([]);
  const { user } = useAuth0();

  let idFromUrl = -1;
  const [userComment, setUserComment] = useState<CommentsData>({
    "id": -1,
    "body": '',
    "postId": idFromUrl,
    "user": {
      "id": -1,
      "username": user?.name ? user.name : '',
    }
  });

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

    fetch(`https://dummyjson.com/posts/${idFromUrl}/comments`)
      .then(res => res.json())
      .then(res => setComments(res.comments));
  }, [idFromUrl]);

  const handlechange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const comment = event.currentTarget.value;
    setUserComment(prev => ({ ...prev, body: comment }));
  };

  const submitComment = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setComments(prev => [...prev, userComment])
  };

  return (
    <>
      <article className="border-2 border-[#2E4057] rounded-2xl p-5 drop-shadow-md bg-[#EFF1F3] mb-0">
        <div className='flex flex-col-reverse lg:flex-row md:mt-10'>
          <div className="lg:md:w-2/3 p-5 pt-0">
            <h1 className="font text-4xl font-bold tracking-tight text-[#2F2D2E] mt-5 lg:mt-0">
              {postsData.title}
            </h1>
            <p className="mt-4 text-xl text-[#2E4057] mb-5">
              {postsData.body}
            </p>
          </div>
          <figure className="overflow-hidden" >
            <img
              src={`https://picsum.photos/id/${postsData.id + 100}/400/400`}
              alt="article"
              className='rounded-lg'
            />
          </figure>
        </div>
        <div className='ml-5 pb-5'>
          <span className="bg-green-700 text-white px-2 py-1 rounded-full text-xs font-medium">{postsData.tags && postsData.tags[0][0].toUpperCase() + postsData.tags[0].slice(1)}</span>
          <p className="mt-6 text-lg text-[#2E4057] mb-1"> Written by: </p>
          <div className='flex justify-between flex-col md:flex-row'>
            <AuthorsBadge id={postsData.userId} url={usersData.image} name={usersData.firstName} lastName={usersData.lastName} />
            <Link
              to={`/`}
              className="inline-block rounded-md border bg-[#F18F01] py-3 px-8 text-center font-medium text-white hover:bg-[#CB7A01] mt-7 md:mr-5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </article >
      <Comments comments={comments} handlechange={handlechange} submitComment={submitComment} />
    </>
  )
}

export default Article