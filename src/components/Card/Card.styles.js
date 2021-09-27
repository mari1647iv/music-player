import styled from 'styled-components'

export const ArtistCardStyle = styled.div`
  width: 562px;
  height: 776px;

  background: #262626;
  border: 1px solid #404040;
  box-sizing: border-box;
  overflow: hidden;

  box-shadow: 0px 70px 70px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  white-space: pre-line;

  & > img {
    width: 100%;
    object-fit: cover;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 5% 6.5%;
  }

  h2 {
    margin: 10px 0;

    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -0.03em;

    color: #cecece;
  }

  p {
    width: 488px;
    margin-bottom: 26px;
    font-style: normal;
    font-weight: 300;
    text-align: left;

    font-size: 24px;
    line-height: 30px;

    color: #cecece;
  }

  h2 + p {
    font-size: 20px;
    line-height: 25px;

    color: #727272;
  }

  a {
    margin-bottom: 10px;

    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    text-decoration-line: underline;

    color: #cecece;

    text-align: left;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }
`

export const EventCardStyle = styled.div`
  width: 346px;

  background: #343434;
  border: 1px solid #515151;
  box-sizing: border-box;

  box-shadow: 0px 70px 70px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  white-space: pre-line;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 5% 6.5%;
  }

  h2 {
    width: 100%;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: left;
    letter-spacing: -0.03em;

    color: #cecece;
  }

  p {
    width: 100%;

    font-style: normal;
    font-weight: 300;
    text-align: left;
    font-size: 18px;
    line-height: 23px;

    color: #cecece;
  }

  .location {
    margin: 4px 0 20px;

    font-size: 14px;
    line-height: 18px;

    color: #727272;
  }

  .link {
    margin-top: 20px;
    text-align: right;
    text-decoration-line: underline;
  }
`
