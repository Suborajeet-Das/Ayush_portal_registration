function showOptions() {
  const userType = prompt("Please select your role:\n1. Government Official\n2. Stakeholder\n3. Startup");

  if (userType == 1) {
    window.location.href = "registration/govt.html";
  } else if (userType == 2) {
    window.location.href = "registration/stakehold.html";
  } else if (userType == 3) {
    window.location.href = "registration/startup.html";
  } else {
    alert("Invalid selection. Please try again.");
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};