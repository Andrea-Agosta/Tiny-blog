import { useEffect, useState } from 'react';
import Section from '../components/Section';
import mockPosts from '../mockData/post.json';
import mockUsers from '../mockData/users.json';
import { PostState, UserState } from '../type';

const Home = () => {
  const [postsData, setPostsData] = useState<PostState[]>(mockPosts.posts);
  const [usersData, setUsersData] = useState<UserState[]>(mockUsers.users);
  const [categories, setCategories] = useState<string[]>([] as string[]);

  useEffect(() => {
    //todo add fetch when the components are done
  }, [])

  postsData.map(data => !categories.includes(data.tags[0]) && setCategories(prev => [...prev, data.tags[0]]));
  const fileredPostFromCategory = categories.map(category => postsData.filter(post => post.tags[0] === category))

  return (
    <section className='p-10'>
      <div className='grid grid-cols-1 gap-6'>
        {categories.map((category, index) => <Section key={index} category={category} postData={fileredPostFromCategory[index]} userData={usersData} />)}
      </div>
    </section>
  )
}

export default Home