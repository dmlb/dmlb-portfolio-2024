import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Blockquote from "./blockquote.svelte";

const BlockquoteTestProps = { 
    quote: 'Test Blockquote', 
    person: 'Test person', 
    position: 'Test position', 
    company: 'Test company' 
}

describe('Blockquote Component', () => {
    it('Renders', () => {
        render(Blockquote, { props: BlockquoteTestProps });
        expect(screen.getByText(BlockquoteTestProps.quote)).toBeInTheDocument()
        expect(screen.getByText(BlockquoteTestProps.person)).toBeInTheDocument()
        expect(screen.getByText(BlockquoteTestProps.position)).toBeInTheDocument()
        expect(screen.getByText(BlockquoteTestProps.company)).toBeInTheDocument()
    })
})