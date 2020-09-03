import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      <Image />
      소개 페이지
    </p>
  </Layout>
);

export default IndexPage;
