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
    <section className='bg-[#2E4057] rounded-md'>
      <h1 className='text-[#EFF1F3] p-4 font-medium text-lg'>List of Author</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 bg-white p-5 rounded-b-md border-2 border-[#2E4057]'>
        {authors.map(author => <AuthorsBadge id={author.id} url={author.image} name={author.firstName} lastName={author.lastName} />)}
      </div>
    </section>
  )
}

export default AuthorList