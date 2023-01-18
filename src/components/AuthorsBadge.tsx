import { Link } from "react-router-dom"

interface IbadgeState {
  id: number;
  url: string;
  name: string;
  lastName: string;
}

const AuthorsBadge = ({ id, url, name, lastName }: IbadgeState) => {
  return (
    <Link to={`/authors/${id}/posts`} className='border-2 shadow-lg flex p-4 rounded-lg bg-[#eff1f3]'>
      <img src={url} alt='author avatar' className="overflow-hidden rounded-full shadow h-10" />
      <p className="text-lg text-[#2E4057] ml-5 md:mt-2 md:pr-5"> {name} {lastName} </p>
    </Link>
  )
}

export default AuthorsBadge;