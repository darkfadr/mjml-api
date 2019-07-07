import styled from '@emotion/styled';
import { Pane } from 'evergreen-ui'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import sh from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import night from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
 
const Wrapper = styled.main`
  display: flex;
  height: 95vh;
  width: 95vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f46d4c;
  font-family: 'Montserrat', sans-serif;

  & h1 {
    font-size: 3em;
    font-weight: 300;
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  height: 300px;
  background: linear-gradient(180deg,#f46d4c 0,#e4505d);
`;

const code = `
$ curl -X POST "https://mjml.now.sh/render" \ 
  -d '{ 
    "mjml":"<mjml><mj-body><mj-container><mj-section><mj-column><mj-text>Hello World</mj-text></mj-column></mj-section></mj-container></mj-body></mjml>" 
  }'
`;

export default () => (
  <Wrapper>
    {/* <img src="https://mjml.io/assets/img/logo-white-small.png" /> */}
    <img src="https://mjml.io/documentation/images/logo.png" />
    <h1>Responsive Email as a Service</h1>
    <Pane width={900}>
      <SyntaxHighlighter language="javascript" style={night}>
        {code}
      </SyntaxHighlighter>
    </Pane>
  </Wrapper>
);