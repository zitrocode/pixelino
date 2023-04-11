import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background.secundary};

  box-sizing: border-box;
`;

export const NavItem = styled.button`
  widht: 40px;
  height: 40px;
  margin: 0px 3px;
  border: none;

  color: ${({ theme }) => theme.colors.foreground.secundary};
  background-color: ${({ theme }) => theme.colors.background.secundary};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.action};
  }
`;
