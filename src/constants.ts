import {
  Degree,
  Level,
  Language,
} from './types';

export enum COMPANY {
  AMAZON = 'Amazon',
  APPLE = 'Apple',
  MICROSOFT = 'Microsoft',
};

export const DEGREES: Degree[] = [
  {
    keyword: 'Bachelor',
    text: 'Bachelor',
  },
  {
    keyword: 'Master',
    text: 'Master',
  },
  {
    keyword: 'Ph.D.',
    text: 'Ph.D.',
  },
];

export const LEVELS: Level[] = [
  {
    keyword: 'New Grad',
    text: 'New Grad (< 1 year)',
  },
  {
    keyword: 'Junior',
    text: 'Junior (1 - 3 years)',
  },
  {
    keyword: 'Intermediate',
    text: 'Intermediate (3 - 5 years)',
  },
  {
    keyword: 'Senior',
    text: 'Senior (5+ years)',
  }
];

export enum LOCATION {
  VANCOUVER = 'Vancouver',
};

export const PROGRAMMING_LANGUAGES: Language[] = [
  { name: 'C' },
  { name: 'C++' },
  { name: 'C#' },
  { name: 'Golang' },
  { name: 'Java' },
  { name: 'JavaScript' },
  { name: 'Object-C' },
  { name: 'PHP' },
  { name: 'Python' },
  { name: 'R' },
  { name: 'Ruby' },
  { name: 'Swift' },
  { name: 'TypeScript' },
];

export enum ROLE {
  DEVELOPER = 'Developer/Engineer',
  QA = 'QA',
  MANAGER = 'Manager',
};
