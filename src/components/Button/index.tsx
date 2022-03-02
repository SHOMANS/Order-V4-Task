import { FC, ReactNode } from 'react';
import { IStyledProps, StyledButton } from './style';

interface IProps extends IStyledProps {
  children: ReactNode;
}
const Button: FC<IProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
