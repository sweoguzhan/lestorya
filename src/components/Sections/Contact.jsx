import React from "react";
import styled from "styled-components";
import {useState} from "react";

// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import {GrLocation} from 'react-icons/gr';
import { send } from 'emailjs-com';
import Modal from 'react-modal';
import {AiOutlineMail,AiOutlineClose} from 'react-icons/ai';
import MailImg from "../../assets/img/mail.png"
export default function Contact() {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      position:'relative',
      width : '70%',
      maxWidth:'400px',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [toSend, setToSend] = useState({
    name: '',
    email:'',
    subject:'',
    message: ''
  });
  function closeModal() {
    setIsOpen(false);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_h0em5nd',
        'template_a6xnsw9',
        toSend,
        'iVu5a9zt-QWpmDS5w'
    )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsOpen(true);

        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">İletişime Geçelim</h1>
            <p className="font13">
              Lestorya Software Technologies olarak sıradaki büyük projenizi bütünüyle geliştirmeye talibiz, bize ulaşarak detaylı bilgi alabilirsiniz!

            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={onSubmit} >
                <label className="font13">Ad Soyad:</label>
                <input type="text" id="fname" name="name"  value={toSend.name} onChange={handleChange} className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email"  value={toSend.email} onChange={handleChange} className="font20 extraBold" />
                <label className="font13">Konu:</label>
                <input type="text" id="subject" name="subject" value={toSend.subject}  onChange={handleChange} className="font20 extraBold" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" value={toSend.message}  onChange={handleChange} className="font20 extraBold" />
                <div className="button">
                  <button type="submit"  className='send-btn' value="Gönder"> Gönder</button>
                </div>
              </Form>

            </div>
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                  <AiOutlineClose  className="closemodal"   onClick={closeModal} />
                  <img src={MailImg} className="emailsuccesimg" />
                  <h3 className="modaltext">Mailinize en kısa sürede dönüş yapılacaktır.</h3>
                </Modal>
            )}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div className='contact-div'>
                <div className='contact-title'>
                  <h3>İletişim</h3>
                </div>
                <div className='contact-rows'>
                  <div className='contact-adress'>
                    <GrLocation  className='contact-icon' />
                    <div className='adress'>
                      <h3>Adres</h3>
                      <h4>Bilişim Vadisi, Deniz Cd. No: 143/5, 41400 Gebze/Kocaeli
                      </h4>
                    </div>

                  </div>
                  <div className='contact-adress'>
                    <AiOutlineMail  className='contact-icon' />
                    <div className='adress'>
                      <h3>E-Posta</h3>
                      <h4>info@lestorya.com
                      </h4>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









