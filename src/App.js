import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useThemeChanger } from './hooks/useThemeChanger';
import { GlobalStyles, lightTheme, darkTheme } from './globalStyles';
import { Shortener } from './components/Shortener';

function App() {
	const [theme, toggleTheme] = useThemeChanger();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={darkTheme}>
						
			<Wrapper>

				<Shortener />
			</Wrapper>
			
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;

const Wrapper = styled.div`
	height: 100vh;
	/* display: flex; */
	/* align-items: center; */
	/* justify-content: center; */
	/* flex-direction: column; */
`;
