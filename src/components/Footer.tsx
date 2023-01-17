import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-[#2F2D2E] text-gray-400 flex flex-col text-center py-3">
      <div className="text-3xl m-2 mt-0 flex justify-center" >
        <a href="https://github.com/Andrea-Agosta"><Github className='mr-3 hover:text-[#F18F01]' /></a>
        <a href="https://uk.linkedin.com/in/andrea-agosta-276ab866"><Linkedin className='hover:text-[#F18F01]' /></a>
      </div>
      <h6> &#169; Designed By <a href="http://agostadev.great-site.net/" className='hover:text-[#F18F01] underline'>Andrea Agosta</a> </h6>
    </footer>
  )
}

export default Footer;