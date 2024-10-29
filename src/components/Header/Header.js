import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { HomeRounded } from '@mui/icons-material';
import ResumeData from '../../utils/ResumeData';
import CustomButton from '../Button/Button';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './Header.css'

const Header = () => {

  const location = useLocation();
  const pathName = location.pathname;

  console.log('Current path:', pathName);


  return (
    <Navbar expand="lg" sticky='top' className="header">
      {/* Home Link */}
      <Nav.Link as={NavLink} to='/'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName == '/' ? 'header_link_active' : 'header_link'}>
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>
            Portfolio
          </Nav.Link>
        </Nav>

        <div className='header_right'>
          {Object.keys(ResumeData.socials).map(key => (
            <a href={ResumeData.socials[key].link} target='_blank' >
              {ResumeData.socials[key].icon}
            </a>
          ))}
          <a href="mailto:muraliraman728@gmail.com?subject=Hiring Inquiry&body=Hello, I would like to discuss...">
            <CustomButton text={'Hire Me'} icon={<ContactMailIcon />} />
          </a>
        </div>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;