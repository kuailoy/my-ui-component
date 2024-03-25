import { render } from '@testing-library/react';
import { Confirm, ConfirmProps } from './confirm';
import '@testing-library/jest-dom';

describe('Confirm component', () => {
  const defaultProps: ConfirmProps = {
    // Provide default props here if needed
    payer: {
      name: 'atom1xy5ym6wwz9a',
      id: 123,
      avatar: 'https://picsum.photos/30',
    },
    receiver: {
      name: 'osmo1xy5ym6wwz9a',
      id: 321,
      avatar: 'https://picsum.photos/22',
    },
    available: 2,
    exchangeRate: 1013,
    value: 2,
  };

  test('renders without crashing', () => {
    render(<Confirm {...defaultProps} />);
  });

  test('renders header, body, and footer', () => {
    const { getByTestId } = render(<Confirm {...defaultProps} />);
    expect(getByTestId('confirm-header')).toBeInTheDocument();
    expect(getByTestId('confirm-body')).toBeInTheDocument();
    expect(getByTestId('confirm-footer')).toBeInTheDocument();
  });

  test('passes theme prop correctly', () => {
    const { getByTestId } = render(<Confirm {...defaultProps} theme="dark" />);
    const confirmInnerContainer = getByTestId('confirm-inner-container');
    expect(confirmInnerContainer).toHaveStyle('background-color: #212428');
  });

  // Add more tests as needed...
});