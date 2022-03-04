import styled from 'styled-components';

export const Button = (props) => <StyledButton {...props} />;



const StyledButton = styled.button`
	height: 2.8rem;
	border-radius: 0.5rem;
	border: none;
	padding: 0 1rem;
	background: ${({theme}) => theme.colorElem};
	font-size: var(--fs-sm);
	font-weight: var(--fw-light);
	letter-spacing: 0.08rem;
	color: #e4e5e7;
	width: 100%;
	transition: background-color .1s;
	cursor: pointer;
	@media (min-width: 680px) {
		:hover {
			background: #025757;
		}
		:active {
			background: #024141;
		}
	}
`;
