import React from 'react'
import styled from 'styled-components/native';

export default function Avatar({
    source
}) {
    return <Image source={source} />
}

const Image = styled.Image`
  background-color: black;
  width: 44px;
  height: 44px;
  border-radius: 22px;
`