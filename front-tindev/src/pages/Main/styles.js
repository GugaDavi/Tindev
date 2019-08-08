import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 0px auto;
  padding: 50px 0px;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 30px;

    li {
      display: flex;
      flex-direction: column;
      img {
        max-width: 100%;
      }

      footer {
        flex: 1;
        background: #fff;
        border: 1px solid #eee;
        padding: 15px 20px;
        text-align: left;
        border-radius: 0 0 5px 5px;

        strong {
          font-size: 16px;
          color: #333;
        }

        p {
          font-size: 14px;
          line-height: 20px;
          color: #999;
          margin-top: 5px;
        }
      }
    }
  }
`;

export const ViewButtons = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  button {
    height: 50px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    border: 0;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const Logo = styled.img`
  width: 200px;
`;
