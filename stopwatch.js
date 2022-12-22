let intervalId;
let isRunning = false;
let timeLeft = 25 * 60;

function startTimer() {
  // 集中タイマーを開始する
  isRunning = true;
  intervalId = setInterval(() => {
    timeLeft--;
    displayTimeLeft(timeLeft);
    if (timeLeft === 0) {
      clearInterval(intervalId);
      notify('休憩タイムです');
      isRunning = false;
      // 「休憩する」ボタンを表示する
      document.getElementById('break-button').style.display = 'inline';
      // 「一時停止」ボタンを非表示にする
      document.getElementById('pause-button').style.display = 'none';
    }
    
  }, 1000);
  // 「一時停止」ボタンを表示する
  document.getElementById('pause-button').style.display = 'inline';
  // 「始める」ボタンを非表示にする
  document.getElementById('start-button').style.display = 'none';
  
}

function pauseTimer() {
  // 集中タイマーを一時停止する
  clearInterval(intervalId);
  isRunning = false;
  // 「続ける」ボタンと「リセット」ボタンを表示する
  document.getElementById('resume-button').style.display = 'inline';
  document.getElementById('reset-button').style.display = 'inline';
  // 「一時停止」ボタンを非表示にする
  document.getElementById('pause-button').style.display = 'none';
}

function resumeTimer() {
  // 集中タイマーを再開する
  isRunning = true;
  intervalId = setInterval(() => {
    timeLeft--;
    displayTimeLeft(timeLeft);
    if (timeLeft === 0) {
      clearInterval(intervalId);
      notify('休憩タイムです');
      isRunning = false;
      // 「休憩する」ボタンを表示する
      document.getElementById('break-button').style.display = 'inline';
      // 「一時停止」ボタンを非表示にする
      document.getElementById('pause-button').style.display = 'none';
    }
  }, 1000);
  // 「一時停止」ボタンを表示する
  document.getElementById('pause-button').style.display = 'inline';
  // 「始める」ボタンを非表示にする
  document.getElementById('start-button').style.display = 'none';
}

function resetTimer() {
    // 集中タイマーをリセットする
    clearInterval(intervalId);
    isRunning = false;
    timeLeft = 25 * 60;
    displayTimeLeft(timeLeft);
    // 「始める」ボタンを表示する
    document.getElementById('start-button').style.display = 'inline';
    // 「続ける」ボタンと「リセット」ボタンを非表示にする
    document.getElementById('resume-button').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
  }
  
  function breakTimer() {
    // 休憩タイマーを開始する
    isRunning = true;
    intervalId = setInterval(() => {
      timeLeft--;
      displayTimeLeft(timeLeft);
      if (timeLeft === 0) {
        clearInterval(intervalId);
        notify('休憩が終了しました');
        isRunning = false;
        // 「作業を始める」ボタンを表示する
        document.getElementById('work-button').style.display = 'inline';
        // 「休憩する」ボタンを非表示にする
        document.getElementById('break-button').style.display = 'none';
      }
    }, 1000);
    // 「休憩する」ボタンを非表示にする
    document.getElementById('break-button').style.display = 'none';
  }
  
  function workTimer() {
    // 集中タイマーを開始する
    isRunning = true;
    intervalId = setInterval(() => {
      timeLeft--;
      displayTimeLeft(timeLeft);
      if (timeLeft === 0) {
        clearInterval(intervalId);
        notify('休憩タイムです');
        isRunning = false;
        // 「休憩する」ボタンを表示する
        document.getElementById('break-button').style.display = 'inline';
        // 「一時停止」ボタンを非表示にする
        document.getElementById('pause-button').style.display = 'none';
      }
    }, 1000);
    // 「作業を始める」ボタンを非表示にする
    document.getElementById('work-button').style.display = 'none';
    // 「一時停止」ボタンを表示する
    document.getElementById('pause-button').style.display = 'inline';
  }

function displayTimeLeft(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
  }

function notify() {
    const notification = new Notification('タイマー終了', {
        body: 'タイマーが終了しました。次のタスクを開始してください。'
    });
}
if (isRunning==false) {
    document.getElementById('start-button').addEventListener('click', startTimer);
}
