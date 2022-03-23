import { useEffect } from 'react';
import { Container } from '../Container';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { LinkItem } from '../LinkItem';
import { ApiError } from '../UI/ApiError';
import ShortenerService from '../API/ShortenerService';
import { useFetching } from '../../hooks/useFetching';
import { useInput } from '../../hooks/useInput';

import {
	ShortenerWrapper,
	Title,
	ShortenerBody,
	LinksBlock,
	PulsingBtn,
	ErrorBtn,
} from './style';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Shortener = () => {
	
	const [input, onChange, setValue] = useInput();
	const [shortLinks, setShortLinks] = useLocalStorage('shortUrls', [])
	const [fetching, isLoading, isError, setIsError, apiError] = useFetching(
		async () => {
			const response = await ShortenerService.getShortUrl(input);
			const newShortUrl = {
				id: response.result.code,
				full_link: response.result.original_link,
				short_link: response.result.short_link,
			};
			const uniqUrl = shortLinks.some(
				(item) => item.id === response.result.code
			);
			!uniqUrl && setShortLinks([...shortLinks, newShortUrl]);
		}
	);

	const deleteUrl = (id) => {
		setShortLinks(shortLinks.filter((item) => item.id !== id));
	};

	const getUrl = (e) => {
		e.preventDefault();
		fetching();
		setValue('')
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

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsError(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [isError, setIsError]);

	return (
		<Container>
			{apiError && <ApiError />}
			<ShortenerWrapper onSubmit={getUrl}>
				<Title>Short URL</Title>
				<ShortenerBody>
					<Input value={input} onChange={onChange} placeholder='example.com' />
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
