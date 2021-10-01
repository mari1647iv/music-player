import styled from 'styled-components'

export const SearchForm = styled.form`
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
