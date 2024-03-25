import { forwardRef } from 'react';
import styled from 'styled-components';
import { ConfirmAccount, IconClickHandler, User } from './confirm-account';
import arrowSrc from '../assets/arrow-right.svg';
import { DEFAULT_FROM_TITLE, DEFAULT_TO_TITLE } from './confirm-const';

export interface ConfirmFlowProps {
  payer: User;
  receiver: User;
  from?: string;
  to?: string;
  onEditAccount?: IconClickHandler;
}

export const FlowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrap = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 13px;
`;

export const ConfirmFlow = forwardRef<HTMLDivElement, ConfirmFlowProps>((props, ref) => {
  const { payer, receiver, from = DEFAULT_FROM_TITLE, to = DEFAULT_TO_TITLE, onEditAccount } = props;

  return (
    <FlowContainer ref={ref}>
      <ConfirmAccount user={payer} title={from} />
      <IconWrap>
        <img src={arrowSrc} alt="arrow" />
      </IconWrap>
      <ConfirmAccount user={receiver} title={to} onEditAccount={onEditAccount} />
    </FlowContainer>
  );
});
