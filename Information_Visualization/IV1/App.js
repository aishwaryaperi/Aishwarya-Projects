import React, { useState } from 'react';
import movieData from './data/movie.json';
import ControlPanel from './components/ControlPanel';
import ScatterPlot from './components/ScatterPlot';
import TableView from './components/TableView';
import './App.css';

const colorOptions = [
  { value: 'none', label: 'none' },
  { value: 'genre', label: 'genre' },
  { value: 'creative_type', label: 'creative_type' },
  { value: 'source', label: 'source' },
  { value: 'release', label: 'release' },
  { value: 'rating', label: 'rating' }
];

const opacityOptions = [
  { value: 'none', label: 'none' },
  { value: 'us_gross', label: 'us_gross' },
  { value: 'worldwide_gross', label: 'worldwide_gross' },
  { value: 'rotten_rating', label: 'rotten_rating' },
  { value: 'imdb_rating', label: 'imdb_rating' },
  { value: 'imdb_votes', label: 'imdb_votes' }
];

const sizeOptions = [
  { value: 'none', label: 'none' },
  { value: 'us_gross', label: 'us_gross' },
  { value: 'worldwide_gross', label: 'worldwide_gross' },
  { value: 'rotten_rating', label: 'rotten_rating' },
  { value: 'imdb_rating', label: 'imdb_rating' },
  { value: 'imdb_votes', label: 'imdm_votes' }
];

const axisOptions = [
  { value: 'budget', label: 'budget' },
  { value: 'us_gross', label: 'us_gross' },
  { value: 'worldwide_gross', label: 'worldwide_gross' },
  { value: 'rotten_rating', label: 'rotten_rating' },
  { value: 'imdb_rating', label: 'imdb_rating' },
  { value: 'imdb_votes', label: 'imdb_votes' }
];

const App = () => {
  const [xAttr, setXAttr] = useState(axisOptions[0]);
  const [yAttr, setYAttr] = useState(axisOptions[1]);
  const [colorAttr, setColorAttr] = useState(colorOptions[0]);
  const [opacityAttr, setOpacityAttr] = useState(opacityOptions[0]);
  const [sizeAttr, setSizeAttr] = useState(sizeOptions[0]);
  const [selectedData, setSelectedData] = useState([]);

  return (
    <div className='container'>
      <ControlPanel
        xAttr={xAttr} setXAttr={setXAttr}
        yAttr={yAttr} setYAttr={setYAttr}
        colorAttr={colorAttr} setColorAttr={setColorAttr}
        opacityAttr={opacityAttr} setOpacityAttr={setOpacityAttr}
        sizeAttr={sizeAttr} setSizeAttr={setSizeAttr}
        axisOptions={axisOptions} 
        colorOptions={colorOptions} 
        opacityOptions={opacityOptions} 
        sizeOptions={sizeOptions} 
      />
      <ScatterPlot 
        data={movieData} 
        xAttr={xAttr} 
        yAttr={yAttr} 
        colorAttr={colorAttr} 
        opacityAttr={opacityAttr} 
        sizeAttr={sizeAttr} 
        setSelectedData={setSelectedData} 
      />
      <TableView selectedData={selectedData} />
    </div>
  );
};

export default App; 


