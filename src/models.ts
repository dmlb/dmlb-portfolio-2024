export interface IPortolioData {
    bio: IBio;
    discord: IDiscord;
    photography: IPhotography;
    profSocials: IProfessionalSocial[];
    skillIcons: string[];
    codeSamples: ICodeSample[];
    techWork: ITechWork[];
    otherWork: IOtherWork[];
    filmCredits: IFilmCredit[];
    education: IEducation[];
    profDevelopment: IrofessionalDevelopment[];
    endorsements: IEndorsement[];
}

export interface IEndorsement {
    quote: string;
    person: string;
    position: string;
    company: string;
}

export interface IrofessionalDevelopment {
    year: string;
    course: string;
    techStack: string[];
}

export interface IEducation {
    year: string;
    program: string;
    institution: string;
    degree: string;
    honours: boolean;
    major: boolean | string;
}

export interface IFilmCredit {
    year: string;
    role: string;
    title: string;
    duration: string;
    format: boolean | string;
    genre: string;
    director: string;
    tagline: boolean | string;
    synopsis: boolean | string;
    url: boolean | string;
    trailer: boolean | string;
    festival: boolean | string;
}

export interface IOtherWork {
    position: string;
    startYear: string;
    endYear: string;
    company: string;
    url: string;
}

export interface ITechWork {
    position: string;
    startYear: string;
    endYear: string;
    company: string;
    url: string;
    methodology: string;
    location: string;
    techStack: string[];
}

export interface ICodeSample {
    title: string;
    link: string;
    type: string;
    techStack: string[];
}

export interface IProfessionalSocial {
    site: string;
    link: string;
}

export interface IPhotography {
    title: string;
    plug: string;
    links: IPhotographyLinks;
}

interface IPhotographyLinks {
    store: string;
    book: string;
    instagram: string;
}

interface IDiscord {
    name: string;
    plug: string;
    alt: string;
    link: string;
}

export interface IBio {
    name: string;
    nickname: string;
    pronouns: string;
    title: string;
    location: string;
    landAcknowledgement: ILandAcknowledgement;
    hideResume: boolean;
    resumePdfUrl: string;
    startYear: number;
    professionalStartYear: number;
    charlimit: string;
    oneliner: string;
    emojiliner: string;
    workbio: string;
    values: string[];
}

interface ILandAcknowledgement {
    location: string;
    people: string;
}