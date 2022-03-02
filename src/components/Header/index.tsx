import { FC } from 'react';
import Container from '../Container';
import Bell from '../Icons/Bell';
import ThemeToggle from '../Icons/ThemeToggle';
import Typography from '../Typography';
import { StyledHeader, StyledNavBar, StyledNavLink, StyledRightArticle, StyledUpperSection } from './style';

const Header: FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <StyledUpperSection>
        <Container>
          <Typography component={'p'} variant={'body2'} weight={100}>
            Jul 31, 2021
          </Typography>
          <Typography color='#D7203C'>Task Task</Typography>
          <StyledRightArticle isActive>
            <button onClick={toggleTheme}>
              <ThemeToggle />
            </button>
            <button>
              <Bell />
            </button>
            <div>M</div>
          </StyledRightArticle>
        </Container>
      </StyledUpperSection>
      <StyledNavBar>
        <Container>
          <ul>
            <StyledNavLink>Business insights</StyledNavLink>
            <StyledNavLink>User</StyledNavLink>
            <StyledNavLink>Accounts</StyledNavLink>
            <StyledNavLink isActive>Orders</StyledNavLink>
            <StyledNavLink>Menu editor</StyledNavLink>
            <StyledNavLink>Reports</StyledNavLink>
            <StyledNavLink>Setting</StyledNavLink>
          </ul>
        </Container>
      </StyledNavBar>
    </StyledHeader>
  );
};

export default Header;
