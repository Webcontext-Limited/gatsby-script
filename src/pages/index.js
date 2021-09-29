import * as React from 'react';
import loadable from '@loadable/component';
const TrustBox = loadable(() => import('../components/Trustbox'));

const IndexPage = () => (
  <section style={{ margin: '50px' }}>
    <h1 style={{ marginBottom: '20px' }}>
      Testing third party script's perfomance
    </h1>
    <p>The chat widget is in the bottom left corner</p>
    <p>This is Nimbata dynamic tracking number:</p>
    <button>0161 794 0088</button>
    <p style={{ marginTop: `20px` }}>This is Trustbox:</p>
    <TrustBox />
  </section>
);

export default IndexPage;
