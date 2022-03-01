import axios from 'axios';
import { useState,useEffect } from 'react';
export const useFetch = async (url) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState('');
	const [isError, setIsError] = useState('');

	useEffect(() =>{
		setIsLoading('loading...')
		axios.get(url).then(res =>{
			setIsLoading(false);
			setData(res.data);
		}).catch(err =>{
			setIsLoading(false);
			setIsError('An error');
		})
	},[url])
    return {data, isLoading, isError}
};
