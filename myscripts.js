let isFlipping = false;
let totalScore = 0;
const scoreElement = document.getElementById('score');

function flipCard(card, score) {
  if (!isFlipping && !card.classList.contains('flipped')) {
    isFlipping = true;
    card.classList.add('flipped');
    totalScore += score;
    scoreElement.textContent = `總分：${totalScore}`;
    setTimeout(() => {
      isFlipping = false;
    }, 100);
  }
}

function resetCards() {
  totalScore = 0;
  scoreElement.textContent = '總分：0';
  isFlipping = false; // 重置翻轉

  // 將所有卡片的翻轉樣式移除並重新綁定點擊事件
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('flipped');
    card.onclick = function() {
      flipCard(this, parseInt(this.getAttribute('data-score')));
    };
  });
}

// 頁面加載完成後執行一次，為卡片綁定點擊事件
window.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.onclick = function() {
      flipCard(this, parseInt(this.getAttribute('data-score')));
    };
  });
});

/*--------fork button-----------*/
window.addEventListener('DOMContentLoaded', function() {
  var patterns = document.querySelectorAll('.pattern');
  patterns.forEach(function(pattern) {
    pattern.style.display = 'none'; // 默認隱藏所有圖像
  });
});

function showPattern(side) {
  var patternContainer = document.querySelector('.pattern-container.' + side);
  var patterns = patternContainer.querySelectorAll('.pattern');
  var visiblePatterns = patternContainer.querySelectorAll('.pattern[style="display: block;"]');
  if (visiblePatterns.length < 3) {
    for (var i = 0; i < patterns.length; i++) {
      if (patterns[i].style.display === 'none') {
        patterns[i].style.display = 'block';
        break;
      }
    }
  }
}

function hidePattern(side) {
  var patternContainer = document.querySelector('.pattern-container.' + side);
  var patterns = patternContainer.querySelectorAll('.pattern');
  for (var i = patterns.length - 1; i >= 0; i--) {
    if (patterns[i].style.display !== 'none') {
      patterns[i].style.display = 'none';
      break;
    }
  }
}

/*-----------------*/

function goToSelectedPage() {
  var selectedPage = document.getElementById("dropdown").value;
  window.location.href = selectedPage;
}

window.onload = function() {
  resetPage();
};

function resetPage() {
  var currentPage = window.location.pathname.split("/").slice(-1)[0];
  var dropdown = document.getElementById("dropdown");
  for (var i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === currentPage) {
      dropdown.selectedIndex = i;
      break;
    }
  }
}
