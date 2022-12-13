function displayDetailFirst() {
    var x = document.getElementById("firstSusbsytem");
    var i = x.selectedIndex;
    var j = -1;
    var b = document.getElementById("text1");
    b.style.display = "";
    console.log(b.style.display);
    const ab = ["Select Subsystem to display what it does.",
    "Wonder how <i>TARS</i> or <i>CASE</i> from Intestellar work? Or how did <i>Moneyball</i> use predictive analytics? Or Do you want to understand the mechanics of this page? We at the <strong>Artificial Intelligence & Development</strong> subsystem thrive to answer these questions and learn much more about such topics.",
    "Our everyday lives are increasingly dependent on electrical technologies. Besides working on programs like <i>Proteus</i> and <i>LT Spice</i>, we at the <strong>Electrical And Electronics</strong> subsystem help you simulate and build different circuits using microcontrollers like <i>Arduino</i>, <i>Rasberry Pi</i> and variety of other parts to  assist you in constructing your dream robots.",
    "Interested in Computer Aided Design & 3D modelling? Want to know more about the mechanical aspec of robotics? We the <strong>Mechanical</strong> Subsystem are the best suited to design & run simulations on the mechanical components necessary for robotics.",
    "In the world of robotics and Industry 4.0, let us <code>colcon</code> build and rvizulise your ideas. Join the <strong>Robotics</strong> workspace and publish the creativity.",
    "As Benjamin Franklin once said 'By failing to prepare you are preparing to fail'. Come be a part of the team that works all the way from planning, organizing, motivating to controlling and take away valuable life lessons and priceless experiences that you would cherish for the rest of your life as <strong>Management</strong> is one of the most important skills to have in this ever growing world.",
    "Ever wondered what goes behind designing the cool graphics that you see? Ever wanted to put your creativity into something very simple to make it look attractive? If your answers to these questions is YES then come join the <strong>Social Media</strong> team and bring out your <i>creativity</i>!!"];
    if (i == 0) {
        alert("Select a Subsystem.");
    }
    else
    {
        var a = ab[i];
        b.innerHTML = a;
    }
}

function displayDetailSecond() {
    var x = document.getElementById("secondSusbsytem");
    var i = x.selectedIndex;
    var j = -1;
    var b = document.getElementById("text2");
    b.style.display = ""; 
    const ab = ["Select Subsystem to display what it does.",
    "Wonder how <i>TARS</i> or <i>CASE</i> from Intestellar work? Or how did <i>Moneyball</i> use predictive analytics? Or Do you want to understand the mechanics of this page? We at the <strong>Artificial Intelligence & Development</strong> subsystem thrive to answer these questions and learn much more about such topics.",
    "Our everyday lives are increasingly dependent on electrical technologies. Besides working on programs like <i>Proteus</i> and <i>LT Spice</i>, we at the <strong>Electrical And Electronics</strong> subsystem help you simulate and build different circuits using microcontrollers like <i>Arduino</i>, <i>Rasberry Pi</i> and variety of other parts to  assist you in constructing your dream robots.",
    "Interested in Computer Aided Design & 3D modelling? Want to know more about the mechanical aspec of robotics? We the <strong>Mechanical</strong> Subsystem are the best suited to design & run simulations on the mechanical components necessary for robotics.",
    "In the world of robotics and Industry 4.0, let us <code>colcon</code> build and rvizulise your ideas. Join the <strong>Robotics</strong> workspace and publish the creativity.",
    "As Benjamin Franklin once said 'By failing to prepare you are preparing to fail'. Come be a part of the team that works all the way from planning, organizing, motivating to controlling and take away valuable life lessons and priceless experiences that you would cherish for the rest of your life as <strong>Management</strong> is one of the most important skills to have in this ever growing world.",
    "Ever wondered what goes behind designing the cool graphics that you see? Ever wanted to put your creativity into something very simple to make it look attractive? If your answers to these questions is YES then come join the <strong>Social Media</strong> team and bring out your <i>creativity</i>!!"];
    if (i == 0) {
        alert("Select a Subsystem.");
    }
    else
    {
        var a = ab[i];
        b.innerHTML = a;
    }
}