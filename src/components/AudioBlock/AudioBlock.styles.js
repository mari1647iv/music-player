import styled from 'styled-components'

export const AudioBlockStyle = styled.div`
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;

  background: #3c3c3c;
  border: 1px solid #2f2f2f;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: no-wrap;

  img {
    width: 60px;
    height: 60px;
    margin-right: 28px;
    border-radius: 8.5%;
  }

  div {
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 2;
  }

  .song {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 46px;

    color: #cecece;
    text-align: left;
  }

  .artist {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 26px;

    color: #727272;
    text-align: left;
  }

  .time {
    margin: 0px 40px;

    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;

    color: #cecece;
    text-align: center;
  }

  i {
    color: #727272;
    visibility: hidden;
  }

  &:hover {
    border: 1px solid #686868;
  }

  &:hover i {
    visibility: visible;
  }
`
export const AudioRadioButton = styled.label`
  input {
    position: fixed;
    opacity: 0;
    pointer-events: none;
  }

  input:checked + div > i {
    color: #cecece;
    visibility: visible;
  }

  input:checked + div {
    border: 1px solid #686868;
  }
`
