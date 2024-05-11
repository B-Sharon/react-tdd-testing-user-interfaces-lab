import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Test 1
test("displays a top-level heading with the text `Hi, I'm `", () => {
    render(<App />);

    const toplevelheading = screen.getByRole( 'heading',{
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    expect(toplevelheading).toBeInTheDocument();
});

// Test 2
test("displays an image of yourself", () => {
    render(<App />);
  
    const image = screen.getByAltText("My profile pic");
  
    expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
  });
  

// Test 3
test("displays a second-level heading", () =>{
    render(<App />);

    const secondlevelheading = screen.getByRole('heading',{
        name: /about me/i,
        level: 2,
    });
});

//Test 4
test("displays a paragraph for your biography", ()=>{
    render(<App />);

    const bio = screen.getByText(/lorem ipsum/i);

    expect(bio).toBeInTheDocument();
});

//Test 5
test ("displays links", () =>{
    render (<App />);

    const githubLink = screen.getByRole("link", {
        name: /github/i,
    });

    const linkedinLink = screen.getByRole("link",{
        name: /linkedin/i,
    });

    expect(githubLink).toHaveAttribute("href", expect.stringContaining('https://github.com'));

    expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("https://linkedin.com"))

})