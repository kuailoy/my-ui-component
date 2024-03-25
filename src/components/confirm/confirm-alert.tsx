import { forwardRef } from 'react';
import styled from 'styled-components';
import { useTimer } from './use-timer';
import { DEFAULT_TIMER } from './confirm-const';

export interface ConfirmAlertProps {
  timer?: number;
}

export const AlertWrapper = styled.div`
  margin-top: 24px;
  font-size: 12px;
  color: ${props => props.theme.text};
  line-height: 1;
  padding: 9px;
  background-color: ${props => props.theme.block};
  border-radius: 6px;
`;

export const ConfirmAlert = forwardRef<HTMLHeadingElement, ConfirmAlertProps>((props, ref) => {
  const { timer = DEFAULT_TIMER } = props;
  const seconds = useTimer(timer);

  return (
    <AlertWrapper ref={ref}>
      Estimated time: <b>{seconds} seconds</b>
    </AlertWrapper>
  );
});
