import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { TransactionType } from '../../components/Forms/TransactionTypeButton';
import { TransactionsTypes } from './styles';
import { Container, Header, Title, Form, Fields } from './styles';

import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Forms/InputForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
	[name: string]: string;
}

const schema = yup.object().shape({
	name: yup.string().required('Nome e obrigatorio'),
	amount: yup
		.number()
		.typeError('Informe um valor numerico')
		.positive('O valor nao pode ser negativo'),
});

export function Register() {
	const [transactionType, setTransactionType] = useState('');
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [category, setCategory] = useState({
		key: 'category',
		name: 'Categoria',
	});

	function handleTransactionsTypeSelect(type: 'up' | 'down') {
		setTransactionType(type);
	}

	function handleOpenSelectCategoryModal() {
		setCategoryModalOpen(true);
	}

	function handleCloseSelectCategoryModal() {
		setCategoryModalOpen(false);
	}

	function handleRegister(form: FormData) {
		if (!transactionType) return Alert.alert('Selecione o tipo de transação');

		if (category.key === 'category')
			return Alert.alert('Selecione uma categoria');

		const data = {
			name: form.name,
			amount: form.amount,
			transactionType,
			category: category.name,
		};

		console.log(data);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<Header>
					<Title>Cadastro</Title>
				</Header>

				<Form>
					<Fields>
						<InputForm
							control={control}
							name="name"
							placeholder="Nome"
							autoCapitalize="sentences"
							autoCorrect={false}
							error={errors.name && errors.name.message}
						/>
						<InputForm
							control={control}
							name="amount"
							placeholder="Preco"
							keyboardType="numeric"
							error={errors.amount && errors.amount.message}
						/>

						<TransactionsTypes>
							<TransactionType
								type="up"
								title="Income"
								onPress={() => handleTransactionsTypeSelect('up')}
								isActive={transactionType === 'up'}
							/>
							<TransactionType
								type="down"
								title="Outcome"
								onPress={() => handleTransactionsTypeSelect('down')}
								isActive={transactionType === 'down'}
							/>
						</TransactionsTypes>

						<CategorySelectButton
							onPress={handleOpenSelectCategoryModal}
							title={category.name}
						/>
					</Fields>

					<Button title="Enviar" onPress={handleSubmit(handleRegister)} />
				</Form>

				<Modal visible={categoryModalOpen} animationType="slide">
					<CategorySelect
						closeSelectCategory={handleCloseSelectCategoryModal}
						setCategory={setCategory}
						category={category}
					/>
				</Modal>
			</Container>
		</TouchableWithoutFeedback>
	);
}
