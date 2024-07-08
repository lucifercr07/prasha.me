import React, { useState, useEffect } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import Collapsible from 'react-collapsible';
import './style.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const markdown = '# Hi, *Pluto*!'

function Projects() {
  const [concurrencyContent, setConcurrencyContent] = useState('');
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Function to fetch content when Collapsible is opened
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/lucifercr07/obsidian/main/Java/Multithreading/Hands%20on%20Resources.md")
      .then((response) => {
        if (response.ok) return response.text();
        else return Promise.reject("Didn't fetch text correctly");
      })
      .then((text) => {
        setConcurrencyContent(text);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center">
        {/* Header */}
        <div className="flex justify-center text-2xl py-10 hidden md:flex font-spartan">
          <a href="/" className="pr-24 text-gray-400 hover:text-green-400 transition duration-300">Home</a>
          <a href="/blogs/"
            className="pr-24 text-gray-400 hover:text-green-400 transition duration-300">Blogs</a>
          <a href="/projects/"
            className="pl-2 pr-20 text-green-400 border-b-4 border-green-500">Projects</a>
          <a href="/scribs/"
            className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Random Scribs</a>
          <a href="/papers-shelve/"
            className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Papers Stack</a>
          <a href="/books-shelve/"
            className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Books Nook</a>
        </div>
      </div>
      {/* Projects section */}
      <div className="flex flex-col items-center mt-16">
        {/* Concurrency Collapsible */}
        <Collapsible
          trigger={["Concurrency", <FaArrowDown />]}
          className="custom-collapsible"
          triggerClassName="custom-trigger"
          triggerOpenedClassName="custom-trigger opened"
          contentOuterClassName="custom-content-outer"
          contentInnerClassName="custom-content-inner"
        >
          <MarkdownRenderer content={concurrencyContent} />
        </Collapsible>

        {/* Distributed Systems Collapsible */}
        <Collapsible
          trigger={["Distributed Systems", <FaArrowDown />]}
          className="custom-collapsible"
          triggerClassName="custom-trigger"
          triggerOpenedClassName="custom-trigger opened"
          contentOuterClassName="custom-content-outer"
          contentInnerClassName="custom-content-inner"
        >
          <MarkdownRenderer content={'Coming Soon...............................................................'} />
        </Collapsible>
      </div>
    </div>
  );
}

export default Projects;
