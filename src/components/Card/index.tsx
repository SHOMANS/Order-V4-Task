import { FC, HTMLProps, useEffect, useState } from 'react';
import CloseCard from './Cards/CloseCard';
import OpenCard from './Cards/OpenCard';
import ReadyCard from './Cards/ReadyCard';

export interface IProps extends HTMLProps<HTMLDivElement> {
  number: number;
  auther: string;
  phone: string;
  items: { name: string; qty: number }[];
  price: number;
  time: number;
  isReady?: boolean;
}

const Card: FC<IProps> = ({ isReady, time, ...rest }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Used To Open & Close Card

  // Change State that open and close the card
  const toggleCardOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [counterSeconds, setCounterSeconds] = useState(5);

  useEffect(() => {
    setCounterSeconds(time * 60 + 0);

    const interval = setInterval(() => {
      setCounterSeconds((prevState) => (prevState > 0 ? prevState - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isReady ? (
        <ReadyCard counterSeconds={counterSeconds} {...rest} />
      ) : (
        <>
          {isOpen ? (
            <OpenCard counterSeconds={counterSeconds} toggleCardOpen={toggleCardOpen} isOpen={isOpen} {...rest} />
          ) : (
            <CloseCard counterSeconds={counterSeconds} toggleCardOpen={toggleCardOpen} isOpen={isOpen} {...rest} />
          )}
        </>
      )}
    </>
  );
};

export default Card;
