import axios from 'axios';
import { useState, useEffect } from 'react';

export const useShortUrl = () => {
	const [shortUrl, setShortUrl] = useState(null);
	const [errorMessage, setErrorMessage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState(false);

	const fetching = (input) => {
		const regex =
			/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

		if (input.match(regex)) {
			setIsLoading(true);
			axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
				.then(({ data }) => {
					const newShortUrl = {
						id: data.result.code,
						full_link: data.result.original_link,
						short_link: data.result.short_link,
					};
					setShortUrl(newShortUrl);
					setErrorMessage(false);
					setApiError(false);
				})
				.catch(() => {
					setApiError(true);
				})
				.finally(() => setIsLoading(false));
		} else {
			setErrorMessage(true);
		}
	};

	return { fetching, shortUrl, errorMessage, isLoading, apiError };
};
