import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.background.secundary};
  color: ${({ theme }) => theme.colors.foreground.primary};

  tansition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.action};
    color: #ffffff;
  }
`;
