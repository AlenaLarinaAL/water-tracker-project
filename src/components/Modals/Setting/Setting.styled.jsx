import styled from 'styled-components';
import theme from '../../../CommonStyle/theme.jsx';

export const WrapperUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 24px;

  img {
    border-radius: 100%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: ${theme.colors.primaryAccent};
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: calc(18 / 14);
    stroke: ${theme.colors.primaryAccent};
    fill: none;
  }

  /* width: 80px;
  height: 80px;
  border-radius: 100%; */
`;

export const ContainerAvatar = styled.div`
  width: 80px;
  height: 80px;
  div {
    width: auto;
    height: 100%;
    background-color: red;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    color: ${theme.colors.primaryLight};
    background-color: ${theme.colors.primaryAccent};
  }
`;

export const WrapperForma = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WrapperFormaMain = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const WrapperFormaLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const WrapperFormaRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 36px;
  right: 12px;

  box-sizing: border-box;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 0px;
  svg {
    stroke: ${theme.colors.primaryAccent};

    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    right: 24px;
  }
`;
