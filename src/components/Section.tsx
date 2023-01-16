import { useState } from 'react';
import Card from '../components/Card';
import { PostState, UserState } from '../type';
import './Section.css';

interface SectionState {
  category: string;
  postData: PostState[];
  userData: UserState[];
}

const Section = ({ category, postData, userData }: SectionState) => {
  const [showSection, setshowSection] = useState('invisible');
  const handleclick = () => {
    showSection === 'invisible' ? setshowSection('visible') : setshowSection('invisible');
  };

  return (
    // <section className='p-10'>
    //   <div className='grid grid-cols-2 gap-6'>
    //     <h2 className='p-10 border rounded-xl shadow' >{category}</h2>
    //   </div>
    //   {
    //     // articles.map(article => {
    //     //   const author: UserState[] = userData.filter(user => user.id === article.userId);
    //     //   return <Card article={article} author={author[0]} />;
    //     // })
    //   }
    // </section>

    <section className="">
      <button className="bg-gray-200 hover:bg-gray-300 rounded-none outline-none w-full text-left cursor-pointer p-4 transition duration-200 ease-in-out font-medium text-lg" onClick={handleclick}>{category}</button>
      <div className={`bg-yellow-300 p-4 transition duration-200 ease-in-out overflow-hidden' ${showSection}`} >
        <p>Content for section 3</p>
      </div>
    </section>
  )
}

export default Section;