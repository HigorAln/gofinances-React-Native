import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { css } from 'styled-components/native';

interface IconProps {
  type: "up" | "down";
}

interface ButtonProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: #ddd;
  border-radius: 5px;

  padding: 16px;

  ${({ isActive, type }) => isActive && type === "up" && css`
    background-color: ${({ theme })=> theme.colors.success_light};
  `};

  ${({ isActive, type }) => isActive && type === "down" && css`
    background-color: ${({ theme })=> theme.colors.attention_light};
  `};
`
export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) => type === "up" ? theme.colors.success : theme.colors.attention};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`
