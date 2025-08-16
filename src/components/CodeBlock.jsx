import React, { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'

const CodeContainer = styled.div`
  background: #1e1e1e;
  border: 1px solid #444;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`

const CodeHeader = styled.div`
  background: #2d2d2d;
  padding: 10px 20px;
  border-bottom: 1px solid #444;
  font-size: 0.9em;
  color: #ffd700;
  font-weight: bold;
`

const CodeContent = styled.pre`
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  font-family: 'Courier New', Monaco, 'Lucida Console', monospace;
  font-size: ${props => props.small ? '0.8em' : '0.9em'};
  line-height: 1.5;
  
  code {
    font-family: inherit;
  }

  /* Custom syntax highlighting */
  .token.comment {
    color: #7C7C7C;
  }

  .token.punctuation {
    color: #c5c8c6;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #96CBFE;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin {
    color: #A8FF60;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #FFFFB6;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #C6C5FE;
  }

  .token.function {
    color: #FFD2A7;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #FF8400;
  }
`

function CodeBlock({ children, language = 'javascript', title, small = false }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <CodeContainer>
      {title && <CodeHeader>{title}</CodeHeader>}
      <CodeContent small={small}>
        <code className={`language-${language}`}>
          {children}
        </code>
      </CodeContent>
    </CodeContainer>
  )
}

export default CodeBlock
