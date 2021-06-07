
interface Keyword {
  text: string,
  keyword: string,
}

export interface Degree extends Keyword {};

export interface Level extends Keyword {};

export type Language = {
  name: string,
};

export type Development = {
  name: string,
  skills: string[],
};
