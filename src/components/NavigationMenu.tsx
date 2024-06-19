
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const Nav = styled.nav`
    background-color: #007bff;
    color: #fff;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
`;

const Logo = styled.div`
    font-size: 1.5em;
`;

const Menu = styled.ul<{ isOpen: boolean }>`
    list-style-type: none;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: ${props => (props.isOpen ? '0' : '-100%')};
        background-color: #007bff;
        width: 100%;
        padding: 20px 0;
        transition: left 0.3s ease;
    }
`;

const MenuItem = styled.li`
    margin: 0 10px;

    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;

const MenuLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    transition: color 0.3s ease;

    &:hover {
        color: #f0f0f0;
    }
`;

const Hamburger = styled.div`
    font-size: 1.8em;
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;
    }
`;

const NavigationMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
            <Logo>Logo</Logo>
            <Hamburger onClick={toggleMenu}>
                <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuItem>
                    <MenuLink to="/">Home</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/about">About</MenuLink>
                </MenuItem>
            </Menu>
        </Nav>
    );
};

export default NavigationMenu;