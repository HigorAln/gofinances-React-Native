import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import theme from "../../global/styles/theme";

interface AmountType {
  type: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: 17px 24px;

  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`
export const Amount = styled.Text<AmountType>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  color: ${(({ type })=> type ? theme.colors.success : theme.colors.attention)}
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 17px;
`

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`
