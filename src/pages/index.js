import * as React from 'react';
//import TrustBox2 from '../components/Trustbox2';
//import loadable from '@loadable/component';
//import pMinDelay from 'p-min-delay';
/*const TrustBox = loadable(() =>
  pMinDelay(import('../components/Trustbox'), 10000)
);*/
import TrustBox2 from '../components/Trustbox2';
const IndexPage = () => (
  <>
    <section style={{ margin: '50px' }}>
      <h1 style={{ marginBottom: '20px' }}>
        Testing third party script's perfomance
      </h1>
      <p>The chat widget is in the bottom left corner</p>
      <p>This is Nimbata dynamic tracking number:</p>
      <button>0161 794 0088</button>
      <p style={{ marginTop: `20px` }}>This is Trustbox:</p>
      <div id='trustbox'></div>
      {/*<TrustBox />*/}
      <div style={{ marginBottom: '5000px' }} />
    </section>
  </>
);

export default IndexPage;
