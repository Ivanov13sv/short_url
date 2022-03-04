import { useState } from 'react';

export const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [apiError, setApiError] = useState(false);
	const [newLink, setNewLink] = useState('');

	const fetching = async () => {
		try {
			setIsLoading(true);
			setIsError(false)
			const newLink = await callback();
			setNewLink(newLink)
		} catch {
			setApiError(true)
		} finally {
			setIsLoading(false);
		}
	};

	return [fetching, isLoading, isError, setIsError, apiError, newLink];
};
