import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 300px;

    display: flex;
    flex-direction: column;

    input {
      margin-top: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 48px;
      padding: 0px 20px;
      font-size: 16px;
      color: #666;

      &::placeholder {
        color: #999;
      }
    }

    button {
      margin-top: 10px;
      border: 0px;
      border-radius: 4px;
      height: 48px;
      font-size: 16px;
      background: ${lighten(0.05, '#df4723')};
      transition: background 0.2s linear;
      cursor: pointer;
      color: #fff;
      font-weight: bold;

      &:hover {
        background: #df4723;
      }
    }
  }
`;
