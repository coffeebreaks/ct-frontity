import { createGlobalStyle } from 'styled-components';

import RobotoMedium from './Roboto-Medium.ttf';


export default createGlobalStyle`
    @font-face {
    
            font-family: 'RobotoMedium';
            src: url(${RobotoMedium}) format('truetype');
            font-weight: 300;
            font-style: normal;
            font-display: auto;
          
    }
    h1 {
        font-family: 'RobotoMedium';
        letter-spacing: 5px;
        font-size: 4rem;
      }
`;