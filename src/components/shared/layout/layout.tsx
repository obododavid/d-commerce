import React, { useState } from "react";

import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";

import { LayoutContainer, Body } from './style';
import { LayoutProps } from './ILayout';

import Hamburger from "../hamburger/hamburger";
import Backdrop from "../backdrop/backdrop";
import ErrorBoundary from '../../../utils/errorBoundary/erroBoundary';


const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
    isFooterPresent
}) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleShowNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <ErrorBoundary>

            <LayoutContainer>
                <Backdrop
                    showBackdrop={isNavbarOpen}
                    color='black'
                    behaviour='right2left' />
                <Hamburger
                    handleShowNavbar={handleShowNavbar}
                    isNavbarOpen={isNavbarOpen}
                />
                <Navbar />
                <Sidebar isNavbarOpen={isNavbarOpen} />
                <Body>{children}</Body>
                {isFooterPresent && <Footer />}
            </LayoutContainer>
        </ErrorBoundary>
    );
};

export default Layout;
