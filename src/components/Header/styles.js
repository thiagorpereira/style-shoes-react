import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styled
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;

    strong {
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
      margin-top: 2px;
    }
  }
`;
