var scores = {
  image1: 0,
  image2: 0,
  image3: 0,
  image4: 0,
  image5: 0,
  image6: 0,
  image7: 0,
  image8: 0
};

var originalImagePaths = {
  image1: 'https://user-images.githubusercontent.com/106653257/267183724-08f46703-70dc-4fb1-8041-f69d9c0646e6.png',
  image2: 'https://user-images.githubusercontent.com/106653257/267183731-422e2ce6-88fb-4ffa-88a2-aa7e61613ebc.png',
  image3: 'https://user-images.githubusercontent.com/106653257/267183733-5d8c4f98-8aa4-4a39-bd2d-8643e8a2b7ed.png',
  image4: 'https://user-images.githubusercontent.com/106653257/267183735-e96c5838-16f6-4913-a9ed-666513d7d01a.png',
  image5: 'https://user-images.githubusercontent.com/106653257/267183737-a6347a82-5214-4980-ad64-5361a70dba6f.png',
  image6: 'https://user-images.githubusercontent.com/106653257/267183739-93778a30-d059-4fcb-afcd-47b84201721b.png',
  image7: 'https://user-images.githubusercontent.com/106653257/267183744-a22ee6bf-d1af-4baf-b454-844d3001d145.png',
  image8: 'https://user-images.githubusercontent.com/106653257/267183745-3431d5da-75d1-4e4e-9c79-eac919bd0f11.png'
};

var imageScores = {
  image1: 10,
  image2: 20,
  image3: 30,
  image4: 40,
  image5: 50,
  image6: 60,
  image7: 70,
  image8: 80
};

var imageClickStatus = {
  image1: false,
  image2: false,
  image3: false,
  image4: false,
  image5: false,
  image6: false,
  image7: false,
  image8: false
};

function calculateScore(imageId) {
  console.log("Clicked image: " + imageId);
  var alreadyClicked = imageClickStatus[imageId];
  if (!alreadyClicked) {
    var image = document.getElementById(imageId);
        image.classList.add('transformed');
  setTimeout(function() {
    switch (imageId) {
      case 'image1':
        image.src = 'https://user-images.githubusercontent.com/106653257/266831942-46485679-3094-4c7a-ada9-f84966c272bb.png';
        break;
      case 'image2':
        image.src = 'https://user-images.githubusercontent.com/106653257/266831943-2a25a173-60d7-4b4c-aed3-ba957d265b9f.png';
        break;
      case 'image3':
        image.src = 'https://user-images.githubusercontent.com/106653257/266831946-73950453-1021-4ba1-99fe-73aeb8206d53.png';
        break;
      case 'image4':
        image.src = 'https://user-images.githubusercontent.com/106653257/266831948-23dd5297-b6fa-4fa2-b91d-1360acaffcac.png';
        break;
      case 'image5':
        image.src = 'https://user-images.githubusercontent.com/106653257/266831950-d7807b48-b356-4b40-95f5-1df117a700b0.png';
        break;
      case 'image6':
image.src = 'https://user-images.githubusercontent.com/106653257/266831951-35fa41aa-33a7-4f02-8f2f-dc1ea538f102.png';
break;
      case 'image7':
image.src = 'https://user-images.githubusercontent.com/106653257/266831952-744549b1-f9a5-453d-9318-0c965e005723.png';
break;
      case 'image8':
image.src = 'https://user-images.githubusercontent.com/106653257/266831940-228833ac-1a7f-4914-a5cd-3da2d624401f.png';
break;
    }
  }, 10);


  var scoreTable = document.getElementById("scoreTable").value;
  if (!scores.hasOwnProperty(scoreTable)) {
    scores[scoreTable] = {
      image1: 0,
      image2: 0,
      image3: 0,
      image4: 0,
      image5: 0,
      image6: 0,
      image7: 0,
      image8: 0
    };
  }
    
  scores[scoreTable][imageId] += imageScores[imageId];
  var totalScore = Object.values(scores[scoreTable]).reduce((acc, cur) => acc + cur, 0);
        document.getElementById("score").textContent = totalScore;

  imageClickStatus[imageId] = true;
      }
    }

function reset() {
  var scoreTable = document.getElementById("scoreTable").value;

  var images = document.getElementsByClassName("image");
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var imageId = image.id;
    image.classList.remove('transformed');
    image.src = originalImagePaths[imageId];
    imageClickStatus[imageId] = false;
    scores[scoreTable][imageId] = 0;
  }

  var totalScore = Object.values(scores[scoreTable]).reduce((acc, cur) => acc + cur, 0);
  document.getElementById("score").textContent = totalScore;
}
 
  function changeScoreTable(scoreTable) {
    var totalScore = Object.values(scores[scoreTable]).reduce((acc, cur) => acc + cur, 0);
      document.getElementById("score").textContent = totalScore;
    }

/*------------------------------*/
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

  window.onload = function() {
    resetPage();
  };

  