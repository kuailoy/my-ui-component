import { forwardRef } from 'react';
import styled from 'styled-components';

export interface ConfirmButtonProps {
  primary?: boolean;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? props.theme.buttonPrimary.bg : props.theme.button.bg)};
  color: ${(props) => (props.$primary ? props.theme.buttonPrimary.fg : props.theme.button.fg)};

  font-size: 1em;
  font-weight: 700;
  padding: 16px 0;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease-in, border-color 0.3s ease-in;

  &:hover {
    background-color: ${(props) => (props.$primary ? '#3c4252' : 'white')};
    border-color: ${(props) => (props.$primary ? 'transparent' : '#3c4252')};
  }
`;

export const ConfirmButton = forwardRef<HTMLButtonElement, ConfirmButtonProps>((props, ref) => {
  const { text, primary, onClick } = props;
  return (
    <Button $primary={primary} ref={ref} onClick={onClick}>
      {text}
    </Button>
  );
});
