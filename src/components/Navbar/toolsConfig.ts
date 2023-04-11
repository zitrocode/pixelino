import {
  FaFile,
  FaSave,
  FaFolder,
  FaMousePointer,
  FaArrowsAlt,
  FaPen,
  FaEraser,
  FaFill,
  FaCircle,
  FaFilm,
  FaLayerGroup,
  FaSlidersH,
  FaQuestionCircle
} from 'react-icons/fa';

const toolConfig = [
  {
    file: {
      name: 'New file',
      icon: FaFile,
      action: () => console.log('New File')
    },
    save: {
      name: 'Save file',
      icon: FaSave,
      action: () => console.log('Save file')
    },
    folder: {
      name: 'Load file',
      icon: FaFolder,
      action: () => console.log('Load file')
    }
  },
  {
    select: {
      name: 'Select',
      icon: FaMousePointer,
      action: () => console.log('Selection tool activated')
    },
    move: {
      name: 'Move',
      icon: FaArrowsAlt,
      action: () => console.log('Move tool activated')
    },
    pen: {
      name: 'Pencil',
      icon: FaPen,
      action: () => console.log('Pencil tool activated')
    },
    eraser: {
      name: 'Eraser',
      icon: FaEraser,
      action: () => console.log('Eraser tool activated')
    },
    fill: {
      name: 'Fill in',
      icon: FaFill,
      action: () => console.log('Filling tool activated')
    },
    circle: {
      name: 'Palette',
      icon: FaCircle,
      action: () => console.log('Color palette tool activated')
    }
  },
  {
    film: {
      name: 'Animation',
      icon: FaFilm,
      action: () => console.log('Animation tool activated')
    },
    layerGroup: {
      name: 'Layers',
      icon: FaLayerGroup,
      action: () => console.log('Layer tool activated')
    },
    sliders: {
      name: 'Settings',
      icon: FaSlidersH,
      action: () => console.log('Adjustment tool activated')
    },
    help: {
      name: 'Help',
      icon: FaQuestionCircle,
      action: () => console.log('Help tool activated')
    }
  }
];

export default toolConfig;
