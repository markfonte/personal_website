/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Blog from './Blog';
import '@testing-library/jest-dom';

// Mock InteractionCard component
const MockInteractionCard = () => <div>Interaction Card</div>;
MockInteractionCard.displayName = 'MockInteractionCard';

jest.mock('../shared/InteractionCard.jsx', () => MockInteractionCard);

// Mock the Snackbar component
const MockSnackbar = ({ open, onClose, children }) => (
  <div>
    {open && <div data-testid="snackbar">{children}</div>}
    <button onClick={onClose} data-testid="close-snackbar">Close</button>
  </div>
);
MockSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
MockSnackbar.displayName = 'MockSnackbar';

jest.mock('@mui/material/Snackbar', () => (props) => {
  const Snackbar = (props) => <MockSnackbar {...props} />;
  Snackbar.displayName = 'Snackbar'; // Set display name here
  return <Snackbar {...props} />;
});

// Mock the Alert component
const MockAlert = (props) => (
  <div data-testid="alert" {...props}>{props.children}</div>
);
MockAlert.propTypes = {
  children: PropTypes.node.isRequired,
};
MockAlert.displayName = 'MockAlert';

jest.mock('@mui/material/Alert', () => (props) => {
  const Alert = (props) => <MockAlert {...props} />;
  Alert.displayName = 'Alert'; // Set display name here
  return <Alert {...props} />;
});

describe('Blog Component', () => {
  beforeEach(() => {
    // Clear the mock before each test
    jest.clearAllMocks();
    // Mock the clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
  });

  test('renders blog posts correctly', async () => {
    await act(async () => {
      render(<Blog />);
    });

    // Check if the welcome message is rendered
    expect(screen.getByText(/Welcome! Here are some of my thoughts on issues that I find important./i)).toBeInTheDocument();

    // Check if the Interaction Card is rendered
    expect(screen.getByText(/Interaction Card/i)).toBeInTheDocument();
  });

  test('copies post link to clipboard and shows success snackbar', async () => {
    await act(async () => {
      render(<Blog />);
    });

    // Get all share buttons
    const shareButtons = screen.getAllByLabelText(/Share article/i);

    // Click the first share button
    await act(async () => {
      fireEvent.click(shareButtons[0]);
    });

    // Verify the clipboard write function was called
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('blog#post_'));

    // Check if the Snackbar is displayed
    expect(screen.getByTestId('snackbar')).toBeInTheDocument();
    expect(screen.getByTestId('alert')).toHaveTextContent('Link copied to clipboard!');
  });

  test('closes the snackbar when close button is clicked', async () => {
    await act(async () => {
      render(<Blog />);
    });

    // Trigger the snackbar to appear by clicking the first share button
    const shareButtons = screen.getAllByLabelText(/Share article/i);
    await act(async () => {
      fireEvent.click(shareButtons[0]); // Click the first share button
    });

    // Check if the snackbar is visible
    expect(screen.getByTestId('snackbar')).toBeInTheDocument();

    // Close the snackbar
    const closeButton = screen.getByTestId('close-snackbar');
    await act(async () => {
      fireEvent.click(closeButton);
    });

    // Verify the snackbar is not visible anymore
    expect(screen.queryByTestId('snackbar')).not.toBeInTheDocument();
  });

  test('changes document title on mount', async () => {
    const originalTitle = document.title;
    await act(async () => {
      render(<Blog />);
    });
    expect(document.title).toBe('Blog | Mark Fonte');
    document.title = originalTitle; // Reset title after test
  });

  test('does not close the snackbar when close reason is "clickaway"', async () => {
    await act(async () => {
      render(<Blog />);
    });

    // Trigger the snackbar to appear by clicking the first share button
    const shareButtons = screen.getAllByLabelText(/Share article/i);
    await act(async () => {
      fireEvent.click(shareButtons[0]); // Click the first share button
    });

    // Check if the snackbar is visible after clicking the share button
    const snackbar = await screen.findByTestId('snackbar'); // Use findBy to wait for it
    expect(snackbar).toBeInTheDocument();

    // Manually call the handleClose function with the clickaway reason
    const handleClose = screen.getByTestId('close-snackbar').onclick; // Get the onClick handler

    await act(async () => {
      handleClose({}, 'clickaway'); // Simulate calling the handleClose function
    });

    // Verify that the snackbar is still visible
    expect(screen.getByTestId('snackbar')).toBeInTheDocument();
  });

});
