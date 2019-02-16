
export const FONT_SIZE = 20;

const background = '#ffffff'
const heroBackground = 'rgba(41,69,125,.35)';

const font = '#000000'

const brand = '';

export const header = (theme) => ({
  root: {
    minHeight: 62,
    top: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent !important',
    color: font,
    padding: '5px 25px',
    zIndex: 1
  },
  container: {
    maxWidth: 1068,
    margin: 'auto',
    textAlign: 'center'
  },
  logoContainer: {
    fontSize: 30,
    padding: '10px',
    cursor: 'pointer'
  }
});

export const hero = (theme) => ({
  root: {
    paddingTop: '40px',
    position: 'relative',
    height: '81vh',
    width: '100%',
    minHeight: '600px',
    backgroundColor: heroBackground,
    color: font,
    '-webkit-align-items': 'center',
    '-ms-flex-align': 'center',
    'align-items': 'center',
    display: 'flex'
  },
  container: {
    // marginTop: '150px'
  },
  applyButton: {
    margin: 6,
  },
  buttonContainer: {
    width: '100%',
    // textAlign: 'center',
    margin: '40px auto',
    display: 'flex'
  },
  signUpContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px'
  },
  centered: {
    width: '100%',
    textAlign: 'center'
  },
  orText: {
    marginTop: 20
  },
  modalBody: {
    height: '400px',
    width: '100%',
    padding: '100px'
  },
  dialog: {
    width: '100%',
  }
});
