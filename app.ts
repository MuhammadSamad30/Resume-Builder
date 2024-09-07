const previewProfilePicture = (): void => {
  const fileInput = document.querySelector(
    "#profile-picture"
  ) as HTMLInputElement;
  const previewImg = document.querySelector("#preview-img") as HTMLImageElement;

  const file = fileInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target?.result as string;
      previewImg.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
};
document
  .querySelector("#profile-picture")
  ?.addEventListener("change", previewProfilePicture);

// skills toggle

function nextpage(): void {
  window.location.href = "skills.html";
}

function toggleSkill() {
  const skillSection = document.getElementById("skills-section") as HTMLElement;

  if (skillSection.style.display === "none") {
    skillSection.style.display = "block";
  } else {
    skillSection.style.display = "none";
  }
}

//  Edu toggle

function nextpage1(): void {
  window.location.href = "edu.html";
}

function toggleEdu() {
  const eduSection = document.getElementById(
    "education-section"
  ) as HTMLElement;

  if (eduSection.style.display === "none") {
    eduSection.style.display = "block";
  } else {
    eduSection.style.display = "none";
  }
}

// work toggle

function nextpage2(): void {
  window.location.href = "work.html";
}

function togglework() {
  const workSection = document.getElementById(
    "work-experience-section"
  ) as HTMLElement;

  if (workSection.style.display === "none") {
    workSection.style.display = "block";
  } else {
    workSection.style.display = "none";
  }
}
