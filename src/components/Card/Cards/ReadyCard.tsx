import { FC } from 'react';
import { useTheme } from 'styled-components';
import Typography from '../../Typography';
import { StyledHr, StyledReadyCard } from '../style';
import { IProps } from './OpenCard';

const ReadyCard: FC<IProps> = ({ counterSeconds, number, auther }) => {
  const theme = useTheme();
  return (
    <StyledReadyCard>
      <Typography variant='h4' weight={600}>
        #{number}
      </Typography>
      <Typography variant='body' component={'p'} weight={100}>
        {auther}
      </Typography>
      <StyledHr />
      <div>
        <Typography variant='body2' component={'p'}>
          UBER EATS
        </Typography>
      </div>
      <StyledHr />
      <Typography variant='body2' component={'p'} color={theme.textColors.secondary}>
        Pickup in
      </Typography>
      <Typography variant='h4' weight={'regular'}>
        {counterSeconds > 0 ? Math.floor(counterSeconds / 60) + ' Min' : 'Done'}
      </Typography>
    </StyledReadyCard>
  );
};

export default ReadyCard;
