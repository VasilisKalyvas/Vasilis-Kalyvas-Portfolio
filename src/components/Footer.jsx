import React from 'react'
import "../styles/footer.css";
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href='https://www.linkedin.com/in/vasilis-kalyvas-400555226/'><GrLinkedin /></a>
            <a href='https://github.com/VasilisKalyvas'><BsGithub /></a>
        </div>
        <p>Email: bkalivas8@gmail.com</p>
        <p> &copy; 2022 Vasilis Kalyvas</p>
    </div>
  )
}

export default Footer