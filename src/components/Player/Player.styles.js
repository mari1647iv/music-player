import styled from 'styled-components'

export const MinimizedPlayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding-bottom: 12px;
  z-index: 10;

  width: 100vw;
  box-sizing: border-box;

  background: #1e1e1e;
  box-shadow: 0px -30px 30px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: no-wrap;

  img {
    width: 88px;
    height: 88px;
    border-radius: 8.5%;
  }

  .player-info {
    min-width: 350px;
  }

  & > div:nth-child(2) {
    width: 100vw;
    min-width: 1060px;
    padding: 23px 10vw;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: no-wrap;
  }

  .controls {
    display: flex;
    flex-wrap: nowrap;
  }
`

export const MaximizedPlayer = styled.div`
  width: 878px;
  padding: 10px 40px;
  box-sizing: border-box;

  background: transparent;
  border: 1px solid #2f2f2f;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: no-wrap;

  img {
    width: 200px;
    height: 200px;
    margin-right: 80px;
    border-radius: 8.5%;

    filter: drop-shadow(0px 70px 70px rgba(0, 0, 0, 0.25));
  }

  .player-info {
    min-width: 561px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 100%;
    margin: 12px 0;
  }

  .buttons > div:first-child {
    display: flex;
    flex-grow: 2;
    justify-content: center;
  }
`

export const Slider = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #727272;
    overflow: hidden;
    cursor: pointer;
  }

  input:focus-visible {
    outline: none;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 6px;
    height: 4px;

    background-color: #cecece;
    box-shadow: -100vw 0 0 100vw #00ffc2;
  }

  input::before {
    position: absolute;
    content: '';
    width: var(--seek-before-width);
    height: 4px;
    background-color: #00ffc2;
    cursor: pointer;
  }

  div {
    margin: 0 10vw;
    width: 80vw;
    position: relative;

    display: flex;
    justify-content: flex-start;
  }

  span {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;

    color: #cecece;
  }

  .song-duration {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  input {
    position: fixed;
    opacity: 0;
    pointer-events: none;
  }

  input + i {
    color: #727272;
    cursor: pointer;
  }

  input:checked + i {
    color: #cecece;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-style: normal;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;

  p:first-child {
    font-weight: bold;
    font-size: 44px;
    line-height: 55px;

    color: #cecece;
  }

  p:nth-child(2) {
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;

    color: #727272;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, transparent 86.79%, #1e1e1e 99.89%);
  }
`
