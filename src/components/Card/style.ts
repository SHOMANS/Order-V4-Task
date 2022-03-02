import styled from 'styled-components';
import { FlexCol } from '../../utils/globals.style';

export const StyledCard = styled.article<{ column?: boolean }>`
  background-color: ${(props) => props.theme.background.paper};
  box-shadow: 0px 0px 12px #0000000d;
  border-radius: 12px;
  display: grid;
  grid-template-columns: ${(props) => (props.column ? '' : '1fr 3fr 1fr')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-between;
  padding: 16px 16px 8px;
  gap: 8px;
  & span {
    width: 100%;
    text-align: start;
  }
`;
export const StyledReadyCard = styled('article')`
  background-color: ${(props) => props.theme.background.paper};
  box-shadow: 0px 0px 12px #0000000d;
  border-radius: 12px;
  display: grid;
  padding: 8px 0;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  & div {
    padding: 16px 0;
  }
`;

export const StyledCardHeader = styled.article`
  display: grid;
  justify-content: space-between;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  & p {
    text-align: start;
  }
  & div {
    display: flex;
    justify-content: center;
    & > * {
      width: 74px;
    }
  }
  & article {
    display: flex;
    justify-content: flex-end;
  }
`;
export const StyledMessage = styled.article`
  text-align: start;
  background-color: ${(props) => props.theme.colors.warning};
  border-radius: 8px;
  padding: 16px;
  color: ${(props) => props.theme.textColors.warning};
  position: relative;
  margin-bottom: 8px;
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    top: -14px;
    right: calc(50% - 4px);
    border: 7px solid transparent;
    border-bottom: 7px solid ${(props) => props.theme.colors.warning};
  }
`;
export const StyledItemsCollection = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & div {
    text-align: start;
    & span {
      margin-right: 32px;
    }
  }
`;
export const StyledZoomButton = styled.button`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: #d3f2fe;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;
export const StyledHr = styled.button`
  border: 1px solid #f6f6f6;
`;
