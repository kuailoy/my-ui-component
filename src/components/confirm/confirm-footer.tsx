import { forwardRef } from 'react';
import styled from 'styled-components';
import { ConfirmButton } from './confirm-button';
import { DEFAULT_CANCEL_TEXT, DEFAULT_CONFIRM_TEXT, DEFAULT_EVENT_HANDLER } from './confirm-const';

export interface ConfirmFooterProps {
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FooterWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;
export const FooterItem = styled.div`
  flex: 1;
  margin-top: 4px;
`;

export const ConfirmFooter = forwardRef<HTMLHeadingElement, ConfirmFooterProps>((props, ref) => {
  const { confirmText = DEFAULT_CONFIRM_TEXT, cancelText = DEFAULT_CANCEL_TEXT, onConfirm = DEFAULT_EVENT_HANDLER, onCancel = DEFAULT_EVENT_HANDLER } = props;
  return (
    <FooterWrapper ref={ref}>
      <FooterItem>
        <ConfirmButton primary text={confirmText} onClick={onConfirm} />
      </FooterItem>
      <FooterItem>
        <ConfirmButton text={cancelText} onClick={onCancel} />
      </FooterItem>
    </FooterWrapper>
  );
});
