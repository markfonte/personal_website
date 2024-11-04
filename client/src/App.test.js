// src/App.test.js

import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { setCookie, getCookie } from './shared/util/Cookies.js';

jest.mock('./shared/util/Cookies.js', () => ({
    getCookie: jest.fn(),
    setCookie: jest.fn(),
}));

describe('App Component', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it('renders the home page and theme toggle button', async () => {
        await act(async () => {
            render(<App />); // Render App within act
        });

        const homeTitle = await waitFor(() =>
            screen.getByText(/Mark Fonte/i)
        );
        expect(homeTitle).toBeInTheDocument();

        const toggleButton = await waitFor(() =>
            screen.getByRole('button', { name: /enter dark mode/i })
        );
        expect(toggleButton).toBeInTheDocument();
    });

    it('toggles theme on button click', async () => {
        getCookie.mockImplementation((name) => {
            if (name === 'app_theme') return 'light_theme'; // Mocking initial theme
            return null;
        });

        await act(async () => {
            render(<App />); // Render App within act
        });

        const toggleButton = await waitFor(() =>
            screen.getByRole('button', { name: /enter dark mode/i })
        );

        await act(async () => {
            fireEvent.click(toggleButton);
        });

        // Verify the toggle button updates to light mode after click
        await waitFor(() => {
            expect(toggleButton).toHaveAccessibleName(/enter light mode/i);
        });
    });

    it('initializes with the correct theme from cookies', async () => {
        // Simulate the cookies
        getCookie.mockImplementation((name) => {
            switch (name) {
                case 'app_theme':
                    return 'dark_theme'; // Simulating existing cookie value
                case 'rainbow':
                    return 'false'; // Ensure rainbow is not active
                default:
                    return null;
            }
        });

        await act(async () => {
            render(<App />); // Render App within act
        });

        // Ensure that setCookie is called for setting the rainbow if applicable
        expect(setCookie).not.toHaveBeenCalled(); // Verify that we did not set a new cookie since it already is dark_theme

        // Use a specific query to find the theme toggle button
        const toggleButton = await waitFor(() =>
            screen.getByRole('button', { name: /enter light mode/i }) // Assuming the button is labeled this way
        );
        expect(toggleButton).toBeInTheDocument(); // Ensure it exists
        expect(toggleButton).toHaveAttribute('aria-label', 'enter Light Mode'); // Assuming the button changes based on the theme
    });

    it('handles logo spinning on click', async () => {
        await act(async () => {
            render(<App />); // Render App within act
        });

        const profilePicture = await waitFor(() =>
            screen.getByAltText('headshot')
        );
        fireEvent.click(profilePicture);

        expect(screen.getByAltText('headshot')).toHaveStyle('animation: react-logo-spin infinite 1s ease-in-out;');
    });

    it('sets the currently selected tab on tab change', async () => {
        getCookie.mockImplementation((name) => {
            if (name === 'app_theme') return 'light_theme'; // Start with light theme
            if (name === 'rainbow') return 'false'; // Mock rainbow cookie
            return null;
        });

        await act(async () => {
            render(<App />); // Render App within act
        });

        // Initially select the first tab
        expect(await screen.findByRole('tab', { selected: true })).toHaveTextContent('Home');

        // Click the second tab
        const tabToClick = await waitFor(() =>
            screen.getAllByRole('tab')[1] // Get the second tab (index 1)
        );
        fireEvent.click(tabToClick); // Simulate clicking on the second tab

        // Now, check that the currently selected tab is the second tab
        expect(await screen.findByRole('tab', { selected: true })).toHaveTextContent('Work');
    });

    // // Test for rainbow state initialization and cookie setting
    // it('initializes the rainbow state from cookies and sets the cookie on button click', async () => {
    //     // Mocking cookie return values
    //     getCookie.mockImplementation((name) => {
    //         if (name === 'rainbow') return 'true'; // Simulating the rainbow cookie as true
    //         return null;
    //     });

    //     await act(async () => {
    //         render(<App />); // Render the app
    //     });

    //     // Check that the rainbow state is set to true (assuming some visual or text indicator exists)
    //     const rainbowButton = screen.getByRole('button', { name: /toggle rainbow/i }); // Adjust the button name as necessary
    //     expect(rainbowButton).toHaveAttribute('aria-pressed', 'true'); // Assuming the button indicates the rainbow state

    //     // Click the rainbow button to toggle it
    //     await act(async () => {
    //         fireEvent.click(rainbowButton);
    //     });

    //     // Check that the cookie has been set correctly after the toggle
    //     expect(setCookie).toHaveBeenCalledWith('rainbow', 'false'); // Assuming it sets to false when toggled off
    // });


    it('toggles theme and handles rainbow state', async () => {
        // Mocking the cookie to indicate rainbow state is true and starting with light theme
        getCookie.mockImplementation((name) => {
            if (name === 'rainbow') return 'true'; // Simulate that rainbow state is enabled
            if (name === 'app_theme') return 'light_theme'; // Initial light theme
        });

        await act(async () => {
            render(<App />);
        });

        // Verify initial state
        expect(screen.queryByText('Mark Fonte')).toBeInTheDocument(); // Verify main title
        expect(screen.getByRole('button', { name: /enter dark mode/i })).toBeInTheDocument(); // Check theme toggle button

        // Now toggle the theme
        const themeToggleButton = screen.getByRole('button', {
            name: /enter dark mode/i,
        });

        await act(async () => {
            fireEvent.click(themeToggleButton);
        });

        // After clicking, expect the theme to change and check setCookie
        expect(setCookie).toHaveBeenCalledWith('app_theme', 'dark_theme', 1000); // Check if dark theme cookie was set
        expect(setCookie).toHaveBeenCalledTimes(1); // Ensure setCookie is called exactly once

        // Now toggle back to light theme
        await act(async () => {
            fireEvent.click(themeToggleButton);
        });

        // After toggling back, check if light theme cookie was set
        expect(setCookie).toHaveBeenCalledWith('app_theme', 'light_theme', 1000); // Check if light theme cookie was set again
        expect(setCookie).toHaveBeenCalledTimes(2); // Ensure setCookie is called exactly twice (once for each toggle)
    });
});
