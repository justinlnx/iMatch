interface Keyword {
  text: string,
  keyword: string,
}

export enum COMPANY {
  AMAZON = 'Amazon',
  APPLE = 'Apple',
  MICROSOFT = 'Microsoft',
};

// export enum DEGREE {
//   BACHELOR = 0,
//   MASTER = 1,
//   PHD = 2,
// }

// export const DEGREE_MAP = {
//   [DEGREE.BACHELOR]: 'Bachelor',
//   [DEGREE.MASTER]: 'Master',
//   [DEGREE.PHD]: 'Ph.D.',
// }

export interface Degree extends Keyword {};

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

export interface Level extends Keyword {};

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

export enum ROLE {
  DEVELOPER = 'Developer/Engineer',
  QA = 'QA',
  MANAGER = 'Manager',
};
