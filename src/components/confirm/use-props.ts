import { useMemo } from 'react';
import { ConfirmBodyProps } from './confirm-body';
import { ConfirmFlowProps } from './confirm-flow';
import { ConfirmProps } from './confirm';
import { ConfirmAmountProps } from './confirm-amount';
import { ConfirmAlertProps } from './confirm-alert';
import { ConfirmFooterProps } from './confirm-footer';
import { ConfirmHeaderProps } from './confirm-header';

export const useProps = (props: ConfirmProps) => {
  const { title, onClose, confirmText, cancelText, onConfirm, onCancel, ...restProps } = props;
  const headerProps: ConfirmHeaderProps = useMemo(() => ({ title, onClose }), [title, onClose]);
  const footerProps: ConfirmFooterProps = useMemo(() => ({ confirmText, cancelText, onConfirm, onCancel }), [confirmText, cancelText, onConfirm, onCancel]);
  const bodyProps: ConfirmBodyProps = useMemo(() => ({ ...restProps }), [restProps]);
  return { headerProps, bodyProps, footerProps };
};

export const useBodyProps = (bodyProps: ConfirmBodyProps) => {
  const { inputRef, payer, receiver, from, to, onEditAccount, available, exchangeRate, quickButtons, value, onChange, defaultValue, min, max, onQuickButtonClick, timer, onTimeout } = bodyProps;
  const flowProps: ConfirmFlowProps = useMemo(() => ({ payer, receiver, from, to, onEditAccount }), [payer, receiver, from, to, onEditAccount]);
  const amountProps: ConfirmAmountProps = useMemo(
    () => ({ available, payer, exchangeRate, quickButtons, value, onChange, defaultValue, min, max, onQuickButtonClick, inputRef }),
    [available, payer, exchangeRate, quickButtons, value, onChange, defaultValue, min, max, onQuickButtonClick, inputRef],
  );
  const alertProps: ConfirmAlertProps = useMemo(() => ({ timer, onTimeout }), [timer, onTimeout]);
  return { flowProps, amountProps, alertProps };
};
