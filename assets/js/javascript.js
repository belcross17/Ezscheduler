// global variables
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var todaysDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var todaysHour = moment().format('h:mm:ss a');

var hour = moment().hours();
var userInput;
var hourSpan;

//function to set day and hour 
var setInt = setInterval(function() {
    var now = moment();
    $('#todaysDay').html(now.format('YYYY MMMM DD') + ' ' + now.format('dddd') .substring(0,3).toUpperCase());
    $('#todaysDay').html(todaysDate + " " + now.format('hh:mm:ss A')); 
}, 100);

//function to load from localStorage
function start() {
    var start9 = JSON.parse(localStorage.getItem("09:00 AM"));
    nineAm.val(start9);

    var start10 = JSON.parse(localStorage.getItem("10:00 AM"));
    tenAm.val(start10);

    var start11 = JSON.parse(localStorage.getItem("11:00 AM"));
    elevenAm.val(start11);

    var start12 = JSON.parse(localStorage.getItem("12:00 PM"));
    twelvePm.val(start12);

    var start1 = JSON.parse(localStorage.getItem("01:00 PM"));
    onePm.val(start1);

    var start2 = JSON.parse(localStorage.getItem("02:00 PM"));
    twoPm.val(start2);

    var start3 = JSON.parse(localStorage.getItem("03:00 PM"));
    threePm.val(start3);

    var start4 = JSON.parse(localStorage.getItem("04:00 PM"));
    fourPm.val(start4);

    var start5 = JSON.parse(localStorage.getItem("05:00 PM"));
    fivePm.val(start5);
}

//funtiong to add class to hours depending on time
function textArea() {
    $(".form-control").each(function () {
        var test = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(test);
        console.log(hour);
  //      console.log(this);
        if (hour > test) {
            $(this).addClass("past");
        } else if (hour < test) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

  //startup function
  $(document).ready(function(){
    start()
    textArea()

    //function to save to localStorage
    $(".saveBtn").on("click", function(){
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
      })

    //function to clear entire schedule
    $("#clearDay").on("click", function(){
        localStorage.clear();
        start()
      }); 
  });
