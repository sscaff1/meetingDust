import React from 'react';
import {Header} from './layoutComponents/header.jsx';
import {Footer} from './layoutComponents/footer.jsx';

export const Layout = ({content}) => (
  <div>
    <Header />
    <div className="container">
      {content}
    </div>
    <Footer />
  </div>
);
