import { useState } from 'react';
import Card from '../components/Card';
import { PostState } from '../type';

interface SectionState {
  category: string;
  postData: PostState[];
}

const Section = ({ category, postData }: SectionState) => {
  const [showSection, setshowSection] = useState('hidden sm:flex');
  const handleclick = () => {
    showSection === 'hidden sm:flex' ? setshowSection('flex sm:hidden') : setshowSection('hidden sm:flex');
  };

  return (
    <section>
      <button
        className="bg-[#2E4057] hover:bg-[#233143] text-[#EFF1F3] rounded-none outline-none w-full text-left cursor-pointer p-4 transition duration-200 ease-in-out font-medium text-lg"
        onClick={handleclick}
      >
        {category}
      </button>
      <div className={`bg-white p-4 transition duration-200 ease-in-out overflow-hidden' ${showSection}`} >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {postData.map(article => <Card key={article.id} article={article} />)}
        </div>
      </div>
    </section>
  )
}

export default Section;