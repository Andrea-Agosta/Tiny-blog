import { useEffect, useState } from 'react'
import AuthorsBadge from '../components/AuthorsBadge';
import { UserState } from '../type';

const AuthorList = () => {
  const [authors, setAuthors] = useState<UserState[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=36')
      .then(res => res.json())
      .then(res => setAuthors(res.users));
  }, []);

  return (
    <section className='m-3 md:m-5 lg:m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {authors.map(author => <AuthorsBadge id={author.id} url={author.image} name={author.firstName} lastName={author.lastName} />)}
    </section>
  )
}

export default AuthorList