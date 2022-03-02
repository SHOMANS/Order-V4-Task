import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
`;
export const Grid = styled(Flex)`
  display: grid;
`;

export const GridCol = styled(FlexCol)`
  display: grid;
`;
