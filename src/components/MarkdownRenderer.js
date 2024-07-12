import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import listStyle from '../markdown-styles.module.css';

function MarkdownRenderer({ content }) {

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={listStyle.reactMarkDown}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownRenderer;
