import axios from 'axios';
import { useState, useEffect } from 'react';
export const useFetch = async (url) => {
	const [shortUrl, setShortUrl] = useState(null);
	const [isLoading, setIsLoading] = useState('');
	const [errorMessage, setErrorMessage] = useState(false);
	const [apiError, setApiError] = useState(false);

	const regex =
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	if (url.match(regex)) {
		setIsLoading(true);
		axios(`https://api.shrtco.de/v2/shorten?url=${url}`)
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

	return { shortUrl, isLoading, errorMessage, apiError };
};
