import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  // cssでスタイルが定義できる
  height: 250px;
  width: 350px;
  border: solid 1px black;
  border-radius: 24px;
  position: relative;
`;

const ModalTitle = styled.div`
  height: 60px;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Border = styled.div`
  border-bottom: solid 2px black;
`;

interface Props {
  title: string;
  className?: string;
}

export const CommentModal: React.FC<Props> = (props) => {
  const { title, className } = props;

  return (
    <Wrapper className={className}>
      <ModalTitle>{title}</ModalTitle>
      <Border />
    </Wrapper>
  );
};
