import { Link } from "react-router-dom";
import { PostState, UserState } from "../../type"

interface IState {
  article: PostState;
  author: UserState;
}

export default function Post({ article, author }: IState) {
  return (
    <article className="m-10 relative mx-auto max-w-4xl sm:static sm:px-6 lg:pl-8 lg:pr-0 flex flex-row justify-center border-2 rounded-2xl py-10 drop-shadow-md ">
      <div className="sm:max-w-lg basis-3/4">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          {article.body}
        </p>
        ADD TAGS
      </div>

      <div className="mt-10 basis-1/4 ml-10 mr-2">
        <figure className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100" >
          <img
            src={`https://picsum.photos/id/${article.id + 100}/200/300`}
            alt="article"
          />
        </figure>
        <Link
          to={`/aricle/${article.id}`}
          className="w-44 inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 mt-10"
        >
          Read Article
        </Link>
      </div>
    </article>
  )
}
