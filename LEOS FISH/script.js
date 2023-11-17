// 显示当前时间
function updateTime() {
    const now = new Date();
    document.getElementById('time-display').innerText = now.toLocaleTimeString();
    setTimeout(updateTime, 1000);
}
updateTime();

// 番茄钟计时器
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("时间到！");
        }
    }, 1000);
}

document.getElementById('start-timer').addEventListener('click', function () {
    const duration = parseInt(document.getElementById('timer-select').value) * 60;
    const display = document.getElementById('timer-display');
    startTimer(duration, display);
});

// 记事本
const notesDisplay = document.getElementById('notes-display');
document.getElementById('save-note').addEventListener('click', function () {
    const noteText = document.getElementById('note-input').value;
    const now = new Date();
    const timeString = now.toLocaleString();
    const noteDiv = document.createElement('div');
    noteDiv.innerHTML = `<strong>${timeString}</strong>: ${noteText}`;
    notesDisplay.appendChild(noteDiv);
    document.getElementById('note-input').value = '';
});

// 视频弹出窗口控制
function openVideo() {
    document.getElementById('videoPopup').style.display = 'block';
}

function closeVideo() {
    document.getElementById('videoPopup').style.display = 'none';
}
