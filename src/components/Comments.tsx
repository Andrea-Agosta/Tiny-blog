import { ChangeEvent, MouseEvent } from 'react'
import { CommentsData } from '../type';
import { useAuth0 } from "@auth0/auth0-react";

interface PostId {
  comments: CommentsData[];
  handlechange(e: ChangeEvent<HTMLTextAreaElement>): void;
  submitComment(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

const Comments = ({ comments, handlechange, submitComment }: PostId) => {
  const { isAuthenticated } = useAuth0();

  return (
    <section className="border-2 rounded-2xl p-5 drop-shadow-md bg-[#2E4057] text-white my-10">
      <h2 className="text-2xl font-medium mb-4">Comments</h2>
      {
        comments?.map(comment => (
          <div key={comment.id} className="bg-[#EFF1F3] rounded-lg p-4 mb-4">
            <div className="mb-4 flex">
              {
                comment.user.id !== -1 ?
                  <img src={`https://randomuser.me/api/portraits/men/${comment.user.id}.jpg`} alt="User Avatar" className="rounded-full h-10 w-10" />
                  :
                  <img src={`https://avatars.githubusercontent.com/u/82880493?v=4`} alt="User Avatar" className="rounded-full h-10 w-10" />
              }
              <div className="ml-2">
                <h3 className="mt-2 text-lg font-medium text-[#2E4057]">{comment.user.username}</h3>
              </div>
            </div>
            <p className="text-base text-[#2F2D2E]">{comment.body}</p>
          </div>
        ))
      }

      <div className="bg-[#EFF1F3] rounded-lg p-4">
        <form className="flex flex-col">
          <label className="text-lg font-medium text-[#2E4057]">Leave a comment</label>
          {
            !isAuthenticated ?
              <>
                <textarea className="bg-gray-500 rounded-lg p-2 border-2" placeholder="Please register if you want leave a comment!" disabled></textarea>
                <button className='bg-gray-500 rounded-md py-1 mt-2' disabled >Submit</button>
              </>
              :
              <>
                <textarea className="bg-[#F5F5F5] rounded-lg p-2 text-[#2F2D2E] border-2" placeholder="Write your comment here" onChange={handlechange} ></textarea>
                <button className='bg-[#F18F01] rounded-md py-1 mt-2' onClick={submitComment} >Submit</button>
              </>
          }
        </form>
      </div>
    </section>
  )
}

export default Comments