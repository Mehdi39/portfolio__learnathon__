import { BrowserRouter } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

//internal imports
import Layout from './layouts/layout';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={15}
        outerSize={12}
        color="255, 255, 255"
        outerAlpha={0.5}
        innerScale={1}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
