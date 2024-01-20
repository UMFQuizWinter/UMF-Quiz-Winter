import Logo from './logo.png';
import Logo_Infractor from './logo_incognito.png';
import { Link } from "react-router-dom";
import "./Picker.css";
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import emailjs from 'emailjs-com';

const style = {
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export const Picker = () => {
  const [isInfractor, setIsInfractor] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleSendEmail = (whotried) => {
    const templateParams = {
      to_email: 'mistrate06@gmail.com',
      message: whotried,
    };
    emailjs
      .send(
        'service_suz84gh',
        'template_g8tbmpv',
        templateParams,
        'xpdu3mrjZleXiK_G8'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === 'abc') {
      alert('Infractorule! Bine ai revenit și spor la grile.');
      handleSendEmail('Username: ' + username + '\nThey were succesful.');
      setIsInfractor(true);
      console.log('Is infractor?: ', isInfractor)
      handleClose();

    } else {
      alert('Invalid username or password. Please try again.');
      handleSendEmail('Username: ' + username + '\nThey were unsuccesful. \nTheir password try was: ' + password);
      console.log('Is infractor?: ', isInfractor)

      handleClose();
    }
  };
  return (
    <>
      <div className="main-container">
        <div className='buttons-manage'>
          <button className='btn-head' onClick={() => (isInfractor ? setIsInfractor(false) : handleOpen())}>
            {isInfractor ? 'Ieși din mod infractor' : 'Panel Admin'}
          </button>
          <a href='https://www.thomann.de/gb/gibson_les_paul_59_kindred_burst_uha_541731.htm'>
            <button className='btn-head'>Mulțumește autorului</button>
          </a>
        </div>
        <div className="image-container">
          <img src={isInfractor ? Logo_Infractor : Logo} alt="logo" style={{}}></img>
        </div>

        <div className="page">
          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/farmaco">
              Farmacologie
            </Link>
          </button>

          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/fiziologie">
              Fiziologie
            </Link>
          </button>

          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/semiomed">
              Semiologie Medicală
            </Link>
          </button>

          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/semiochir">
              Semiologie chirurgicală
            </Link>
          </button>
          {/* <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/anato">
              Anatomie
            </Link>
          </button>
          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/diabet">
              Diabet
            </Link>
          </button>
          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/fizio">
              Fiziologie
            </Link>
          </button> */}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal_box">
            <Box sx={style}>
              <span
                style={{
                  // position: 'absolute',
                  // top: '10px',
                  // left: '10px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
                onClick={handleClose}
              >    &times;
              </span>
              <h1>Howdy, admin! Enter your credentials below: </h1>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <label className='label_form'>
                  Username:
                  <input type="text" value={username} onChange={handleUsernameChange} style={{ height: '1.8em' }} />
                </label>
                <br />
                <label className='label_form'>
                  Password:
                  <input type="password" value={password} onChange={handlePasswordChange} style={{ height: '1.8em' }} />
                </label>
                <br />
                <button style={{ width: '8em', height: '3em', border: '1px solid black' }} type="submit">Submit</button>
              </form>
            </Box>
          </div >
        </Modal>
      </div>
    </>
  );
};

export default Picker;
