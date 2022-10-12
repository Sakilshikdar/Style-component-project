import styled from 'styled-components';

export const Container = styled.div`
    max-width: 140rem;
    margin: 0 auto;
`

 export const GridThree = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({gap})=>gap ||"2rem"};
 `

