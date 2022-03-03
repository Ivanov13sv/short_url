import styled from 'styled-components';

export const ApiError = () => {
	return (
		<StyledError>
			The link you entered is a disallowed link, for more infos see{' '}
			<a
				href='https://shrtco.de/disallowed'
				rel='noreferrer'
				target='_blank'
			>
				here
			</a>
            
		</StyledError>
	);
};

const StyledError = styled.div`
	/* color: ${({ theme }) => theme.colorTextMain}; */
	text-align: center;
	color: white;
	background: #b39c3a;
	padding: 1rem;
	a {
		color: blue;
	}
`;
