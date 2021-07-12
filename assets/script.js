function init(){
    banner();
    addTerminalInput();
    document.addEventListener('contextmenu', event => event.preventDefault());
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

function terminalAutocomplete(searchCommand){
    addAutocomplete(searchCommand);
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

    $(".caret").on('keydown', function (e) {
        if (e.key === 'Tab' || e.keyCode === 9) {
            e.preventDefault();
            var doc = $(".caret");
            doc.attr('disabled', 'disabled');
            doc.attr('class', 'caret-disabled');
            terminalAutocomplete(doc.val());
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
            msg = "Hi, t"
        }
        if(command == "help"){
            msg = "T";
        }
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        msg + "ype any of following command for more info about me <br><br>" +
        "<b>about</b> -  More info about me<br>" +
        "<b>exp</b> - Info about my work experience<br>" +
        "<b>edu</b> - Info about my education<br>" +
        "<b>tech</b> - Technologies that i use<br>" +
        "<b>skills</b> - Brief overview of my skills <br>" +
        "<b>cv</b> - View my cv in pdf format<br>" +
        "<b>contact</b> - Contact (Email,Github,LinkedIn)<br>" +
        "<b>clear</b> - Clear terminal/command line<br>" +
        "<b>fullscreen</b> - Fullscreen or just press 'F11' button <br>" +
        "<b>help</b> - List of commands<br>" +
        "</div><br>");
        return;
    }

    if(command == "edu"){
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
        "<a href=\"./assets/cv.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" >cv.pdf</a> is opened in new tab." +
        "</div>");
        return;
    }

    if(command == "about"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        "Hi, I am Marko, I live in Belgrade, Serbia. I graduated Computer Science and currently working as Software Developer in Exela.<br>"+
        "Before Exela I was part of the Engineering Ingegneria Informatica Spa group, as Junior Soultion Developer, Invej as System and Database Administrator. <br>" +
        "and as part of internship I was Student Assistent and IT Technician at Singidunum University. <br><br>" +
        "I like to create mini apps, if you need some kind of app and it will not take too much time please contact me ... <br>"+
        "Also i enjoy in games, movies, music, food, cars, guns... Like the most boys, I guess... " +
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

    if(command == "tech"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        "<b>Technologies that I am using depend mostly what I am trying to build.<br>"+
        "Some i know excellent and some i know enough to use it </b><br><br>" +
        spaces(4)+"Desktop App"       +spaces(6)+ " Java Swing <br>"+
        spaces(4)+"Small Web App"     +spaces(4)+ " PHP, JavaScript, MariaDB <br>"+
        spaces(4)+"Business Web App"  +spaces(1)+ " Java Spring w/ Liquibase and JSP w/ Tiles, Oracle<br>"+
        spaces(4)+"Bots & Scripts"    +spaces(3)+ " Python, SQLite <br>"+
        spaces(4)+"Mobile"            +spaces(11)+" Flutter <br><br>" +
        "<b>Tools that help me</b><br><br>" +
        spaces(4)+"IDE"             +spaces(14)+ " Eclipse & Netbeans <br>" +
        spaces(4)+"Editor"          +spaces(11)+ " VSCode <br>" +
        spaces(4)+"Version Control" +spaces(2) + " Git & SVN <br>" +
        spaces(4)+"Misc"            +spaces(13)+ " Docker, Maven, Tomcat <br>" +
        "</div>");
        return;
    }

    if(command == "skills"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output skills\">" +
        "<b>Programming</b> is my current job, i like it but personal projects are more interesting<br>"+
        "<b>Networking and System Administration</b> is something that i know pretty decent <br>" +
        "<b>Cryptography and Security</b> is something that i really like but there is plenty space for improvement <br>" +
        "My native is <b>Serbian</b>, but I am speaking also <b>English</b> it's not perfect but okay and a little bit <b>Italian</b><br>" +
        "<b>Problem solving</b> is my best attribute. I am <b>Pragmatic</b> and <b>Idealistic</b> ...<br>" +
        "</div>");
        return;
    }

    if(command == "this"){
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        "Builded from scratch using JQuery and StackOverFlow :D"+
        "</div>");
        return;
    }

    if(command == "fullscreen"){
        $("html")[0].requestFullscreen().then(function() {});
        document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        "Esc or 'F11' to exit fullscreen mode ..."+
        "</div>");
        return;
    }


    document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">'"+command+"': command not found</div>");

    
}

function addAutocomplete(searchCommand){
    var autocompleteList = "";

    if("help".startsWith(searchCommand)){
        autocompleteList += "help ";
    }
    if("exp".startsWith(searchCommand)){
        autocompleteList += "exp ";
    }
    if("edu".startsWith(searchCommand)){
        autocompleteList += "edu ";
    }
    if("about".startsWith(searchCommand)){
        autocompleteList += "about ";
    }
    if("skills".startsWith(searchCommand)){
        autocompleteList += "skills ";
    }
    if("cv".startsWith(searchCommand)){
        autocompleteList += "cv ";
    }
    if("this".startsWith(searchCommand)){
        autocompleteList += "this ";
    }
    if("tech".startsWith(searchCommand)){
        autocompleteList += "tech ";
    }
    if("contact".startsWith(searchCommand)){
        autocompleteList += "contact ";
    }
    if("clear".startsWith(searchCommand)){
        autocompleteList += "clear ";
    }
    if("cl".startsWith(searchCommand)){
        autocompleteList += "cl ";
    }
    if("fullscreen".startsWith(searchCommand)){
        autocompleteList += "fullscreen ";
    }
    


    document.getElementById("terminal-body").insertAdjacentHTML("beforeend",
        "<div class=\"terminal-output\">" +
        autocompleteList +
        "</div>");
        return;
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
