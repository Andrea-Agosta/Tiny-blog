import { useEffect, useState } from 'react';
import Section from '../components/Section';
import { PostState } from '../type';

const Home = () => {
  const [postsData, setPostsData] = useState<PostState[]>([]);
  const [categories, setCategories] = useState<string[]>([] as string[]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=130')
      .then(res => res.json())
      .then(res => setPostsData(res.posts));
  }, [])

  postsData.map(data => {
    const capitalizeText = data.tags[0][0].toUpperCase() + data.tags[0].slice(1);
    return !categories.includes(capitalizeText) && setCategories(prev => [...prev, capitalizeText])
  });

  const postFromCategory = categories.slice(0, 5).map(category => postsData.filter(post => post.tags[0] === category.toLowerCase()))

  return (
    <section>
      <div className='grid grid-cols-1 gap-6'>
        {categories.slice(0, 5).map((category, index) => <Section key={index} category={category} postData={postFromCategory[index]} />)}
      </div>
    </section>
  )
}

export default Home