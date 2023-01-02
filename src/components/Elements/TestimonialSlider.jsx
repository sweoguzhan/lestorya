import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
              icon="code"
              title="Web Geliştirme"
            text="Yazılım alaninda gelismis ekibimiz, belirlediğiniz hedefe ulaşmak için herhangi bir web geliştirme projesini sıfırdan oluşturur, kullanır, entegre eder , büyük bir uzmanlıkla,titizlikle özelleştirir. Veri Entegrasyonu, E-Ticaret Entegrasyonu,Kurumsal Uygulama Entegrasyonu, Geçişler,Tasarim,Uygulama ve Dağıtım, API Geliştirme veya daha fazlası için sizlere destek olmak biz buradayız."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
              icon="question"
              title="Biz Kimiz?"
              text="Firmamız, teknolojinin sunduğu tüm olanaklar ile her sektör ve ölçekten şirketlere, yenilikçi yaklaşımlar ve yeni teknolojilerle yazılım çözümleri sunmak için hizmete başlamıştır. Lestorya Software Technologies Ltd.Şti. olarak felsefemiz günümüzde yoğun rekabet koşulları içerisinde sürekli değişim süreci yaşayan kuruluşlara bilişim sistemlerini daha etkili  kullanmalarını sağlamak için kurumsal  ve özel yazılım hizmetleri vermektir."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
              icon="team"
              title="Ekibimiz"
              text="Müşteri memnuniyetine yüksek düzeyde önem veren ekibimiz, tüm müşterilerimize, geliştirme, bakım ve destek gibi tüm iş süreçlerinde güven ilişkisi kurarak kalite ve profesyonellikten taviz vermez.
Alanlarında deneyimli, büyük ölçekli projelerde başarı ile uygulama geliştirmiş, değişime ve gelişime açık, teknolojiyi ve trendleri yakından takip eden, güçlü, genç ve dinamik bir kadroya sahibiz.
"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
              icon="mobile"
              title="Mobil Gelistirme"
              text="Müşteri bazlı yöntemler geliştirebilen profesyonel ,deneyimli ve yüksek uzmanlığımız sayesinde Android ve iOS yerel uygulamalar için; her zaman  onceligimiz olan güvenlik ve güvenilirlik başlığı altında kurumların üretkenliklerini, deneyimlerini,görünürlüklerini ve kontrollerini arttırmayı sağlayacak temel ve özelleştirilmiş iş ihtiyaçlarını içeren mobil uygulamalar geliştirebiliyoruz."
          />
        </LogoWrapper>


      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
