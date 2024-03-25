import { forwardRef } from 'react';
import styled from 'styled-components';

export interface ConfirmAccountProps {
  user: string;
  avatar: string;
  title: string;
}

export const AccountContainer = styled.div``;

const AccountTitle = styled.h3`
  font-size: 14px;
  color: #697684;
  line-height: 1;
  margin: 23px 0 12px;
`;

export const AccountItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.block};
  width: 172px;
  height: 44px;
  padding-left: 10px;
  padding-right: 24px;
  border-radius: 6px;
  overflow: hidden;
  span {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #cccccc;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 0 1px rgba(240, 246, 252, 0.1);
    }
  }
  p {
    padding-left: 7px;
    font-size: 14px;
    color: #697584;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ConfirmAccount = forwardRef<HTMLDivElement, ConfirmAccountProps>((props, ref) => {
  const { user, avatar, title } = props;

  return (
    <AccountContainer ref={ref}>
      <AccountTitle>{title}</AccountTitle>
      <AccountItemContainer>
        <span>
          <img src={avatar} alt="" />
        </span>
        <p title={user}>{user}</p>
      </AccountItemContainer>
    </AccountContainer>
  );
});
