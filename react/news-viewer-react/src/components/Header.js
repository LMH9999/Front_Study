import React from 'react';
import { NavLink } from '../../node_modules/react-router-dom/dist/index';

const Header = () => {
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 class="my-0 mr-md-auto font-weight-bold">News API</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <NavLink className={({isActive})=>(isActive ? "p-2 text-dark active" : "p-2 text-dark")} to="/">Home</NavLink>
                <NavLink className={({isActive})=>(isActive ? "p-2 text-dark active" : "p-2 text-dark")} to="/news">뉴스</NavLink>
            </nav>
        </div>
    );
};

export default Header;