import { createMuiTheme } from '@material-ui/core/styles';

export const mainFont = 'Lato';
export const secondaryFont = 'sans-serif';

const palette = {
  background: {
    main: '#FFFFFF'
  }
};

const getTheme = () => {
  return createMuiTheme({
    palette: palette,
    typography: {
      fontFamily: [mainFont, secondaryFont],
      useNextVariants: true,
    }
  });
};

export default getTheme;
