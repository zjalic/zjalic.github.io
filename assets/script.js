function init(){
    // Typing effect on banner
    banner();
    // Add Terminal line after banner
    addTerminalInput();
    // Disabled right click
    //document.addEventListener('contextmenu', event => event.preventDefault());
}
var bannerI = 0;
function banner() {
    var txt = "Hello, my name is Marko Zjalic. I have a Bachelor's degree in Computer Science\
        and I am currently working for a Exela Technologies as Software Developer. Type 'hi' for more."; 
  if (bannerI < txt.length) {
    document.getElementById("banner").innerHTML += txt.charAt(bannerI);
    bannerI++;
    setTimeout(banner, 20);
  }
}

function terminalCommand(command){
    addTerminalOutput(command);
    addTerminalInput();
}  

function addTerminalInput() {
    document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-input\"> > <input type=\"text\" class=\"caret\"" +
        " minlength=\"0\" maxlength=\"50\" size=\"50\"> </div>");
    
    $(".caret").focus();

    $(".caret").on('keyup', function (e) {

        if (e.key === 'Enter' || e.keyCode === 13) {
            var doc = $(".caret");
            doc.attr('disabled', 'disabled');
            doc.attr('class', 'caret-disabled');
            terminalCommand(doc.val());
        }
    });
        
}

function addTerminalOutput(command){
    if(command == "clear" || command == "cl"){
        $("#terminal-body").empty();
        return;
    }
    if(command == "hi" || command == "Hi" || command == "help"){
        let msg = "";
        if(command == "hi" || command == "Hi"){
            msg = "Hi, "
        }
        if(command == "help"){
            msg = "T";
        }
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        msg + "ype any of following command for more info about me <br><br>" +
        "<b>about</b> -  More info about me<br>" +
        "<b>exp</b> - Info about my work experience<br>" +
        "<b>education</b> - Info about my education<br>" +
        "<b>cv</b> - View my cv in pdf format<br>" +
        "<b>contact</b> - Contact (Email,Github,LinkedIn)<br>" +
        "<b>clear</b> - Clear terminal/command line<br>" +
        "<b>help</b> - List of commands<br>" +
        "</div><br>");
        return;
    }

    if(command == "education"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\"><br>" +
        "<b>Singidunum University - Bachelor of Science "       + spaces(8) +"2016 - 2020 "+spaces(2)+"(<a href=\"http:\/\/eng.singidunum.ac.rs\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>) </b><br><br>" +
        "<b>Electrical Engineering High School ”Nikola Tesla\” "+ spaces(2) +"2012 - 2016 "+spaces(2)+"(<a href=\"http:\/\/www.teslabg.edu.rs\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>)</b><br>" +
        "</div><br>");
        return;
    }

    if(command == "exp"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\"><br>" +
        spaces(6)+"<b>Company "                                   +spaces(32)+" Position "                           +spaces(30)+" Period </b><br><br>"                 +             
        "<b>Exela Technologies "                        +spaces(22)+" Software Developer "                 +spaces(19)+" From 06/21 To Present"  +spaces(2) +"(<a href=\"http:\/\/www.exelatech.com/\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>)</b><br><br>" +
        "<b>Engineering Ingegneria Infromatica Spa "    +spaces(2) +" Solution Developer "                 +spaces(19)+" From 01/20 To 05/21"    +spaces(4) +"(<a href=\"http:\/\/www.eng.it\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>) </b><br><br>" +
        "<b>Invej "                                     +spaces(35)+" System & Database Administrator "    +spaces(6)+" From 09/19 To 01/20"     +spaces(4) +"(<a href=\"http:\/\/www.invej.rs\/\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>)</b><br><br>" +
        "<b>Singidunum University "                     +spaces(19)+" IT Technician & Student Assistent "  +spaces(4)+" From 10/18 To 09/19"     +spaces(4) +"(<a href=\"http:\/\/eng.singidunum.ac.rs\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>)</b><br><br>" +
        "</div><br>");
        return;
    }

    if(command == "cv"){
        window.open("./assets/cv.pdf");
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        "cv.pdf is opened in new tab." +
        "</div>");
        return;
    }

    if(command == "about"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        "Hi, i am Marko, i am from Belgrade, Serbia. I graduated Computer Science and currently working as Software Developer in Exela.<br>"+
        "Before Exela i was part of the Engineering Ingegneria Informatica Spa group, as Junior Soultion Developer, Invej as System and Database Administrator. <br>" +
        "and as part of internship i was Student Assistent and IT Technician at Singidunum University. <br><br>" +
        "... " +
        "</div>");
        return;
    }

    if(command == "contact"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        "<a href = \"mailto: markozjalic@gmail.com\">markozjalic@gmail.com</a><br><br>" +
        "<a href = \"https://www.linkedin.com/in/zjalic\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a><br><br>" +
        "<a href = \"https://github.com/zjalic\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a><br>" +
        "</div>");
        return;
    }

    document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">'"+command+"': command not found</div>");


    
}

document.body.addEventListener("click", function (evt) {
    $(".caret").focus();
});

function spaces(num){
    var spaceStr = "";
    for (let i = 0; i < num; i++) {
        spaceStr += "&nbsp;";
    }
    return spaceStr;
}