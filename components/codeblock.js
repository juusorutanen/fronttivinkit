'use client'
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function Code({ className = "", children }) {
  const language = className.replace("lang-", "");
  return (
    <div className="codeBlock">
      <SyntaxHighlighter language={language} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code