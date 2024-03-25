import { forwardRef } from 'react';
import styled from 'styled-components';
import { ConfirmFlow, ConfirmFlowProps } from './confirm-flow';
import { useBodyProps } from './use-props';
import { ConfirmAmount, ConfirmAmountProps } from './confirm-amount';
import { ConfirmAlert, ConfirmAlertProps } from './confirm-alert';

export interface ConfirmBodyProps extends ConfirmFlowProps, ConfirmAmountProps, ConfirmAlertProps {}

// Expose the container for external users to customize styles.
export const BodyContainer = styled.div``;

export const ConfirmBody = forwardRef<HTMLHeadingElement, ConfirmBodyProps>((props, ref) => {
  const { flowProps, amountProps, alertProps } = useBodyProps(props);

  return (
    <BodyContainer ref={ref}>
      <ConfirmFlow {...flowProps} />
      <ConfirmAmount {...amountProps} />
      <ConfirmAlert {...alertProps} />
    </BodyContainer>
  );
});
