import { forwardRef } from 'react';
import styled from 'styled-components';
import { ConfirmButton } from './confirm-button';

export interface ConfirmFooterProps {
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FlexBox = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;
const FlexElement = styled.div`
  flex: 1;
  margin-top: 4px;
`;

export const ConfirmFooter = forwardRef<HTMLHeadingElement, ConfirmFooterProps>((props, ref) => {
  const { confirmText = 'Transfer', cancelText = 'Cancel', onConfirm = () => {}, onCancel = () => {} } = props;
  return (
    <FlexBox ref={ref}>
      <FlexElement>
        <ConfirmButton primary text={confirmText} onClick={onConfirm} />
      </FlexElement>
      <FlexElement>
        <ConfirmButton text={cancelText} onClick={onCancel} />
      </FlexElement>
    </FlexBox>
  );
});
