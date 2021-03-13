import React from 'react'
import styled from 'styled-components/native';
import Block from './Block';

export default function Logo({
    image,
    caption
}) {
    return (
        <Container row align="center">
            <Image source={image} resizeMode="contain"/>
            <Caption>
                {caption}
            </Caption>
        </Container>
    )
}

const Container = styled(Block)`
  background-color: white;
  padding: 20px 10px;
  margin: 0 5px;
  height: 60px;
  border-radius: 14px;
  box-shadow: 0 10px 15px rgba(0,0,0,0.0.5);
`;

const Caption = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`;

const Image = styled.Image`
  width: 24px;
  height: 24px;
`;