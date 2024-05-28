import styled from 'styled-components'

export const EventsStyle = styled.div`
  width: 100%;
  padding: 60px 0 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > p {
    color: #cecece;
    font-size: 24px;
  }
`

export const EventsGrid = styled.div`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 50px;
  gap: 2em;
  flex-wrap: wrap;
`

export const Loading = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid #cecece;
    opacity: 1;
    border-radius: 50%;
    animation: loading 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes loading {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`
