import { useEffect, useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import { Button } from '../UI/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { StyledLink} from './style';
import { PulsingBtn } from '../Shortener/style';

export const LinkItem = ({ link, deleteUrl }) => {
	const [copied, setCopied] = useState(false);
	const { id, full_link, short_link } = link;

	const shortOriginalLink = (url) => {
		return url.length > 20 ? url.slice(0, 25) + '...' : url;
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false);
			console.log(copied);
		}, 1000);
		return () => clearTimeout(timer);
	}, [copied]);

	const isCopied = copied ? (
		<PulsingBtn children='Copied!' />
	) : (
		<Button onClick={() => setCopied(true)} children='Copy' />
	);

	return (
		<StyledLink key={id}>
			<span> {shortOriginalLink(full_link)}</span>
			<a href={full_link} rel='noreferrer' target='_blank'>
				{short_link}
			</a>
			<div>
				<CopyToClipboard text={short_link}>{isCopied}</CopyToClipboard>
				<FiTrash2 size={'1.4rem'} onClick={() => deleteUrl(id)} />
			</div>


		</StyledLink>
	);
};
