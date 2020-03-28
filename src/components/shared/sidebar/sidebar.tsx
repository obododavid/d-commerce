import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div<Prop>`
    width: 100%;
    height: 100vh;
    transform: translateX(100vw);
    background-color: #fff;
    position: fixed;
    z-index: 40;
    padding-left: 30px;
    transition: transform 0.25s ease-in-out;

    ${({ isNavbarOpen }) => isNavbarOpen && "transform: translateX(15vw)"};

    .sideNav__brand {
        height: 70px;
        display: flex;
        align-items: center;
        color: #444444;
    }

    .sideNav__links {
        li {
            font-size: 20px;
            margin-bottom: 30px;
            list-style: none;
        }
    }
`;

interface Prop {
    isNavbarOpen: boolean;
}

const Sidebar: React.FC<Prop> = ({ isNavbarOpen }) => {
    return (
        <SidebarContainer isNavbarOpen={isNavbarOpen}>
            <h1 className="sideNav__brand">d-Commerce</h1>
            <ul className="sideNav__links">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Download</li>
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;
