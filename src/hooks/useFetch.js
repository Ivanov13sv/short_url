import axios from 'axios';
import { useState } from 'react';
export const useFetch = (input) => {
	const [url, setUrl] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [apiError, setApiError] = useState(false);

	const fetching = () => {
		const regex =
			/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

		setLoading(true);
		axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
			.then(({ data }) => {
				const newShortUrl = {
					id: data.result.code,
					full_link: data.result.original_link,
					short_link: data.result.short_link,
				};
				setUrl(newShortUrl);
				setError(false);
				setApiError(false);
			})
			.catch(() => {
				setApiError(true);
			})
			.finally(() => setLoading(false));
	};

	return [fetching, url, loading, error, apiError];
};
