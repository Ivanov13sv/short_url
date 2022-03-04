import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{

        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.colorBg};
        color: ${({ theme }) => theme.colorTextMain};
        font-family: var(--family);
        transition: all .5s;

    }
`;

export const lightTheme = {
	colorBg: '#e4e5e7',
	colorTextMain: '#e4e5e7',
	colorUi: '#45484e',
    colorElem: '#119797',
    colorTitle: '#e4e5e7',
    colorLink: '#ffd400'
};

export const darkTheme = {
	colorBg: '#2f3237',
	colorTextMain: '#2f3337',
	colorUi: '#d9d9d9',
    colorElem: 'teal',
    colorTitle: 'teal',
    colorLink: '#0066ff'
};
