import { StyledText } from './style';
import { ElementType, FC, HTMLProps, ReactNode } from 'react';

interface IProps extends HTMLProps<HTMLParagraphElement | HTMLHeadingElement> {
  children: ReactNode;
  component?: ElementType;
  variant?: string;
  gutterBottom?: boolean;
  align?: string;
  color?: string;
  fontSize?: string;
  weight?: string | number;
}
const Typography: FC<IProps> = ({ component, children, color, fontSize, weight, variant, ...rest }) => {
  return (
    <StyledText color={color} fontSize={fontSize} fontWeight={weight} element={variant} as={component} {...rest}>
      {children}
    </StyledText>
  );
};

export default Typography;
