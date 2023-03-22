import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import './style.css';

export default function CodeEditor({ code, onEdit }) {
    return (
      <Editor
          className="code-editor"
          value={code}
          onValueChange={onEdit}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
          }}
      />
    );
}
