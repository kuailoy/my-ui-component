import { forwardRef } from 'react';
import styled from 'styled-components';
import { useTimer } from './use-timer';

export interface ConfirmAlertProps {
  timer?: number;
}

const Wrapper = styled.div`
  margin-top: 24px;
  font-size: 12px;
  color: ${props => props.theme.text};
  line-height: 1;
  padding: 9px;
  background-color: ${props => props.theme.block};
  border-radius: 6px;
`;

export const ConfirmAlert = forwardRef<HTMLHeadingElement, ConfirmAlertProps>((props, ref) => {
  const { timer = 60 } = props;
  const seconds = useTimer(timer);

  return (
    <Wrapper ref={ref}>
      Estimated time: <b>{seconds} seconds</b>
    </Wrapper>
  );
});
