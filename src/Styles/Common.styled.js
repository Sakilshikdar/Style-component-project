import styled from 'styled-components';

export const Section = styled.section`
    background-color: ${props=>props.bg};
    color: ${props=> props.color||'red'};
`
