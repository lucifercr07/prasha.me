import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import style from '../markdown-styles.module.css';


function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={style.reactMarkDown}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownRenderer;
