import React from 'react'
import styled from 'styled-components/native';
import Block from "./Block";

export default function Card({
  image,
  title,
  subtitle,
  caption,
  logo,
}) {
    return (
        <Container>
            <Cover>
                <Image source={image} />
                <Title>{ title }</Title>
            </Cover>
            <Content row align="center">
                <Logo source={logo} />
                <Wrapper>    
                    <Caption>{ caption }</Caption>
                    <SubTitle>{ subtitle }</SubTitle>
                </Wrapper>
            </Content>
        </Container>
    )
}

const Content = styled(Block)`
    padding-left: 20px;
    height: 80px;
`;

const Wrapper = styled(Block)`
  margin-left: 10px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 5px;
`;

const Container = styled.View`
  background-color: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 180px;
  z-index: 1;
`;