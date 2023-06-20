import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render,screen, fireEvent, cleanup} from '@testing-library/react';

import Fruit from '../components/Fruit';
import App from '../App';

afterEach(cleanup);

describe('Fruit component', () => {
    test('Fruit component is defined in `src/components/Fruit.js`', () => {
        expect(Fruit).toBeDefined();
    });

    test('Fruit component is used 4 times in `App.js`', () => {
        const { getAllByTestId } = render(<App />);
        const fruitComponents = getAllByTestId('fruit');
        expect(fruitComponents.length).toBe(4);
    });
});

describe('Change color', () => {
    test('Fruit component has "change color button"', () => {
        render(<Fruit/>);
        const button = screen.getByText(/change/i);
        expect(button).toBeInTheDocument();
    });
    test('Fruit name changes color when "change color" button is clicked', () => {
        render(<Fruit/>);
        // get all styles of all elements of Fruit component
        const textColors = [...document.body.querySelectorAll('*')].map(element => element.style.color);
        // click on button
        const button = screen.getByText(/change/i);
        fireEvent.click(button);
        const textColorsAfterClick = [...document.body.querySelectorAll('*')].map(element => element.style.color);
        // check if text color changed
        console.log(textColors, textColorsAfterClick);
        expect(textColors).not.toEqual(textColorsAfterClick);
    });
});

describe('Delete fruit', () => {
    test('Fruit component has "delete" button', () => {
        render(<Fruit/>);
        const button = screen.getByText(/delete/i);
        expect(button).toBeInTheDocument();
    });
    test('Fruit is deleted when "delete" button is clicked', async () => {
        const { getAllByText, asFragment } = render(<App />);
        const firstRender = asFragment()
        // get first button with text "delete"
        const button = getAllByText(/delete/i)[0];
        fireEvent.click(button);
        expect(asFragment()).not.toEqual(firstRender);
    });
})