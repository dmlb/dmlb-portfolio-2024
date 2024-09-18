import { describe, it, expect } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/svelte";
import userEvent from '@testing-library/user-event'
import Accordion from "./accordion.svelte";
import AccordionTest from "./accordion.test.svelte";

const AccordionTestProps = { title: 'Test Accordion', isOpen: false } 
const AccordionTestId = 'scmp-accordion'

describe('Accordion Component', () => {
    it('Renders', () => {
        render(Accordion, { props: AccordionTestProps });
        const summaryEl = screen.getByText(AccordionTestProps.title)
        expect(summaryEl).toBeInTheDocument()
    })

    it('Slotted content renders', async () => {
        const user = userEvent.setup()
        render(AccordionTest)
        const detailsEl = screen.getByTestId<HTMLDetailsElement>(AccordionTestId)
        const summaryEl = screen.getByText(`${AccordionTestProps.title} Slot`)
        await user.click(summaryEl)

        const child = within(detailsEl).getByTestId('child')

        expect(child).toBeInTheDocument()
    })

    it('Toggles open and closed', async () => {
        const user = userEvent.setup()
        render(Accordion, { props: AccordionTestProps });
        const summaryEl = screen.getByText(AccordionTestProps.title)
        const detailsEl = screen.getByTestId<HTMLDetailsElement>(AccordionTestId)
        // starting closed from the props
        expect(detailsEl.open).toBeFalsy()
        // toggle open
        await user.click(summaryEl)
        await waitFor(() => expect(detailsEl.open).toBeTruthy())
        // toggle closed
        await user.click(summaryEl)
        await waitFor(() => expect(detailsEl.open).toBeFalsy())
    })
})