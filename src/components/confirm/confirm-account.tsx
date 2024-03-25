import { forwardRef, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import IconEdit from '../assets/edit.svg?react';

export type User = {
  id: number | string;
  name: string;
  avatar: string;
};

export type IconClickHandler = (event: MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface ConfirmAccountProps {
  user: User;
  title: string;
  onEditAccount?: IconClickHandler;
}

interface IconEditProps {
  visible: boolean;
  onClick?: IconClickHandler;
}

export const AccountContainer = styled.div`
  position: relative;
`;

const StyledIconEdit = styled(IconEdit)<IconEditProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 14px;
  height: 14px;
  position: absolute;
  right: 6px;
  bottom: 15px;
  cursor: pointer;
`;

const AccountTitle = styled.h3`
  font-size: 14px;
  color: #697684;
  line-height: 1;
  margin: 23px 0 12px;
`;

const AvatarContainer = styled.span`
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #cccccc;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1px rgba(240, 246, 252, 0.1);
`;

const UserName = styled.p`
  padding-left: 7px;
  font-size: 14px;
  color: #697584;
  line-height: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const AccountItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.block};
  width: 172px;
  height: 44px;
  padding-left: 10px;
  padding-right: 24px;
  border-radius: 6px;
  overflow: hidden;
`;

export const ConfirmAccount = forwardRef<HTMLDivElement, ConfirmAccountProps>((props, ref) => {
  const { user, title, onEditAccount } = props;

  const [editButtonVisible, setEditButtonVisible] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setEditButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setEditButtonVisible(false);
  };

  const showEditEvent = onEditAccount
    ? {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }
    : undefined;

  return (
    <AccountContainer ref={ref} {...showEditEvent}>
      <AccountTitle>{title}</AccountTitle>
      <AccountItemContainer>
        <AvatarContainer>
          <AvatarImage src={user.avatar} alt="avatar" />
        </AvatarContainer>
        <UserName title={user.name}>{user.name}</UserName>
      </AccountItemContainer>
      {onEditAccount && <StyledIconEdit visible={editButtonVisible} onClick={onEditAccount} />}
    </AccountContainer>
  );
});
