import { v1 as uuidv1 } from 'uuid';

interface IData {
  time: number;
  number: number;
  auther: string;
  items: { name: string; qty: number }[];
  price: number;
  id: string;
  phone: string;
}

export const data: IData[] = [
  {
    time: 5,
    number: 326,
    auther: 'Leandro M.',
    items: [
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
    ],
    price: 41.0,
    id: uuidv1(),
    phone: '+358414361234',
  },
  {
    time: 10,
    number: 326,
    auther: 'Leandro M.',
    items: [
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
    ],
    price: 41.0,
    id: uuidv1(),
    phone: '+358414361234',
  },
  {
    time: 7,
    number: 326,
    auther: 'Leandro M.',
    items: [
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
    ],
    price: 41.0,
    id: uuidv1(),
    phone: '+358414361234',
  },
  {
    time: 8,
    number: 326,
    auther: 'Leandro M.',
    items: [
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
    ],
    price: 41.0,
    id: uuidv1(),
    phone: '+358414361234',
  },
  {
    time: 5,
    number: 326,
    auther: 'Leandro M.',
    items: [
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
      { name: 'Americana', qty: 1 },
    ],
    price: 41.0,
    id: uuidv1(),
    phone: '+358414361234',
  },
];

export const dataColumns = {
  [uuidv1()]: {
    name: 'Incoming 2',
    items: data,
  },
  [uuidv1()]: {
    name: 'Outgoing 1',
    items: [],
  },
  [uuidv1()]: {
    name: 'Ready',
    items: [],
  },
};
