import styled from 'styled-components'

export const MainStyle = styled.div`
  width: 100%;
  padding: 60px 0 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80vw;
`

export const SearchForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  & > div {
    flex-grow: 2;
  }
`
