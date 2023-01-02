import React from "react";
import styled from "styled-components";
// Assets
import {BsCode,BsPatchQuestion} from 'react-icons/bs';

import {AiOutlineTeam} from 'react-icons/ai';
import {HiOutlineDevicePhoneMobile} from 'react-icons/hi2';
import {MdWeb} from 'react-icons/md';
export default function TestimonialBox({ title,text, author,icon}) {

    let getIcon;

    switch (icon) {
        case "team":
            getIcon = <AiOutlineTeam />;
            break;
        case "code":
            getIcon = <BsCode />;
            break;
        case "question":
            getIcon = <BsPatchQuestion />;
            break;
        case "mobile":
            getIcon = <HiOutlineDevicePhoneMobile />;
            break;
        case "web":
            getIcon = <MdWeb />;
            break;
    }
  return (
    <Wrapper className="darkBg radius8 flexNullCenter flexColumn">
        <span className='service-icon'>{getIcon}</span>
        <h3 className='ourservice-title'>
            {title}
        </h3>
      <p className="whiteColor font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
      <p className="orangeColor font13" style={{alignSelf: 'flex-end'}}>
        <em>{author}</em>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;
