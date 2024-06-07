import React from 'react';
import styled from 'styled-components';
import logo from '../../../public/hkoliba_logo3.svg';


const LogoWrapper = styled.div`
  margin: 20px 40px;
`;

const LogoImage = styled.img`
  width: 300px; /* Adjust the size as necessary */
  height: auto;
`;

const LogoComponent = () => {
    return (
        <LogoWrapper>
            <LogoImage src={logo} alt="Logo" />
        </LogoWrapper>
    );
};

export default LogoComponent;