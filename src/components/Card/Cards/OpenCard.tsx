import { FC, HTMLProps } from 'react';
import Button from '../../Button';
import ZoomInMap from '../../Icons/ZoomInMap';
import ZoomOutMap from '../../Icons/ZoomOutMap';
import Typography from '../../Typography';
import { useTheme } from 'styled-components';
import { StyledCard, StyledCardHeader, StyledHr, StyledItemsCollection, StyledMessage, StyledZoomButton } from '../style';

import 'react-circular-progressbar/dist/styles.css';
import Counter from '../../Counter';

export interface IProps extends HTMLProps<HTMLDivElement> {
  number: number;
  auther: string;
  phone: string;
  items: { name: string; qty: number }[];
  toggleCardOpen?: () => void;
  isOpen?: boolean;
  price: number;
  counterSeconds: number;
}
const OpenCard: FC<IProps> = ({ counterSeconds, number, auther, phone, items, toggleCardOpen, isOpen, price }) => {
  const theme = useTheme();

  return (
    <StyledCard column>
      <StyledCardHeader>
        <p>
          Supplier: <br />
          UBER EATS
        </p>
        <div>
          <Counter counterSeconds={counterSeconds} />
        </div>
        <article>
          <StyledZoomButton onClick={toggleCardOpen}>{isOpen ? <ZoomInMap /> : <ZoomOutMap />}</StyledZoomButton>
        </article>
      </StyledCardHeader>
      <div>
        <Typography variant='h3' weight={200}>
          #{number} {auther}
        </Typography>
        <Typography variant='body' weight={'100'} color={theme.textColors.disabled}>
          {phone}
        </Typography>
      </div>
      <StyledMessage>
        <Typography color={theme.textColors.warning} variant='body'>
          No onion please, I’m very allergic. It would be best if no onions was handled.
        </Typography>
      </StyledMessage>
      <StyledItemsCollection>
        {items.map((item) => (
          <div>
            <span>{item.qty} ×</span> {item.name}
          </div>
        ))}
      </StyledItemsCollection>
      <StyledHr />

      <Typography component={'span'} variant='body' weight={'100'} color={theme.textColors.disabled}>
        {price.toFixed(2)} €
      </Typography>
      <Button color={'#fff'} bgColor='#15BBF9'>
        Ready to Deliver
      </Button>
      <Button noBorder>
        <Typography color='red' component={'p'} variant='body'>
          Cancel
        </Typography>
      </Button>
    </StyledCard>
  );
};

export default OpenCard;
