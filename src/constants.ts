import {
  Degree,
  Level,
  Language,
  Development,
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

export const DEVELOPMENTS: Development[] = [
  {
    name: 'Web Development',
    skills: ['Angular', 'ASP.NET', 'Django', 'Ember', 'Express', 'HTML/CSS', 'jQuery', 'Node.js', 'PHP', 'Rails', 'React', 'Redux', 'Vue', 'Webpack', 'Grunt'],
  },
  {
    name: 'Mobile Development',
    skills: ['Android', 'iOS', 'Ionic', 'Kotlin', 'React Native', 'Swift', 'Xcode'],
  },
  {
    name: 'Data Science',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Tensorflow', 'Scikit-learn', 'Pytorch', 'MATLAB'],
  },
  {
    name: 'Database Development',
    skills: ['Heroku', 'MangoDB', 'MySQL', 'Postgres', 'SQL', 'Oracle', 'Firebase', 'Cosmos'],
  },
  {
    name: 'Cloud Development',
    skills: ['AWS', 'Azure'],
  },
  {
    name: 'DevOps Development',
    skills: ['PowerShell', 'Bash', 'Selenium WebDriver', 'Jest', 'Jasmine', 'Cypress', 'Puppeteer', 'Perf test', 'integration test'],
  },
  {
    name: 'Networking',
    skills: ['HTTPS', 'TCP/IP'],
  },
  {
    name: 'Operating System',
    skills: ['Linux/Unix', 'Windows', 'macOS'],
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
