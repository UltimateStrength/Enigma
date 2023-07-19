////////////////////
//Main Start Page Script
///////////////////

// Start Page Infos
function updateInfo() {
    var data = JSON.parse(json);
    var entranceCount = parseInt(localStorage.getItem('entranceCount')) || 0;
    var completionCount = 0;

    var completionPercentage = (completionCount / entranceCount) * 100 || 0;

    document.getElementById('entrance-count').textContent = data.entranceCount;
    document.getElementById("completion-count").textContent = completionCount;
    document.getElementById("completion-percentage").textContent = completionPercentage.toFixed(2) + "%";
}

function incrementEntranceCount() {
    var entranceCount = parseInt(localStorage.getItem('entranceCount')) || 0;
    entranceCount++;
    localStorage.setItem('entranceCount', entranceCount.toString());
    updateInfo();
}

//Start Page Play Button
var playButton = document.querySelector('.play-button');

playButton.addEventListener('click', function() {
  window.location.href = "/pages/level1.html";
});

updateInfo();
