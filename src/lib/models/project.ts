/** filters for project page */
export type ProjectType = 'web application' | 'website' | 'design system' | 'code snippet'

export interface IProject {
    title: string;
    link: string;
    type: string;
    techStack: string[];
}