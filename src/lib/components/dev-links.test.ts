import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import DevLinks from "./dev-links.svelte";

import pageData from '../../data.json';
const { profSocials, bio } = pageData;

const DevLinksTestProps = { socialsOnly: false } 
const DevLinksTestId = 'scmp-dev-links'

describe('Dev Links Component', () => {
    it('Renders', () => {
        render(DevLinks, { props: DevLinksTestProps });

        if(!bio.hideResume) {
            expect(screen.getByText('Download Résumé')).toBeInTheDocument()
        }
        profSocials.forEach((social) => {
            const link = screen.getByText(social.alt).closest('a')
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', social.link)
        })        
    })
})