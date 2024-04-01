import { render,screen } from "@testing-library/react";
import { Greet } from "../greet/Greet";

describe('Greet',() => {

    it('render correctly', () => {

        render(<Greet />);
        // const textElement = screen.getByText('Hello');
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    
    });
    
    // it('render with name',() => {
    //     render(<Greet name='sravanthi'/>);
    //     const textElement = screen.getByText(/hello sravanthi/i);
    //     expect(textElement).toBeInTheDocument();
    // });
})
