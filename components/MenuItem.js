import React from 'react'
import { Block } from '.';
import { Ionicons } from "@expo/vector-icons";
import styled from 'styled-components/native';

export default function MenuItem({
    icon,
    title,
    text
}) {
    return (
        <Container row align="center">
            <IconView align="center" justify="center">
                <Ionicons name={icon} color="#4775f2" size={32} />
            </IconView>
            <Block>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Block>
        </Container>
    )
}

const Container = styled(Block)`
  margin-top: 8px;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.Text`
   color: #3c4560;
  font-size: 15px;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;

const IconView = styled(Block)`
  width: 44px;
  height: 44px;
`;
