function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsText = document.getElementById("memberSkillsText");
    var memberSkillsValue = document.getElementById("memberSkillsValue");

    if (memberValue === "1") {
        memberSkills.style.display = "block";
        memberSkillsText.innerHTML = "Skills";
        memberSkillsValue.value = "1";
    } else {
        memberSkills.style.display = "none";
        memberSkillsText.innerHTML = "";
        memberSkillsValue.value = "";
    }
}