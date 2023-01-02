import React from "react";
import {useState} from "react";
import GetPrice from "../components/Sections/GetPrice";
import {GrLocation} from 'react-icons/gr';
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import { send } from 'emailjs-com';

export default function Landing() {
    const [toSend, setToSend] = useState({
        name: '',
        surname:'',
        email:'',
        message: '',
        phone:''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_h0em5nd',
            'template_brpew3g',
            toSend,
            'iVu5a9zt-QWpmDS5w'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <>

            <div className="price-container">
                <div className="price-content">
                    <div className="left-side">
                        <div className="address details">
                            <GrLocation  className='getprice-icons'  />
                            <div className="topic">Adres</div>
                            <div className="text-one">Bilişim Vadisi, Deniz Cd. No: 143/5, 41400 </div>
                            <div className="text-two">Gebze/Kocaeli</div>
                        </div>
                        <div className="phone details" >
                            <AiOutlinePhone className='getprice-icons' />
                            <div className="topic">Telefon</div>
                            <div className="text-one">+905459367126</div>
                        </div>
                        <div className="email details">
                            <AiOutlineMail className='getprice-icons' />
                            <div className="topic">Email</div>
                            <div className="text-one">info@lestorya.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Projenizden bize bahsedin</div>
                        <p className='topic-paragraph'>Aklınızdaki Projeyi Hayata Geçirelim. Bireysel ve Kurumsal Yazılımlar, Özel Mobil Uygulamalar, E-Ticaret Sistemleri ve daha fazlası</p>
                        <form action="#" onSubmit={onSubmit}>
                            <div className="input-box">
                                <input type="text" placeholder="Ad"     name='name' value={toSend.name}     onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Soyad"     name='surname'
                                       value={toSend.surname}     onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <input type="email"  required placeholder="Email"     name='email'

                                       value={toSend.email}     onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <input type="tel" placeholder="Telefon Numarası"      name='phone'
                                       value={toSend.phone}     onChange={handleChange}
                                />
                            </div>
                            <div className="input-box message-box">
                                <input type="text" placeholder="Projenizden bahsedin"      name='message'
                                       value={toSend.message}      onChange={handleChange}
                                />

                            </div>
                            <div className="button">
                                <input type="submit"  className='send-btn' value="Gönder"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    );
}


