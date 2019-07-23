import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'background': '#666666',
    'fontFamily': 'sans-serif'
  },
  // #img-box {
    position: relative;
}
  '#img-box img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'absolute'
  },
  'small': {
    'transition': '.5s',
    'WebkitTransition': '.5s',
    'MozTransition': '.5s',
    'MsTransition': '.5s',
    'OTransition': '.5s',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': '%V', 'value': 0.6 }],
    'left': [{ 'unit': '%H', 'value': 0.2 }],
    'top': [{ 'unit': '%V', 'value': 0.19 }],
    'position': 'absolute',
    'transform': 'perspective(600px) rotateX(-1.98deg) rotateY(29.99deg) scale3d(1, 1, 1)',
    'WebkitTransform': 'perspective(600px) rotateX(-1.98deg) rotateY(29.99deg) scale3d(1, 1, 1)',
    'MozTransform': 'perspective(600px) rotateX(-1.98deg) rotateY(29.99deg) scale3d(1, 1, 1)',
    'MsTransform': 'perspective(600px) rotateX(-1.98deg) rotateY(29.99deg) scale3d(1, 1, 1)',
    'OTransform': 'perspective(600px) rotateX(-1.98deg) rotateY(29.99deg) scale3d(1, 1, 1)'
  },
  'imageList': {
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'right': [{ 'unit': '%H', 'value': 0.05 }],
    'top': [{ 'unit': '%V', 'value': 0.32 }],
    'position': 'absolute',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'imageList ul': {
    'left': [{ 'unit': '%H', 'value': 0.3 }],
    'position': 'absolute'
  },
  'imageList ul li': {
    'cursor': 'pointer',
    'listStyle': 'none',
    'color': 'white',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'shadow1': {
    'top': [{ 'unit': '%V', 'value': 0.1 }],
    'left': [{ 'unit': '%H', 'value': -0.06 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'height': [{ 'unit': '%V', 'value': 0.8 }],
    'position': 'absolute',
    'background': 'rgba(255, 255, 255, 0.6)'
  },
  'shadow2': {
    'top': [{ 'unit': '%V', 'value': 0.16 }],
    'left': [{ 'unit': '%H', 'value': -0.11 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'height': [{ 'unit': '%V', 'value': 0.68 }],
    'position': 'absolute',
    'background': 'rgba(255, 255, 255, 0.3)'
  },
  'btn-box': {
    'zIndex': '10',
    'right': [{ 'unit': '%H', 'value': 0.03 }],
    'top': [{ 'unit': '%V', 'value': 0.03 }],
    'position': 'absolute',
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'px', 'value': 40 }]
  },
  'full': {
    'transition': '.5s',
    'WebkitTransition': '.5s',
    'MozTransition': '.5s',
    'MsTransition': '.5s',
    'OTransition': '.5s',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0 }],
    'transform': 'perspective(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    'WebkitTransform': 'perspective(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    'MozTransform': 'perspective(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    'MsTransform': 'perspective(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    'OTransform': 'perspective(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    'zIndex': '8'
  },
  // body {
    background: #6b18ff;
    font-family: sans-serif;
} 

#img-box {
    position: relative;
}

#img-box img {
    width: 100%;
    height: 100%;
    position: absolute;
}

.small {
    transition: .5s;
    width: 50%;
    height: 60%;
    left: 20%;
    top: 19%;
    position: absolute;
}

/*

 .imageList {
    width: 30%;
    right: 5%;
    top: 32%;
    position: absolute;
    font-size: 22px;
}

.imageList ul {
    left: 30%;
    position: absolute;
}

.imageList ul li {
    cursor: pointer;
    list-style: none;
    color: white;
    margin: 20px 0;
}
});
