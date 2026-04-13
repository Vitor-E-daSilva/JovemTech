var hidden = document.getElementsByClassName("third-a");

/*Eu não sei como fazer esse código menos repetitivo/mais eficiente*/

function show(thing) {
    thing.classList.remove("hidden");
}

var know1 = document.getElementById("know1");
var know2 = document.getElementById("know2");
var know3 = document.getElementById("know3");
var know4 = document.getElementById("know4");
var know5 = document.getElementById("know5");
var know6 = document.getElementById("know6");
var exp1 = document.getElementById("exp1");

var know1b = document.getElementById("know1b");
var know2b = document.getElementById("know2b");
var know3b = document.getElementById("know3b");
var know4b = document.getElementById("know4b");
var know5b = document.getElementById("know5b");
var know6b = document.getElementById("know6b");
var exp1b = document.getElementById("exp1b");

know1.addEventListener("click", function() {
    show(know1b);
});
know2.addEventListener("click", function() {
    show(know2b);
});
know3.addEventListener("click", function() {
    show(know3b);
});
know4.addEventListener("click", function() {
    show(know4b);
});
know5.addEventListener("click", function() {
    show(know5b);
});
know6.addEventListener("click", function() {
    show(know6b);
});
exp1.addEventListener("click", function() {
    show(exp1b);
});

var Hskill1 = document.getElementById("Hskill1")
var Hskill2 = document.getElementById("Hskill2")
var Hskill3 = document.getElementById("Hskill3")
var Hskill4 = document.getElementById("Hskill4")
var Sskill1 = document.getElementById("Sskill1")
var Sskill2 = document.getElementById("Sskill2")
var Sskill3 = document.getElementById("Sskill3")
var Sskill4 = document.getElementById("Sskill4")
var Sskill5 = document.getElementById("Sskill5")

var Hskill1b = document.getElementById("Hskill1b")
var Hskill2b = document.getElementById("Hskill2b")
var Hskill3b = document.getElementById("Hskill3b")
var Hskill4b = document.getElementById("Hskill4b")
var Sskill1b = document.getElementById("Sskill1b")
var Sskill2b = document.getElementById("Sskill2b")
var Sskill3b = document.getElementById("Sskill3b")
var Sskill4b = document.getElementById("Sskill4b")
var Sskill5b = document.getElementById("Sskill5b")

Hskill1.addEventListener("click", function() {
    show(Hskill1b);
});
Hskill2.addEventListener("click", function() {
    show(Hskill2b);
});
Hskill3.addEventListener("click", function() {
    show(Hskill3b);
});
Hskill4.addEventListener("click", function() {
    show(Hskill4b);
});
Sskill1.addEventListener("click", function() {
    show(Sskill1b);
});
Sskill2.addEventListener("click", function() {
    show(Sskill2b);
});
Sskill3.addEventListener("click", function() {
    show(Sskill3b);
});
Sskill4.addEventListener("click", function() {
    show(Sskill4b);
});
Sskill5.addEventListener("click", function() {
    show(Sskill5b);
});

function hide() {
    know1b.classList.add("hidden");
    know2b.classList.add("hidden");
    know3b.classList.add("hidden");
    know4b.classList.add("hidden");
    know5b.classList.add("hidden");
    know6b.classList.add("hidden");
    exp1b.classList.add("hidden");
    Hskill1b.classList.add("hidden");
    Hskill2b.classList.add("hidden");
    Hskill3b.classList.add("hidden");
    Hskill4b.classList.add("hidden");
    Sskill1b.classList.add("hidden");
    Sskill2b.classList.add("hidden");
    Sskill3b.classList.add("hidden");
    Sskill4b.classList.add("hidden");
    Sskill5b.classList.add("hidden");
}

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b10 = document.getElementById("b10");
var b11 = document.getElementById("b11");
var b12 = document.getElementById("b12");
var b13 = document.getElementById("b13");
var b14 = document.getElementById("b14");
var b15 = document.getElementById("b15");
var b16 = document.getElementById("b16");

b1.addEventListener("click", function() {
    hide();
});
b2.addEventListener("click", function() {
    hide();
});
b3.addEventListener("click", function() {
    hide();
});
b4.addEventListener("click", function() {
    hide();
});
b5.addEventListener("click", function() {
    hide();
});
b6.addEventListener("click", function() {
    hide();
});
b7.addEventListener("click", function() {
    hide();
});
b8.addEventListener("click", function() {
    hide();
});
b9.addEventListener("click", function() {
    hide();
});
b10.addEventListener("click", function() {
    hide();
});
b11.addEventListener("click", function() {
    hide();
});
b12.addEventListener("click", function() {
    hide();
});
b13.addEventListener("click", function() {
    hide();
});
b14.addEventListener("click", function() {
    hide();
});
b15.addEventListener("click", function() {
    hide();
});
b16.addEventListener("click", function() {
    hide();
});