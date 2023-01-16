import { Link } from "react-router-dom";
import { PostState, UserState } from "../type"

interface IState {
  article: PostState;
  author: UserState;
}

export default function Card({ article, author }: IState) {
  return (
    <article className="flex flex-col border-2 rounded-2xl p-5 drop-shadow-md bg-[#EFF1F3]">
      <figure className="overflow-hidden rounded-lg shadow h-52" >
        <img
          src={`https://picsum.photos/id/${article.id + 100}/400/200`}
          alt="article"
        />
      </figure>
      <div className="h-60">
        <h1 className="mt-5 font text-2xl font-bold tracking-tight text-gray-900">
          {article.title}
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          {article.body.substring(0, 80) + '...'}
        </p>
      </div>
      <Link
        to={`/aricle/${article.id}`}
        className="inline-block rounded-md border border-transparent bg-[#F18F01] py-3 px-8 text-center font-medium text-white hover:bg-[#CB7A01] mt-10"
      >
        Read Article
      </Link>
    </article>
  )
}
