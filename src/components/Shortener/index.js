import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { LinkItem } from '../LinkItem';
import { ApiError } from '../UI/ApiError';
import axios from 'axios';

import {
	ShortenerWrapper,
	Title,
	ShortenerBody,
	LinksBlock,
	PulsingBtn,
	ErrorBtn,
} from './style';


export const Shortener = ({ theme, toggleTheme }) => {

	const [input, setInput] = useState('');
	const [shortLinks, setShortLinks] = useState(() => {
		const savedUrls = localStorage.getItem('shortUrls');
		return savedUrls ? JSON.parse(savedUrls) : [];
	});

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState(false);



	useEffect(() => {
		const timer = setTimeout(() => {
			setIsError(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [isError]);

	useEffect(() => {
		localStorage.setItem('shortUrls', JSON.stringify(shortLinks));
	}, [shortLinks]);

	const onChange = (e) => {
		setInput(e.target.value.toLowerCase());
	};

	const deleteUrl = (id) => {
		setShortLinks(shortLinks.filter((item) => item.id !== id));
	};


	const getShorUrl = (e) => {
		e.preventDefault();
		const regex =
			/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
		if (input.match(regex)) {
			setIsLoading(true);
			axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
				.then(({ data }) => {
					const uniqUrl = shortLinks.some(
						(item) => item.id === data.result.code
					);
					const newShortUrl = {
						id: data.result.code,
						full_link: data.result.original_link,
						short_link: data.result.short_link,
					};
					!uniqUrl && setShortLinks([...shortLinks, newShortUrl]);
					setIsError(false);
					setApiError(false);
				})
				.catch(() => {
					setApiError(true);
				})
				.finally(() => setIsLoading(false));
			setInput('');
		} else {
			setIsError(true);
		}
	};

	const btnStatus = () => {
		if (isLoading) {
			return <PulsingBtn children='Loading' />;
		}
		if (isError) {
			return <ErrorBtn children='Wrong URL' />;
		}
		return <Button children='Shorten' />;
	};

	const button = btnStatus();

	return (
		<Container>
			{apiError && <ApiError />}
			<ShortenerWrapper
				onSubmit={getShorUrl}
			>
				<Title>Short URL</Title>
				<ShortenerBody>
					<Input
						value={input}
						onChange={onChange}
						placeholder='example.com'
					/>
					{button}
				</ShortenerBody>
				
			</ShortenerWrapper>
			<LinksBlock>
				{shortLinks.map((item) => (
					<LinkItem key={item.id} link={item} deleteUrl={deleteUrl} />
				))}
			</LinksBlock>
		</Container>
	);
};
