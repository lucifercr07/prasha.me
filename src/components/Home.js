import React from "react";

import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function Home() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <About />
            <Skills />
            <Contact />
        </main>
    );
}

export default Home;