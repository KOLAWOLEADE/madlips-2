$(document).ready(function() {
    $(".formone").submit(function(event){
        event.preventdefault();
        const cardinalpointinput = $("input#cardinalpoint").val();
        const yearinput = $("input#year").val();
        const numberinput = $("input#number").val();
        const dateinput = $("input#date").val();
        const year2input = $("input#year2").val();
        const number1input = $("input#number2").val();
        const number2input = $("input#number2").val();
        const country1input = $("input#country1").val();
        const country2input = $("input#country2").val();
        const country3input = $("input#country3").val();
        const country4input = $("input#country4").val();
        const country5input = $("input#country5").val();
        const capitalinput = $("input#capital").val();



        $(".cardinalpoint").text(cardinalpointinput);
        $(".year").text(yearinput);
        $(".number").text(numberinput);
        $(".date").text(dateinput);
        $(".year2").text(year2input);
        $(".number1").text(number1input);
        $(".number2").text(number2input);
        $(".country1").text(country1input);
        $(".country2").text(country2input);
        $(".country3").text(country3input);
        $(".country4").text(country4input);
        $(".country5").text(country5input);
        $(".capital").text(capitalinput);

        $("#story").show();



    })

    })