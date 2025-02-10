import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact.jsx';
import InteractionCard from '../shared/InteractionCard.jsx';

jest.mock('../shared/InteractionCard.jsx', () => {
  return jest.fn(() => <div>Mocked InteractionCard</div>);
});

// Mock window.open to prevent actual navigation during tests
global.open = jest.fn();

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders the contact page with correct text', () => {
    expect(screen.getByText(/let's get in touch/i)).toBeInTheDocument();
    expect(screen.getByText(/my inbox is always open/i)).toBeInTheDocument();
    expect(screen.getByText(/liking this page makes spike happy/i)).toBeInTheDocument();
  });

  it('sets the document title on mount', () => {
    expect(document.title).toBe('Contact | Mark Fonte');
  });

  it('opens email link when Email chip is clicked', () => {
    const emailChip = screen.getByText(/email/i);
    fireEvent.click(emailChip);
    expect(global.open).toHaveBeenCalledWith('mailto:mark@fonte.com');
  });

  it('opens Venmo link when Venmo chip is clicked', () => {
    const venmoChip = screen.getByRole('button', { name: /venmo/i });
    fireEvent.click(venmoChip);
    expect(global.open).toHaveBeenCalledWith('https://venmo.com/Mark-Fonte');
  });

  it('renders InteractionCard', () => {
    expect(InteractionCard).toHaveBeenCalledWith(
      expect.objectContaining({ likeType: 'page', likeName: 'contact' }),
      undefined
    );
  });
});
