import styled from 'styled-components';

import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

// Router.onRouteChangeStart = () => {
//   NProgress.start();
// };
// Router.onRouteChangeComplete = () => {
//   NProgress.done();
// };
// Router.onRouteChangeError = () => {
//   NProgress.done();
// };

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => <StyledHeader />;

export default Header;
