import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import {
    MDBFooter,
    MDBContainer,
    
  
    MDBBtn
} from 'mdb-react-ui-kit';

const Foter = () => {
    return (
        <MDBFooter className='bg-light text-center text-white'>
        <div className=''>
          <section className=''>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              href='#!'
              role='button'
            >
              <FaInstagram />
              
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='#!'
              role='button'
            >
              <FaFacebook />
              {/* <MDBIcon  className='m-2' fab icon='twitter' /> */}
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='#!'
              role='button'
            >
              <TiSocialTwitter />
              {/* <MDBIcon  className='m-2' fab icon='google' /> */}
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='#!'
              role='button'
            >
              <FcGoogle />
              {/* <MDBIcon className='m-2' fab icon='instagram' /> */}
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='#!'
              role='button'
            > <IoLogoLinkedin />
              {/* <MDBIcon  className='m-2' fab icon='linkedin-in' /> */}
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='#!'
              role='button'
            >
              <IoLogoGithub />
              {/* <MDBIcon className='m-2' fab icon='github' /> */}
            </MDBBtn>
          </section>

          <div className='text-center p-3' style={{ backgroundColor: '#14a0a0' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
        </div>
  
        
      </MDBFooter>
   
      );
}

export default Foter
