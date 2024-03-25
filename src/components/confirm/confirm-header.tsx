import { forwardRef } from 'react';
import styled from 'styled-components';
import IconClose from '../assets/close.svg?react';
import { DEFAULT_EVENT_HANDLER, DEFAULT_TITLE } from './confirm-const';

export interface ConfirmHeaderProps {
  title?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HeaderWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1em;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  margin: 0;
`;
const IconWrapper = styled.span`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.block};
  cursor: pointer;
`;

const StyledIconClose = styled(IconClose)`
  width: 12px;
  height: 12px;
  fill: ${({ theme }) => theme.text};
`;

export const ConfirmHeader = forwardRef<HTMLHeadingElement, ConfirmHeaderProps>((props, ref) => {
  const { title = DEFAULT_TITLE, onClose = DEFAULT_EVENT_HANDLER } = props;

  return (
    <HeaderWrapper>
      <Title ref={ref}>{title}</Title>
      <IconWrapper onClick={onClose}>
        <StyledIconClose />
      </IconWrapper>
    </HeaderWrapper>
  );
});
