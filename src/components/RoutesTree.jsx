import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';

const RoutesTree = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/blogs" element={<Blog />} />
            </Routes>
        </div>
    );
};

export default RoutesTree;
