import { FC, ReactNode } from 'react';
import { Wrapper } from './style';

interface IProps {
  children?: ReactNode;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: boolean;
  justifyContent?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
}

const Container: FC<IProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Container;
