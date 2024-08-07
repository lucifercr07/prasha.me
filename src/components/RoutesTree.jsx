import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import Books from "./Books";
import Papers from "./Papers";
import Scribs from "./Scribs";
import Projects from "./Projects";

const RoutesTree = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/blogs" element={<Blog />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/books-shelve" element={<Books />} />
                <Route exact path="/papers-shelve" element={<Papers />} />
                <Route exact path="/scribs" element={<Scribs />} />
            </Routes>
        </div>
    );
};

export default RoutesTree;
