import { forwardRef } from 'react';
import styled from 'styled-components';
import { TimeoutHandler, useTimer } from './use-timer';
import { DEFAULT_EVENT_HANDLER, DEFAULT_TIMER } from './confirm-const';

export interface ConfirmAlertProps {
  timer?: number;
  onTimeout?: TimeoutHandler;
}

export const AlertWrapper = styled.div`
  margin-top: 24px;
  font-size: 12px;
  color: ${(props) => props.theme.text};
  line-height: 1;
  padding: 9px;
  background-color: ${(props) => props.theme.block};
  border-radius: 6px;
`;

export const ConfirmAlert = forwardRef<HTMLHeadingElement, ConfirmAlertProps>((props, ref) => {
  const { timer = DEFAULT_TIMER, onTimeout = DEFAULT_EVENT_HANDLER } = props;
  const seconds = useTimer(timer, onTimeout);

  return (
    <AlertWrapper ref={ref}>
      Estimated time: <b>{seconds} seconds</b>
    </AlertWrapper>
  );
});
