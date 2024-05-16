import type { IProject, ProjectType } from "$lib/models"
import { writable } from "svelte/store"

/**
 * original data, filtered data, search term, selected filter
 */
export interface IProjectFilterStore {
    data: IProject[];
    filtered: IProject[];
    search: string;
    typeFilter: ProjectType | ''
}

/**
 * setup writable store for project search and radio filter
 * @param {IProject[]} data 
 * @returns {subscribe, set, update } svelte writable store fns
 */
export const createProjectFilterStore = (data: IProject[]) => {
    const { subscribe, set, update } = writable<IProjectFilterStore>({
        data,
        filtered: data,
        search: '',
        typeFilter: ''
    })

    return {
        subscribe,
        set,
        update
    }
}

/**
 * filter the data based on search term or type radio option
 * @param {IProjectFilterStore} store 
 */
export const handleProjectFilter = (store: IProjectFilterStore) => {
    const searchTerm = store.search.toLowerCase() || '';
    const typeFilter = store.typeFilter || '';

    // check title and tech stack for search term
    // check type for type radio selection or match all for empty string
    store.filtered = store.data.filter((item) => {
        return (item.title.toLowerCase().includes(searchTerm) || item.techStack.join(' ').toLowerCase().includes(searchTerm)) && (item.type === typeFilter || typeFilter === '')
    })
}