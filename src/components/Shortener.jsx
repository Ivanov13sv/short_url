import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { Input } from './UI/Input';
import { Button } from './UI/Button';
import { LinkItem } from './LinkItem';
import axios from 'axios';
export const Shortener = ({ theme, toggleTheme }) => {
	const [input, setInput] = useState('');
	const [shortLinks, setShortLinks] = useState([]);

	const onChange = (e) => {
		setInput(e.target.value.toLowerCase());
	};

	const deleteUrl = id =>{
		setShortLinks(shortLinks.filter(item => item.id !== id));

	}

	const getShorUrl = (e) => {
		e.preventDefault();
		const regex =
			/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
		if (input.match(regex)) {
			axios(`https://api.shrtco.de/v2/shorten?url=${input}`).then(
				({ data }) => {
					console.log(data);

					const uniqUrl = shortLinks.some(
						(item) => item.id === data.result.code
					);
					!uniqUrl &&
						setShortLinks([
							...shortLinks,
							{
								id: data.result.code,
								full_link: data.result.original_link,
								short_link: data.result.short_link,
							},
						]);
				}
			);
			setInput('');
		}
	};

	return (
		<Container>
			<ShortenerWrapper onSubmit={getShorUrl}>
				<Title>Short URL</Title>
				<ShortenerBody>
					<Input
						value={input}
						onChange={onChange}
						placeholder='example.com'
					/>
					<Button>Shorten</Button>
				</ShortenerBody>
			</ShortenerWrapper>
			<LinksBlock>
				{shortLinks.map((item) => (
					<LinkItem key={item.id} link={item} deleteUrl={deleteUrl}/>
				))}
				<Button>Copy</Button>
			</LinksBlock>
		</Container>
	);
};

const Title = styled.h1`
	text-align: center;
	font-weight: var(--fw-normal);
	font-size: var(--fs-subtitle);
	/* color: ${({ theme }) => theme.colorTextMain}; */
	color: #026868;
	margin: 0 0 1rem 0;
	@media (min-width: 680px) {
		font-size: var(--fs-title);
	}
`;

const ShortenerWrapper = styled.div`
	background: ${({ theme }) => theme.colorUi};
	margin: 6rem 0 2rem 0;
	padding: 1rem;
	border-radius: 1rem;
	/* margin-bottom: 2rem; */
	@media (min-width: 680px) {
		padding: 2rem;
		margin-top: 14rem;
	}
`;

const ShortenerBody = styled.form`
	display: flex;
	flex-direction: column;

	h2 {
		color: ${({ theme }) => theme.colorTextMain};
	}
	> *:not(:last-child) {
		margin: 0 0 1rem 0;
	}
	button {
		align-self: center;
	}
	@media (min-width: 680px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 0;
		button {
			flex: 0 0 15%;
			height: 3.625rem;
			border-radius: 0px 0.5rem 0.5rem 0px / 0px 0.5rem 0.5rem 0px;
		}

		input {
			border-radius: 0.5rem 0px 0px 0.5rem / 0.5rem 0px 0px 0.5rem;
		}
		> *:not(:last-child) {
			margin: 0;
		}
	}
`;

const LinksBlock = styled.ul`
	width: 100px:
	height: 100px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;

`;
