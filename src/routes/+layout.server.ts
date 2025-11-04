export const prerender = true;
export const trailingSlash = 'always';

import type { IPortolioData } from '$lib/models';
import data from '../data.json'

// load portfoli json to page data store
const portfolio: IPortolioData = data;

const techWorkSkills = new Set(portfolio.techWork.flatMap((workItem) => workItem.techStack))
const samplesSkills = new Set(portfolio.codeSamples.flatMap((sampleItem) => sampleItem.techStack))
const updatedSkillsIcons = Array.from(new Set([...techWorkSkills, ...samplesSkills, ...portfolio.skillIcons]))
portfolio.skillIcons = updatedSkillsIcons;

export const load = (() => {
  return {
    portfolio,
  };
})