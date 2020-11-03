import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'sans-serif'
  },
  'body': {
    'background': '#000'
  },
  'hero': {
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'overflow': 'hidden'
  },
  'inner': {
    'margin': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 100 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'height': [{ 'unit': 'px', 'value': 500 }],
    'backgroundImage': 'url(backlit-dawn.jpg)',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'position': 'relative',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.4)' }]
  },
  'topnav': {
    // background-color: #333;
    'overflow': 'hidden'
  },
  // Style the links inside the navigation bar
  'topnav a': {
    'float': 'right',
    'color': '#f2f2f2',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }],
    'textDecoration': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 17 }]
  },
  // Change the color of links on hover
  'topnav a:hover': {
    'backgroundColor': '#ddd',
    'color': 'black'
  },
  // Add a color to the active/current link
  'topnav aactive': {
    'backgroundColor': '#4CAF50',
    'color': 'white'
  },
  'inner h1 a': {
    'width': [{ 'unit': 'px', 'value': 450 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'position': 'absolute',
    'textDecoration': 'none',
    'transform': 'translateX(-50%) translateY(-50%)',
    'WebkitTransform': 'translateX(-50%) translateY(-50%)',
    'MozTransform': 'translateX(-50%) translateY(-50%)',
    'MsTransform': 'translateX(-50%) translateY(-50%)',
    'OTransform': 'translateX(-50%) translateY(-50%)'
  },
  'hero topnav': {
    'float': 'right'
  }
});
