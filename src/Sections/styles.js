
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
  modalTitle: {
    textAlign: 'center'
  },
  modalBody: {
    height: '100%',
    minWidth: '400px',
    padding: '0px 50px 50px'
  },
  textField: {
    width: '100%'
  },
  actionContainer: {
    marginTop: '-20px',
    padding: '0px 50px 10px'
  },
  distContainer: {
    display: 'flex',
  },
  distLabel: {
    width: '200px'
  },
  distField: {
    width: '200px',
    right: 0
  }
});
