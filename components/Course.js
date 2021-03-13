import React from 'react'
import styled from 'styled-components/native';
import { Avatar } from '.';
import Block from './Block';

export default function Course({
    title,
    subtitle,
    image,
    logo,
    author,
    avatar,
    caption
}) {
    return (
        <Container>
            <Cover flex={0.8}>
                <Image source={image} />
                <Block style={{ zIndex: 1 }} >
                    <Block flex={0.6} align="center" justify="center">
                        <Logo source={logo} resizeMode="contain" />
                    </Block>
                    <Block flex={0.4}>
                        <Subtitle>{subtitle}</Subtitle>
                        <Title>{title}</Title>
                    </Block>
                </Block>
            </Cover>
            <Content row flex={0.2} align="center">
                <Avatar source={avatar} />
                <TextContent>
                    <Caption>{ caption }</Caption>
                    <Author>Taught by { author }</Author>
                </TextContent>
            </Content>
        </Container>
    )
}

const Container = styled.View`
  background-color: white;
  width: 325px;
  height: 350px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0,0,0, 0.15);
`;

const Cover = styled(Block)`
  padding: 10px;
`;

const Content = styled(Block)`
  height: 80px;
  padding:10px;
`; 

const TextContent = styled(Block)`
  margin-left: 8px;
`; 

const Logo = styled.Image`
  width: 44px;
  height: 44px;
  box-shadow: 0 4px 22px rgba(0,0,0, 0.4);
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`

const Caption = styled.Text`
  font-weight: 600;
  font-size: 15px;
`;

const Author = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 13px;
  margin-top: 2px;
`;

const Title = styled.Text`
  max-width: 200px;
  font-size: 22px;
  font-weight: 600;
  color: white;
  //margin: 10px 0;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: #b8bece;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 0;
`;