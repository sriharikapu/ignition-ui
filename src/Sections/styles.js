
export const FONT_SIZE = 20;

const background = '#ffffff'
const heroBackground = 'rgba(41,69,125,.35)';

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function map(value, fromSource, toSource, fromTarget, toTarget) {
  return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
}

function getColour(startColour, endColour, min, max, value) {
  var startRGB = hexToRgb(startColour);
  var endRGB = hexToRgb(endColour);
  var percentFade = map(value, min, max, 0, 1);

  var diffRed = endRGB.r - startRGB.r;
  var diffGreen = endRGB.g - startRGB.g;
  var diffBlue = endRGB.b - startRGB.b;

  diffRed = (diffRed * percentFade) + startRGB.r;
  diffGreen = (diffGreen * percentFade) + startRGB.g;
  diffBlue = (diffBlue * percentFade) + startRGB.b;

  var result = "rgb(" + Math.round(diffRed) + ", " + Math.round(diffGreen) + ", " + Math.round(diffBlue) + ")";
  return result;
}

function changeBackgroundColour() {
  const count = (0 + 1) % 200;

  return getColour("#660066", "#000066", 0, 200, count);
}

const font = '#000000'

const brand = '';

export const header = (theme) => ({
  root: {
    minHeight: 62,
    top: 0,
    position: 'absolute',
    width: '90%',
    backgroundColor: 'transparent',
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
    //padding: '10px',
    cursor: 'pointer'
  },
  heading: {
    margin: '0px'
  }
});

export const hero = (theme) => ({
  root: {
    paddingTop: '40px',
    position: 'relative',
    height: '95vh',
    width: '100%',
    minHeight: '600px',
    backgroundColor: changeBackgroundColour(),
    color: font,
    '-webkit-align-items': 'center',
    '-ms-flex-align': 'center',
    'align-items': 'center',
    display: 'flex'
  },
  container: {
    zIndex: '100'
  },
  applyButton: {
    margin: 6,
  },
  buttonContainer: {
    width: '100%',
    // textAlign: 'center',
    margin: '40px auto',
    display: 'flex',
    zIndex: '100'
  },
  signUpContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
    zIndex: '101'
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
  particles: {
    position: 'absolute',
    top: 0,
    height: 600,
    width: '100%',
    background: 'transparent !important',
    zIndex: '0'
  },
  dialog: {
    width: '100%',
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