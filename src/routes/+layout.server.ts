export const prerender = true;
export const trailingSlash = 'always';

import data from '../data.json'
import type { IPortolioData } from '../models';

const portfolio: IPortolioData = data;

export const load = (() => {
  return {
    portfolio
  };
})