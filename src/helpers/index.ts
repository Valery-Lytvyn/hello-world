import { WIKI_BASE_URL } from "../constants/index";

export const numberWithSeparator = (x: number) => {
  return x.toLocaleString();
};

export const createWikiLink = (name: string) => {
  return `${WIKI_BASE_URL}${name.split(" ").join("_")}`;
};
