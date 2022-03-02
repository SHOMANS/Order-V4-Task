import styled from 'styled-components';

interface IProps {
  fontSize: string;
  fontWeight: string;
  color: string;
  element: string;
  gutterBottom: boolean;
}

export const StyledText = styled.h2<IProps>`
  font-size: ${(props) => props.fontSize || props.theme.typography[props.element] || props.theme.typography.h2};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color || props.theme.textColors.primary};
  margin-bottom: ${(props) => (props.gutterBottom ? '8px' : '0')};
`;
