import styled from 'styled-components';
import { Flex, FlexCol, Grid } from '../../utils/globals.style';

export const StyledUpperSection = styled(Flex)`
  width: 100%;
  gap: 4px;
  padding: 6px 0;
`;
export const StyledBars = styled(Grid)`
  width: 100%;
  grid-template-columns: 375px 375px 106px;
  gap: 1px 6px;

  & > section {
    text-align: center;
    background-color: ${(props) => props.theme.background.default};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
    gap: 8px;
  }

  & > section:nth-child(3) {
    padding: 10px 8px;
  }
`;
export const CardsSection = styled(FlexCol)`
  gap: 8px;
`;
export const CardDropPlace = styled('div')<{ isThisDraggingOver?: string }>`
  box-shadow: 0px 0px 12px #0000000d;
  border-radius: 12px;
  background-color: ${(props) => (props.isThisDraggingOver ? 'lightblue' : 'transparent')};
`;
