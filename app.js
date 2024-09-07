"use strict";
var _a;
const previewProfilePicture = () => {
    var _a;
    const fileInput = document.querySelector("#profile-picture");
    const previewImg = document.querySelector("#preview-img");
    const file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            previewImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            previewImg.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
};
(_a = document
    .querySelector("#profile-picture")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", previewProfilePicture);
// skills toggle
function nextpage() {
    window.location.href = "skills.html";
}
function toggleSkill() {
    const skillSection = document.getElementById("skills-section");
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
    }
    else {
        skillSection.style.display = "none";
    }
}
//  Edu toggle
function nextpage1() {
    window.location.href = "edu.html";
}
function toggleEdu() {
    const eduSection = document.getElementById("education-section");
    if (eduSection.style.display === "none") {
        eduSection.style.display = "block";
    }
    else {
        eduSection.style.display = "none";
    }
}
// work toggle
function nextpage2() {
    window.location.href = "work.html";
}
function togglework() {
    const workSection = document.getElementById("work-experience-section");
    if (workSection.style.display === "none") {
        workSection.style.display = "block";
    }
    else {
        workSection.style.display = "none";
    }
}
