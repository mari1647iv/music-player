import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background: #1e1e1e;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15);
  width: 80vw;
  padding: 32px 10vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const LogoStyle = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 0;
  left: 48%;
  left: expression(50% - 25px);
  left: -webkit-calc(50% - 25px);
  left: -moz-calc(50% - 25px);
  left: -o-calc(50% - 25px);
  left: calc(50% - 25px);

  @media screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  z-index: 1;
`

export const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-style: normal;
  letter-spacing: -0.04em;

  h1 {
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;

    color: #cecece;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;

    color: #727272;
  }
`
