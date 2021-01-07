import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/alyssaxuu/flowy/" target="_blank">GitHub</a>
      <span>·</span>
      <a href="https://twitter.com/alyssaxuu/status/1199724989353730048" target="_blank">Twitter</a>
      <span>·</span>
      <a href="https://alyssax.com" target="_blank"><p>Made with</p><img src="assets/heart.svg" alt={'heart'}/><p>by</p> Alyssa X</a>
    </div>
  )
};

export default Footer;
