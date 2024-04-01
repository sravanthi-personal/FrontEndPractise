import { render,screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe('Greet',() => {

    test('render correctly', () => {

        render(<Greet />);
        // const textElement = screen.getByText('Hello');
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    
    });
    
    // test('render with name',() => {
    //     render(<Greet name='sravanthi'/>);
    //     const textElement = screen.getByText(/hello sravanthi/i);
    //     expect(textElement).toBeInTheDocument();
    // });
})
