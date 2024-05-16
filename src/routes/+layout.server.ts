export const prerender = true;
export const trailingSlash = 'always';

import type { IPortolioData } from '$lib/models';
import data from '../data.json'

// load portfoli json to page data store
const portfolio: IPortolioData = data;

export const load = (() => {
  return {
    portfolio
  };
})