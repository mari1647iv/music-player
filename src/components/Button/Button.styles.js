import styled from 'styled-components'

export const ButtonStyles = styled.button`
  min-height: 60px;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  box-sizing: border-box;

  font-weight: 300;
  font-size: 30px;

  padding: ${(props) => (props.isColorfull ? '8px 60px' : '10px')};

  background: ${(props) =>
    props.isColorfull ? 'linear-gradient(115.62deg, #00ffc2 16.53%, #03a8a6 74.89%, #03a5a5 76.77%)' : 'transparent'};

  box-shadow: ${(props) => (props.isColorfull ? '15px 15px 15px rgba(0, 0, 0, 0.15)' : 'none')};

  color: ${(props) => (props.isColorfull ? '#2f2f2f' : '#cecece')};

  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: ${(props) => (props.isColorfull ? 'inset 10px 10px 20px rgba(0, 0, 0, 0.15)' : 'none')};
    color: ${(props) => (props.isColorfull ? '#2f2f2f' : '#e5e5e5')};
  }
  &:active {
    box-shadow: ${(props) => (props.isColorfull ? 'inset 15px 15px 30px rgba(0, 0, 0, 0.15)' : 'none')};
    color: ${(props) => (props.isColorfull ? '#2f2f2f' : 'white')};
  }
  &:disabled {
    color: #727272;
    cursor: not-allowed;
    background: transparent;
    box-shadow: none;

    border: ${(props) => (props.isColorfull ? '1px solid #727272' : 'none')};
  }
`
