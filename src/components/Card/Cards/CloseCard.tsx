import { FC } from 'react';
import { FlexCol } from '../../../utils/globals.style';
import ZoomInMap from '../../Icons/ZoomInMap';
import ZoomOutMap from '../../Icons/ZoomOutMap';
import Typography from '../../Typography';
import { StyledCard, StyledZoomButton } from '../style';
import Counter from '../../Counter';
import { useTheme } from 'styled-components';
import { IProps } from './OpenCard';

const CloseCard: FC<IProps> = ({ counterSeconds, number, auther, phone, items, toggleCardOpen, isOpen }) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <div style={{ width: '62px' }}>
        <Counter counterSeconds={counterSeconds} />
      </div>
      <div style={{ textAlign: 'start' }}>
        <Typography variant='h5' weight={100} gutterBottom>
          UBER EATS
        </Typography>
        <Typography variant='h3' weight={200}>
          #{number} {auther}
        </Typography>
        <Typography variant='body' weight={'100'} color={theme.textColors.disabled}>
          {phone}
        </Typography>
      </div>
      <FlexCol style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
        <StyledZoomButton onClick={toggleCardOpen}>{isOpen ? <ZoomInMap /> : <ZoomOutMap />}</StyledZoomButton>
        <Typography variant='body' weight={'200'} color={theme.textColors.secondary}>
          {items.length} Items
        </Typography>
      </FlexCol>
    </StyledCard>
  );
};

export default CloseCard;
