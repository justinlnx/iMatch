export enum COMPANY {
  AMAZON = 'Amazon',
  APPLE = 'Apple',
  MICROSOFT = 'Microsoft',
};

export enum DEGREE {
  BACHELOR = 0,
  MASTER = 1,
  PHD = 2,
}

export const DEGREE_MAP = {
  [DEGREE.BACHELOR]: 'Bachelor',
  [DEGREE.MASTER]: 'Master',
  [DEGREE.PHD]: 'Ph.D.',
}

export enum LOCATION {
  VANCOUVER = 'Vancouver',
};

export enum ROLE {
  DEVELOPER = 'Developer/Engineer',
  QA = 'QA',
  MANAGER = 'Manager',
};
