import styled from 'styled-components'

export const EventsStyle = styled.div`
  width: 100%;
  padding: 60px 0 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const SearchForm = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 40px;
  margin-bottom: 40px;

  & > div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10%;
    flex-wrap: wrap;
  }

  & > div > div {
    flex-grow: 2;
    margin-bottom: 40px;
  }
`

export const EventsGrid = styled.div`
  width: 80vw;
  display: flex;
  margin-top: 50px;
  gap: 4em;
  justify-content: space-between;
  flex-wrap: wrap;
`
