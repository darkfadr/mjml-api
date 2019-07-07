import styled from '@emotion/styled';
import { Card } from 'evergreen-ui'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import night from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';
 
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

  & pre {
    ${'' /* border-bottom-left-radius: 10px;
    border-bottom--right-radius: 10px; */}
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
`;

const Terminal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #bdb9b9;
  padding:6px;
`;

const CLI = styled(SyntaxHighlighter)`
  border-bottom-radius: 10px;
  margin-bottom: 0px;
`; 

const Footer = styled.footer`
  margin-top: auto;
  height: 300px;
  background: linear-gradient(180deg,#f46d4c 0,#e4505d);
`;

const Action = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 5px;
  background: ${({color}) => color};
`;

const code = `
$ curl -X POST "https://mjml.now.sh/render" \\ 
  -d '{ 
    "mjml":"<mjml><mj-body><mj-container><mj-section><mj-column><mj-text>Hello World</mj-text></mj-column></mj-section></mj-container></mj-body></mjml>" 
  }'
`;

export default () => (
  <Wrapper>
    {/* <img src="https://mjml.io/assets/img/logo-white-small.png" /> */}
    <img src="https://mjml.io/documentation/images/logo.png" />
    <h1>Responsive Email as a Service</h1>
    <Card width={900} elevation={3} style={{overflow: 'hidden'}}>
      <Terminal>
        <Action color="#ea3838"/>
        <Action color="#fffd62"/>
        <Action color="#39fb00"/>
      </Terminal>
      <CLI 
        style={night}
        wrapLines={true}
        language="javascript">
        {code}
      </CLI>
    </Card>
  </Wrapper>
);