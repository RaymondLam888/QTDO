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
  isFlipping = false; // 重置翻转状态

  // 将所有卡片的翻转样式移除并重新绑定点击事件
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('flipped');
    card.onclick = function() {
      flipCard(this, parseInt(this.getAttribute('data-score')));
    };
  });
}

// 页面加载完成后执行一次，为卡片绑定点击事件
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
    pattern.style.display = 'none'; // 默认隐藏所有图像
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