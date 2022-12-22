const memo = document.getElementById('memo');
const saveButton = document.getElementById('save');
const clearButton = document.getElementById('clear');

// メモを保存する処理
function saveMemo() {
  localStorage.setItem('memo', memo.value);
}

// メモをクリアする処理
function clearMemo() {
  memo.value = '';
  localStorage.removeItem('memo');
}

// ページを読み込んだときに、保存されているメモを表示する
window.addEventListener('load', () => {
  const savedMemo = localStorage.getItem('memo');
  if (savedMemo) {
    memo.value = savedMemo;
  }
});

// 保存ボタンがクリックされたときに、メモを保存する
saveButton.addEventListener('click', saveMemo);

// クリアボタンがクリックされたときに、メモをクリアする
clearButton.addEventListener('click', clearMemo);