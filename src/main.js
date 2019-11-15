// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticAge } from './backend.js';

const newGalacticAge = new GalacticAge("September 19, 1987");

newGalacticAge.calculateEarthAge();
newGalacticAge.calculateMercuryAge();
newGalacticAge.calculateVenusAge();
newGalacticAge.calculateMarsAge();
newGalacticAge.calculateJupiterAge();
