import styled from 'styled-components';

export const StyledHeader = styled.article`
  border-bottom: 1px solid #e4e4e4;
`;
export const StyledUpperSection = styled.article`
  border-bottom: 1px solid #e4e4e4;
  height: 55.5px;
  display: flex;
  align-items: center;
`;
export const StyledRightArticle = styled.article<{ isActive?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  & > * {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      border: 2px solid #ffffff;
      background-color: #23c70a;
      background-color: ${(props) => (props.isActive ? '#23c70a' : '#888')};
      border-radius: 50%;
      position: absolute;
      right: -2px;
      bottom: -2px;
    }
  }

  & button {
    background-color: #6f707011;
  }
  & div {
    background-color: #d6e4ff;
    color: #3377ff;
  }
`;
export const StyledNavBar = styled.nav`
  height: 49px;
  & > div {
    height: 100%;
  }
  & ul {
    height: 100%;
    align-items: center;
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export const StyledNavLink = styled.li<{ isActive?: boolean }>`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActive ? '#15BBF9' : props.theme.textColors.primary)};
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 160%;
    height: 2px;
    position: absolute;
    bottom: 0;
    right: -30%;
    border-radius: 5px 5px 0 0;
    background-color: ${(props) => (props.isActive ? '#15BBF9' : 'transparent')};
  }
`;
