import React, { Suspense } from 'react';
import { render, screen, act } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom';

// Mock the lazy-loaded components
jest.mock('../shared/InteractionCard.jsx', () => {
  return jest.fn(() => <div>Mocked InteractionCard</div>);
});

jest.mock('./TicTacToeCard.jsx', () => {
  return jest.fn(() => <div>Mocked TicTacToeCard</div>);
});

jest.mock('./GimbleCard.jsx', () => {
  return jest.fn(() => <div>Mocked GimbleCard</div>);
});

jest.mock('./TechStackCard.jsx', () => {
  return jest.fn(() => <div>Mocked TechStackCard</div>);
});

jest.mock('./WelcomeCard.jsx', () => {
  return jest.fn(() => <div>Mocked WelcomeCard</div>);
});

jest.mock('./NewsCard.jsx', () => {
  return jest.fn(() => <div>Mocked NewsCard</div>);
});

jest.mock('./SammyCard.jsx', () => {
  return jest.fn(() => <div>Mocked SammyCard</div>);
});

describe('Home Component', () => {
  beforeEach(() => {
    // Clear the document head before each test
    document.head.innerHTML = '';
  });

  it('renders the Home component with correct text and links', async () => {
    const isDarkTheme = false;
    await act(async () => {
      render(<Home isDarkTheme={isDarkTheme} />);
    })

    // Check that the main title is rendered
    expect(screen.getByText(/senior software engineer at/i)).toBeInTheDocument();

    // Check that the links are rendered correctly
    expect(screen.getByText(/tesla/i).closest('a')).toHaveAttribute('href', 'https://www.tesla.com/');
    expect(screen.getByText(/justlight/i).closest('a')).toHaveAttribute('href', 'https://www.justlight.com/about');
    expect(screen.getByText(/amazon web services/i).closest('a')).toHaveAttribute('href', 'https://aws.amazon.com/');
    expect(screen.getByText(/university of michigan/i).closest('a')).toHaveAttribute('href', 'https://umich.edu/');
    expect(screen.getByText(/entrepreneurship/i).closest('a')).toHaveAttribute('href', 'https://innovateblue.umich.edu/academics/minor-in-entrepreneurship/');
  });

  it('sets the document title correctly', async () => {
    const isDarkTheme = false;
    await act(async () => {
      render(<Home isDarkTheme={isDarkTheme} />);
    })
    expect(document.title).toBe('Home | Mark Fonte');
  });

  it('renders lazy-loaded components', async () => {
    const isDarkTheme = false;

    // Wrap the render call in act
    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <Home isDarkTheme={isDarkTheme} />
        </Suspense>
      );
    });

    // Ensure that mocked components are rendered
    expect(await screen.findByText(/Mocked WelcomeCard/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked NewsCard/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked GimbleCard/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked SammyCard/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked TechStackCard/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked TicTacToeCard/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mocked InteractionCard/i)).toBeInTheDocument();
  });

  it('applies the correct color classes based on the theme', () => {
    const { rerender } = render(<Home isDarkTheme={false} />);

    // Check classes for light theme
    expect(screen.getByText(/tesla/i).closest('a')).toHaveClass('tesla-color-dark');

    // Switch to dark theme
    rerender(<Home isDarkTheme={true} />);

    // Check classes for dark theme
    expect(screen.getByText(/tesla/i).closest('a')).toHaveClass('tesla-color-light');
  });
});
