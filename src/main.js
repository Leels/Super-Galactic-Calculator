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

    $("#mercury").click(function() {
    $("#mercury p").toggle();
  });
  $("#venus").click(function() {
    $("#venus p").toggle();
  });
  $("#earth").click(function() {
    $("#earth p").toggle();
  });
  $("#mars").click(function() {
    $("#mars p").toggle();
  });
  $("#jupiter").click(function() {
    $("#jupiter p").toggle();
  });
  $("#saturn").click(function() {
    $("#saturn p").toggle();
  });
  $("#uranus").click(function() {
    $("#uranus p").toggle();
  });
  $("#neptune").click(function() {
    $("#neptune p").toggle();
  });
  $("#pluto").click(function() {
    $("#pluto p").toggle();
  });

    $("#result").show();
    $("#earth-years").text(newGalacticAge.calculateEarthAge(birthdate));
    $("#mercury-years").text(newGalacticAge.calculateMercuryAge(birthdate));
    $("#venus-years").text(newGalacticAge.calculateVenusAge(birthdate));
    $("#mars-years").text(newGalacticAge.calculateMarsAge(birthdate));
    $("#jupiter-years").text(newGalacticAge.calculateJupiterAge(birthdate));
    $("#saturn-years").text(newGalacticAge.calculateSaturnAge(birthdate));

  });
});
