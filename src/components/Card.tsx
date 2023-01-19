import { Link } from "react-router-dom";
import { PostState } from "../type"

interface IState {
  article: PostState;
}

export default function Card({ article }: IState) {
  return (
    <article className="flex flex-col border-2 rounded-2xl p-5 drop-shadow-md bg-[#EFF1F3] max-w-md">
      <figure className="overflow-hidden rounded-lg" >
        <img
          src={`https://picsum.photos/id/${article.id + 100}/400/310`}
          alt={article.tags[0]}
          className='h-64'
        />
      </figure>
      <div className="h-60">
        <h1 className="mt-5 font text-2xl font-bold tracking-tight text-[#2F2D2E]">
          {article.title}
        </h1>
        <p className="mt-4 text-xl text-[#2E4057]">
          {article.body.substring(0, 80) + '...'}
        </p>
      </div>
      <Link
        to={`/article/${article.id}`}
        className="inline-block rounded-md border bg-[#F18F01] py-3 px-8 text-center font-medium text-white hover:bg-[#CB7A01] mt-10"
      >
        Read Article
      </Link>
    </article>
  )
}
