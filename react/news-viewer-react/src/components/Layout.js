import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from '../../node_modules/react-router-dom/dist/index';

const Layout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <main role="main">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;