import { FC } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useTheme } from 'styled-components';

const Counter: FC<{ counterSeconds: number }> = ({ counterSeconds }) => {
  const theme = useTheme();
  return (
    <CircularProgressbar
      value={(100 * (60 - (counterSeconds % 60))) / 60}
      text={counterSeconds > 0 ? Math.floor(counterSeconds / 60) + ':' + (counterSeconds % 60) : 'Done'}
      background={counterSeconds === 0}
      styles={
        counterSeconds === 0
          ? buildStyles({
              backgroundColor: '#29E881',
              textColor: '#fff',
              pathColor: '#29E881',
              trailColor: 'transparent',
              strokeLinecap: 'butt',
            })
          : buildStyles({
              textColor: theme.textColors.primary,
              pathColor: '#29E881',
              trailColor: '#E4E4E4',
              strokeLinecap: 'butt',
            })
      }
    />
  );
};

export default Counter;
