// Footer.tsx

import React from 'react';
import styled from 'styled-components';

// Styled components
const FooterWrapper = styled.footer`
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
`;

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Container>
                <p>&copy; 2024 John Smith. All rights reserved.</p>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
