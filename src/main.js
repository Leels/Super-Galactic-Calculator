import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticAge } from './backend.js';

$(document).ready(function() {
  $("form#find-galactic-age").submit(function(event) {
    event.preventDefault();
    const birthdate = $("input#birthdate").val();
    const newGalacticAge = new GalacticAge(birthdate);
    $("#result").show();
    $("#earth-years").text(newGalacticAge.calculateEarthAge(birthdate));
    $("#mercury-years").text(newGalacticAge.calculateMercuryAge(birthdate));
    $("#venus-years").text(newGalacticAge.calculateEarthAge(birthdate));
    $("#mars-years").text(newGalacticAge.calculateMarsAge(birthdate));
    $("#jupiter-years").text(newGalacticAge.calculateJupiterAge(birthdate));

  });
});
