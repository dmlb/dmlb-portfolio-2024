import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/svelte";
import Footer from "./footer.svelte";

const FooterTestId = 'scmp-footer'

describe('Footer Component', () => {
    it('Renders', () => {
        render(Footer);
        const webringNav = screen.getByRole('navigation', {name: 'a11y-webring.club'})
        const webringLinks = within(webringNav).getAllByRole('link')
        expect(webringNav).toBeInTheDocument()
        expect(webringLinks.length).toEqual(4)

        const additionalNav = screen.getByRole('navigation', {name: 'additional information'})
        const additionalLinks = within(additionalNav).getAllByRole('link')
        expect(additionalNav).toBeInTheDocument()
        expect(additionalLinks.length).toEqual(3)
    
        const returnToTop = screen.getByRole('link', {name: 'Back to Start'})
        expect(returnToTop).toBeInTheDocument()
        expect(returnToTop).toHaveAttribute('href', '#top_site')
    })
})