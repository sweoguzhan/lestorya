import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import Reactjs from "../../assets/img/add/reactjs2.png";
import Vuejs from "../../assets/img/add/vuejs5.png";
import Javascript from "../../assets/img/add/javascript.png";
import Nodejs from "../../assets/img/add/nodejs3.png";
import Php from "../../assets/img/add/php.png";
import Kotlin from "../../assets/img/add/kotlin2.png";



export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">Fiyat Teklifi Alin!</h2>
                <p className="font16">
                  Yaptırmak istediğiniz özel yazılım, web sitesi, mobil uygulama veya web tasarım projeleri ile ilgili bizden mutlaka teklif alın Proje detaylarını yazmanız durumunda en geç 12 saat içerisinde teklif size yazılı olarak iletilecektir.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px"}}>
                    <a href="/price">
                      <FullButton title="İletişime Geçin"  border className='contactus-btn'  />

                    </a>
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={Javascript} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={Php} alt="office"  style={{}} />
                    </AddImgWrapp2>
                  </div>

                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={Vuejs} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={Kotlin} alt="office" />
                    </AddImgWrapp4>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={Reactjs} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={Nodejs} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: center;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    background-color: white;

    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 50%;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    padding: 10px;
    background-color: white;

    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 30%;
  margin-left: 25%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
