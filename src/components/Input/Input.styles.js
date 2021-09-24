import styled from 'styled-components'

export const InputStyle = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 60px;
    padding-left: 94px;

    background: #2f2f2f;
    border: 1px solid #686868;
    box-sizing: border-box;
    box-shadow: inset 15px 15px 15px rgba(0, 0, 0, 0.1), inset -15px -15px 15px rgba(0, 0, 0, 0.1);
    border-radius: 7px;

    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 38px;

    display: flex;
    align-items: center;

    color: #cecece;
  }

  input:hover {
    border: 1px solid #cecece;
  }

  input:focus {
    background: #2f2f2f;
    color: #cecece;
  }

  input::placeholder {
    color: #727272;
  }
  input:hover::placeholder {
    color: #cecece;
  }

  input::-webkit-input-placeholder {
    color: #727272;
  }
  input::-moz-placeholder {
    color: #727272;
  } /* Firefox 19+ */
  input:-moz-placeholder {
    color: #727272;
  } /* Firefox 18- */
  input:-ms-input-placeholder {
    color: #727272;
  }

  input:hover::-webkit-input-placeholder {
    color: #cecece;
  }
  input:hover::-moz-placeholder {
    color: #cecece;
  } /* Firefox 19+ */
  input:hover:-moz-placeholder {
    color: #cecece;
  } /* Firefox 18- */
  input:hover:-ms-input-placeholder {
    color: #cecece;
  }

  i {
    position: absolute;
    left: 12px;
    top: 12px;
    color: #727272;
  }

  &:hover i {
    color: #cecece;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    padding: 12px;
    padding-right: 46px;
    left: -25px;
    opacity: 0;
  }

  input[type='date'] {
    color: #727272;
  }
  input[type='date']:focus {
    color: #cecece;
  }
`
