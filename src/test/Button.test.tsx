import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from '../components/Button';

// Example test cases
describe("Button Component", () => {
    it("renders the button with the correct label", () => {
        render(<Button label="Click me" />);
        expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("triggers onClick when clicked", () => {
        const handleClick = jest.fn();
        render(<Button label="Click me" onClick={handleClick} />);
        fireEvent.click(screen.getByText("Click me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
