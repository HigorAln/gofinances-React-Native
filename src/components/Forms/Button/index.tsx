import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
	title: string;
}

export function Button({ title, ...rest }: Props) {
	return (
		<Container {...rest} activeOpacity={0.6}>
			<Title>{title}</Title>
		</Container>
	);
}
