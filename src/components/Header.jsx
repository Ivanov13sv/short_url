import styled from 'styled-components';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { Container } from './Container';

export const Header = () => {
	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world</Title>
				</Wrapper>
				<ModeSwitcher><IoMoon /> Light theme</ModeSwitcher>
			</Container>
		</HeaderEl>
	);
};


const HeaderEl = styled.header`

`;
const Wrapper = styled.div``;
const Title = styled.a.attrs({
	href: '/',
})``;
const ModeSwitcher = styled.div``;
