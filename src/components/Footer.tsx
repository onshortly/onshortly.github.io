import styled from 'styled-components';

const FooterWrapper = styled.div`
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

const Footer = () => {
    return (
        <FooterWrapper>
                <p>2024 John Smith. All rights reserved.</p>
        </FooterWrapper>
    );
};

export default Footer;
