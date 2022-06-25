$(document).ready(function() {
    $("#formOne").submit(function(event){
        const cardinalpointInput = $("#cardinalpoint").val();
        const yearInput =     $("#year").val();
        const numberInput =   $("#number").val();
        const dateInput =     $("#date").val();
        const year2Input =    $("#year2").val();
        const number1Input =  $("#number1").val();
        const number2Input =  $("#number2").val();
        const country1Input = $("#country1").val();
        const country2Input = $("#country2").val();
        const country3Input = $("#country3").val();
        const country4Input = $("#country4").val();
        const country5Input = $("#country5").val();
        const capitalInput =  $("#capital").val();



        $(".cardinalpoint").text(cardinalpointInput);
        $(".year").text(yearInput);
        $(".number").text(numberInput);
        $(".date").text(dateInput);
        $(".year2").text(year2Input);
        $(".number1").text(number1Input);
        $(".number2").text(number2Input);
        $(".country1").text(country1Input);
        $(".country2").text(country2Input);
        $(".country3").text(country3Input);
        $(".country4").text(country4Input);
        $(".country5").text(country5Input);
        $(".capital").text(capitalInput);

        $("#story").show();

        event.preventDefault();
        



    });



}) 