import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticAge } from './backend.js';

$(document).ready(function() {
  $("form#find-galactic-age").submit(function(event) {
    event.preventDefault();
    const birthdate = $("input#birthdate").val();
    const sex = $('input[name=sex]:checked').val();
    const smoker = $('input[name=smoker]:checked').val();
    const newGalacticAge = new GalacticAge(birthdate, sex, smoker);

    newGalacticAge.calculateYearsLeft(sex, smoker);

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

    $("#find-galactic-age").hide();
    $("#result").show();
    $("#earth-years").text(newGalacticAge.calculateEarthAge(birthdate));
    $("#earth-years-left").text(newGalacticAge.calculateEarthYearsLeft(birthdate));
    $("#mercury-years").text(newGalacticAge.calculateMercuryAge(birthdate));
    $("#mercury-years-left").text(newGalacticAge.calculateMercuryYearsLeft(birthdate));
    $("#venus-years").text(newGalacticAge.calculateVenusAge(birthdate));
    $("#venus-years-left").text(newGalacticAge.calculateVenusYearsLeft(birthdate));
    $("#mars-years").text(newGalacticAge.calculateMarsAge(birthdate));
    $("#mars-years-left").text(newGalacticAge.calculateMarsYearsLeft(birthdate));
    $("#jupiter-years").text(newGalacticAge.calculateJupiterAge(birthdate));
    $("#jupiter-years-left").text(newGalacticAge.calculateJupiterYearsLeft(birthdate));
    $("#saturn-years").text(newGalacticAge.calculateSaturnAge(birthdate));
    $("#saturn-years-left").text(newGalacticAge.calculateSaturnYearsLeft(birthdate));

  });
});
