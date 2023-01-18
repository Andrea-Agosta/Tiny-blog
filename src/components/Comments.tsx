import { useEffect, useState } from 'react'
import { CommentsData } from '../type';

interface PostId {
  id: number;
}

const Comments = ({ id }: PostId) => {
  const [comments, setComments] = useState<CommentsData[]>([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(res => setComments(res.comments));
  }, [id]);

  return (
    <section className="border-2 rounded-2xl p-5 drop-shadow-md bg-[#2E4057] text-white my-10">
      <h2 className="text-2xl font-medium mb-4">Comments</h2>
      {
        comments?.map(comment => (
          <div key={comment.id} className="bg-[#EFF1F3] rounded-lg p-4 mb-4">
            <div className="mb-4 flex">
              <img src={`https://randomuser.me/api/portraits/men/${comment.user.id}.jpg`} alt="User Avatar" className="rounded-full h-10 w-10" />
              <div className="ml-2">
                <h3 className="text-lg font-medium text-[#2E4057]">{comment.user.username}</h3>
                <p className="text-sm text-[#2E4057]">5 minutes ago</p>
              </div>
            </div>
            <p className="text-base text-[#2F2D2E]">{comment.body}</p>
          </div>
        ))
      }

      <div className="bg-[#EFF1F3] rounded-lg p-4">
        <form className="flex flex-col">
          <label className="text-lg font-medium text-[#2E4057]">Leave a comment</label>
          <textarea className="bg-[#F5F5F5] rounded-lg p-2 text-[#2F2D2E] border-2" placeholder="Write your comment here" ></textarea>
          <button className='bg-[#F18F01] rounded-md py-1 mt-2'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Comments