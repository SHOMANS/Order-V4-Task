import styled from 'styled-components';

export interface IStyledProps {
  width?: string;
  isActive?: boolean;
  bgColor?: string;
  color?: string;
  height?: string;
  noBorder?: boolean;
}

export const StyledButton = styled.button<IStyledProps>`
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.isActive ? props.theme.background.button : props.theme.background.paper)};
  color: ${(props) => props.color || props.theme.textColors.primary};
  border: ${(props) => (props.noBorder ? 'transparent' : '1px solid ' + props.theme.background.button)};
  border-radius: 8px;
  height: ${(props) => props.height || '35px'};
  cursor: pointer;
`;
