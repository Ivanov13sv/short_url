import { ThemeProvider } from 'styled-components';
import { useThemeChanger } from './hooks/useThemeChanger';
import { GlobalStyles, lightTheme, darkTheme } from './globalStyles';
import { Shortener } from './components/Shortener';
import { Toggler } from './components/UI/Toggler';

function App() {
	const [theme, toggleTheme] = useThemeChanger();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<Toggler theme={theme} toggleTheme={toggleTheme} />
			<Shortener />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
