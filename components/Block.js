import React from 'react'
import styled from 'styled-components/native';

export default function Block({ children, ...props }) {
    return (
        <Container {...props}>
            { children }
        </Container>
    )
}

const Container = styled.View`
  flex: ${({ flex }) => flex};
  flex-direction: ${({ row }) => !row ? 'column' : 'row'};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;