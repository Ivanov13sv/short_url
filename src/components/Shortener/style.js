import styled, {keyframes} from 'styled-components';
import { Button } from '../UI/Button';

export const Title = styled.h1`
	text-align: center;
	font-weight: var(--fw-normal);
	font-size: var(--fs-subtitle);
	/* color: ${({ theme }) => theme.colorTextMain}; */
	color: #026868;
	margin: 0 0 1rem 0;
	@media (min-width: 680px) {
		font-size: var(--fs-title);
	}
`;

export const ShortenerWrapper = styled.div`
	background: ${({ theme }) => theme.colorUi};
	margin: 6rem 0 2rem 0;
	padding: 1rem;
	border-radius: 1rem;
	/* margin-bottom: 2rem; */
	@media (min-width: 680px) {
		padding: 2rem;
		margin-top: 14rem;
	}
	position: relative;
`;

export const ShortenerBody = styled.form`
	display: flex;
	flex-direction: column;

	h2 {
		color: ${({ theme }) => theme.colorTextMain};
	}
	> *:not(:last-child) {
		margin: 0 0 1rem 0;
	}
	button {
		align-self: center;
	}
	@media (min-width: 680px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 0;
		button {
			flex: 0 0 15%;
			height: 3.65rem;
			border-radius: 0px 0.5rem 0.5rem 0px / 0px 0.5rem 0.5rem 0px;
		}

		input {
			border-radius: 0.5rem 0px 0px 0.5rem / 0.5rem 0px 0px 0.5rem;
		}
		> *:not(:last-child) {
			margin: 0;
		}
	}
`;

export const LinksBlock = styled.ul`
	width: 100px:
	height: 100px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;

`;

const pulsing = keyframes`
0%{
	box-shadow: teal 0 0 0 0;
}
75%{
	box-shadow: #ff69b400 0 0 0 .7rem;
}
`
const errorPulsing = keyframes`
0%{
	box-shadow: #b39c3a 0 0 0 0;
}
75%{
	box-shadow: #b39c3a00 0 0 0 1rem;
}
`

export const Circle = styled.div`
height: 24px;
width: 24px;
border-radius: 50%;
background-color: #ff69b4;
animation: ${pulsing} 1500ms infinite; 
`

export const PulsingBtn = styled(Button)`
animation: ${pulsing} 1500ms infinite; 
`
export const ErrorBtn = styled(Button)`
animation: ${errorPulsing} 1500ms infinite; 
`

export const ErrorMessage = styled.div`
color: #ff0000;
position: fixed;
top: 3.1rem;
right: 30px;
`

