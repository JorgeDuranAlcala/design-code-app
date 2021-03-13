import React from 'react'
import { Animated, TouchableOpacity, Dimensions, Platform, View } from 'react-native'
import styled from 'styled-components/native';
import { Ionicons } from "@expo/vector-icons";
import { Block } from '.';
import { items } from '../data';
import MenuItem from './MenuItem';
import { connect } from "react-redux";
import * as menuActions from "../actions/Menu";

const screenHeight = Dimensions.get('screen').height

export function Menu({
    openMenu,
    close_menu_action
})  {


    const top = React.useRef(new Animated.Value(screenHeight)).current;

    
    React.useEffect(() => {
        console.group("Menu comp")
        console.log(openMenu)
        console.log(top)
        console.groupEnd()
       toggleMenu()
    }, [toggleMenu])

    const toggleMenu = () => {

        if(openMenu) {
                
            Animated.spring(top, {
                toValue: 0
            }).start();

        } else {

            Animated.spring(top, {
                toValue: screenHeight
            }).start()

        }

    }

    return (
        <AnimatedContainer style={{ top, display: (!openMenu && Platform.OS === 'web') && 'none'  }}>
            <Cover flex={0.2} align="center" justify="center" >
                <Image source={require('../assets/background1.jpg')} resizeMode="cover"/>
                <Title>Meng To</Title>
                <Subtitle>Desginer in DesignCode</Subtitle>
            </Cover>
            <TouchableOpacity 
                style={{ 
                    zIndex: 2, 
                    position: 'absolute', 
                    top: 120, 
                    left: '50%', 
                    marginLeft: -22 
                }} 
                onPress={close_menu_action} 
            >
                <CloseBtn align="center" justify="center">
                    <Ionicons name="close" color="#4775f2" size={32} />
                </CloseBtn>
            </TouchableOpacity>
            <Content>
                {
                    items.map((data, index) => (
                        <MenuItem key={index} {...data} />
                    ))
                }
            </Content>
        </AnimatedContainer>
    )
}

const mapStateToProps = (state) => ({
    ...state.menu
})

const mapDispatchToProps = dispatch => {
    return {
        close_menu_action: () => {
            dispatch(menuActions.close_Menu)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const Container = styled.View`
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 500;
`

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled(Block)`
  background-color: purple;
`;

const Image = styled.Image`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`

const Title = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: 600;
  z-index: 1;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  z-index: 1;
  margin-top: 5px;
`;


const CloseBtn = styled(Block)`
  position: absolute;
  width: 44px;
  height: 44px;
  background-color: white;
  border-radius: 44px;
  box-shadow: 0 5px 12px rgba(0,0,0, 0.25);
  z-index: 1;
`;

const Content = styled(Block)`
  height: ${screenHeight};
  background-color: white;
  padding: 50px;
`;