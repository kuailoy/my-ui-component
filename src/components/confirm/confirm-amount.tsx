import { forwardRef, useMemo, ChangeEvent, MouseEvent, RefObject } from 'react';
import styled from 'styled-components';
import equalSrc from '../assets/equal.svg';
import { DEFAULT_EVENT_HANDLER, DEFAULT_QUICK_BUTTONS } from './confirm-const';

export type QuickButton = {
  id: number | string;
  text: string;
};

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void;

export type QuickButtonClickHandler = (id: number | string, target: QuickButton, event: MouseEvent<HTMLSpanElement>) => void;

export interface ConfirmAmountProps {
  available: number;
  payerAvatar: string;
  exchangeRate: number;
  quickButtons?: QuickButton[];
  value?: number;
  onChange?: OnChange;
  defaultValue?: number;
  min?: number;
  max?: number;
  onQuickButtonClick?: QuickButtonClickHandler;
  inputRef: RefObject<HTMLInputElement>;
}

export const AmountContainer = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const AmountTitle = styled.h3`
  font-size: 1em;
  color: #697684;
  line-height: 1;
  margin: 23px 0 12px;
`;

const AvailableInfo = styled.span`
  font-size: 12px;
  color: #697684;
`;
const Content = styled.div`
  height: 58px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
  display: flex;
`;
const LeftElement = styled.span`
  width: 58px;
  flex-shrink: 0;
  border-right: 1px solid ${(props) => props.theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const InputWrapper = styled.span`
  padding: 15px;
  flex-grow: 1;
`;
const StyledInput = styled.input`
  width: 100%;
  font-size: 1em;
  line-height: 1;
  border: none;
  outline: none;
  font-weight: 700;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const RightElement = styled.span`
  font-size: 12px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text};
  padding-right: 16px;
`;

const IconEqual = styled.img`
  width: 14px;
  height: 14px;
`;
const BottomElement = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
`;
const QuickButton = styled.span`
  color: #687584;
  font-size: 12px;
  padding: 7px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.block};
  font-weight: 700;
  cursor: pointer;
  margin-left: 8px;
`;

export const ConfirmAmount = forwardRef<HTMLDivElement, ConfirmAmountProps>((props, ref) => {
  const {
    available,
    payerAvatar,
    exchangeRate,
    quickButtons = DEFAULT_QUICK_BUTTONS,
    value,
    onChange = DEFAULT_EVENT_HANDLER,
    defaultValue = available,
    min = 0,
    max = available,
    onQuickButtonClick = DEFAULT_EVENT_HANDLER as QuickButtonClickHandler,
    inputRef,
  } = props;

  const formatMoney = useMemo(() => '$' + exchangeRate.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ','), [exchangeRate]);

  return (
    <AmountContainer ref={ref}>
      <Header>
        <AmountTitle>Select Amount</AmountTitle>
        <AvailableInfo>
          Available <b>{available} ATOM</b>
        </AvailableInfo>
      </Header>
      <Content>
        <LeftElement>
          <img src={payerAvatar} alt="" />
        </LeftElement>
        <InputWrapper>
          <StyledInput
            ref={inputRef}
            type="number"
            inputMode="decimal"
            pattern="[0-9]*(.[0-9]+)?"
            step="0.1"
            min={min}
            max={max}
            defaultValue={value ? undefined : defaultValue}
            value={value}
            onChange={onChange}
          />
        </InputWrapper>
        <RightElement>
          <b>ATOM</b>
          <IconEqual src={equalSrc} alt="equal" />
          {formatMoney}
        </RightElement>
      </Content>
      <BottomElement>
        {quickButtons.map((quickButton) => (
          <QuickButton key={quickButton.id} onClick={(event: MouseEvent<HTMLSpanElement>) => onQuickButtonClick(quickButton.id, quickButton, event)}>
            {quickButton.text}
          </QuickButton>
        ))}
      </BottomElement>
    </AmountContainer>
  );
});
