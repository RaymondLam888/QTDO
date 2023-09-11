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
  image1: 'https://user-images.githubusercontent.com/106653257/266819776-3eeb2e05-b009-4d37-a399-328afa5e7535.png',
  image2: 'https://user-images.githubusercontent.com/106653257/266832215-3f32d5d3-7d33-4b58-b027-deb01128e2a4.png',
  image3: 'https://user-images.githubusercontent.com/106653257/266832217-210cf592-79f0-4fc3-9e0d-b00b7dc8da21.png',
  image4: 'https://user-images.githubusercontent.com/106653257/266832218-03ae949f-3abf-479b-a027-be565665b47b.png',
  image5: 'https://user-images.githubusercontent.com/106653257/266832219-c3c3cf3d-582e-4133-b6eb-a25cd93b1145.png',
  image6: 'https://user-images.githubusercontent.com/106653257/266832220-1f8d29be-efaa-4946-8f96-924897f96e6e.png',
  image7: 'https://user-images.githubusercontent.com/106653257/266832223-5a0b45ff-007d-4a8c-98b6-10cbdd35878f.png',
  image8: 'https://user-images.githubusercontent.com/106653257/266832212-b1edb00b-91a0-4223-aaa8-295a05853c1d.png'
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
    var dropdown = document.getElementById("dropdown");
    var selectedPage = dropdown.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  }

  function goToSelectedPage() {
    var dropdown = document.getElementById("dropdown");
    var selectedPage = dropdown.value;
    if (selectedPage) {
      window.location.href = selectedPage + ".html";
    }
  }

  // 获取当前页面的文件名（不包括扩展名）
  var currentPage = location.pathname.split("/").slice(-1)[0].split(".")[0];
  
  // 设置下拉列表的选中项为当前页面
  var dropdown = document.getElementById("dropdown");
  dropdown.value = currentPage;

  function goToSelectedPage() {
    var selectedPage = document.getElementById("dropdown").value;
    window.location.href = selectedPage;
  }


  window.onload = function() {
    resetPage();
  };

  