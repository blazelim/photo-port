import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from  '..';


afterEach(cleanup);

describe('About component', () => {
    // renders About test
    // First Test
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        //Render About
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
});