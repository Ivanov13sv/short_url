import { BsToggles } from 'react-icons/bs';
import styled from 'styled-components';

export const Toggler = ({ theme, toggleTheme }) => {
	return (
		<StyledToggler>
			<input type='checkbox' checked={theme === 'dark' ? true: false}/>
			<span onClick={() => toggleTheme(!theme)} />
		</StyledToggler>
	);
};

const StyledToggler = styled.label`
	position: absolute;
	right: 8%;
	top: 5%;
	z-index: 2;
	display: inline-block;
	width: 60px;
	height: 34px;
    border-radius: 1rem;
	overflow: hidden;
	input {
		-webkit-appearance: none;
		position: absolute;
		&:checked + span:before {
			transform: translateX(26px);
		}
		&:checked + span {
			background-color: #c9c9c9;
		}
	}
	span {
		border-radius: 1rem;
		position: absolute;
		cursor: pointer;
		background-color: #666666;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: 0.4s;
		&:before {
			border-radius: 50%;
			content: '';
			position: absolute;
			left: 4px;
			height: 26px;
			width: 26px;
			bottom: 4px;
			background: white;
			transition: 0.4s;
		}
	}
`;
