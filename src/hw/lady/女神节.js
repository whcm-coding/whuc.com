import $ from '../libs/jquery-3.4.1';

var IMGSRC = null;
var DB = null;
var P01,
  P01i,
  P02,
  P02i,
  P1,
  P1i,
  P2,
  P2i,
  nI = null;
//文字出现
var page2Txt = document.getElementById('page2Txt'),
  page2TxtShow = document.getElementById('page2TxtShow'),
  i = 0,
  timer = setInterval(function() {
    page2Txt.style.display = 'none';
    page2TxtShow.innerHTML = page2Txt.innerHTML.substring(0, i);
    i++;
    if (page2TxtShow.innerHTML == page2Txt.innerHTML) {
      clearInterval(timer);
    }
  }, 60);
//点击出现书本
function obook() {
  var obook = document.getElementsByClassName('first-img');
  var obook = document.getElementById('center');
  // img.style.opacity = 0;
  obook.style.display = 'block';
  setInterval(function() {
    TPL();
  }, 5000);
}
//图片消失
$(window).ready(function() {
  $('.subsequently').click(function() {
    obook();
  });
  $('.first').eq(0);
  // .show();
  var i = 0;
  function fad() {
    var m = i % 4;
    var n = (i + 1) % 4;
    $('.first')
      .eq(m)
      .fadeOut(1000);
    // $(".first")
    //   .eq(n)
    //   .fadeIn(1000);
    i++;
  }

  setInterval(fad, 3000);
});
// document.onselectstart = function() {
//   return false;
// };
//文字框消失
$(window).ready(function() {
  $('.li-none p').eq(0);
  // .show();
  var i = 0;
  function fad() {
    var m = i % 4;
    var n = (i + 1) % 4;
    $('.li-none p')
      .eq(m)
      .fadeOut(1000);
    // $(".li-none p")
    //   .eq(n)
    //   .fadeIn(1000);
    i++;
  }
  setInterval(fad, 3000);
});
//对话框消失
$(window).ready(function() {
  $('.send')
    .eq(0)
    .show();
  var i = 0;
  function fad() {
    var m = i % 4;
    var n = (i + 1) % 4;
    $('.send')
      .eq(m)
      .fadeOut(1000);
    $('.send')
      .eq(n)
      .fadeIn(1000000000);
    i++;
  }
  setInterval(fad, 3000);
});
//选择框出现
// $(window).ready(function() {
//   $(".two_p")
//     .eq(0)
//     .show();
//   var i = 0;
//   function fad() {
//     var m = i % 4;
//     var n = (i + 1) % 4;
//     $(".two_p")
//       .eq(m)
//       .fadeOut(1000);
//     $(".two_p")
//       .eq(n)
//       .fadeIn(1000000000);
//     i++;
//   }
//   int = setInterval(fad, 3000);
// });
//按钮出现
setTimeout(function() {
  $('.two_p').show();
}, 5000);

//two图片消失
// function tbook() {
//   var two_p1 = document.getElementsByClassName("two_p");
//   var two_p2 = document.getElementsByClassName("submit");
//   var two_p3 = document.getElementsByClassName("reset");
//   two_p1.style.display = "none";
// }
setTimeout(function() {
  $('.subsequently').show();
}, 10000);

document.onselectstart = function() {
  return false;
};

var nI = 0;

var kI = 0;

var run = false;

function setOpacity(obj, o) {
  if (o < 0) o = 0;
  else if (o > 100) o = 100;

  if (obj.filters) obj.filters.alpha.opacity = o;
  else obj.style.opacity = o / 100;
}

function TPR__(p) {
  P1.style.left = 50 - 2.5 * p + '%';

  P1.style.width = 2.5 * p + '%';

  setOpacity(P1i, 0.5 * p * p);

  if (p == 20) run = false;
}
window.TPR__ = TPR__;
function TPR_(p) {
  P2.style.width = 50 - 2.5 * p + '%';

  setOpacity(P2i, 100 - 0.5 * (p * p));

  if (p == 20) {
    P2i.src = IMGSRC[kI].src;

    setOpacity(P2i, 100);

    P2.style.width = '50%';

    for (var i = 1; i <= 20; i++) setTimeout('TPR__(' + i + ')', i * 32);
  }
}
window.TPR_ = TPR_;

function TPR() {
  if (!run) {
    run = true;

    P01i.src = IMGSRC[kI].src;

    P1.style.width = 0;

    kI++;

    if (kI >= nI) kI = 0;

    titLe(kI);

    P02i.src = IMGSRC[kI].src;

    P1i.src = IMGSRC[kI].src;

    for (var i = 1; i <= 20; i++) setTimeout('TPR_(' + i + ')', i * 32);
  } else setTimeout('TPR()', 100);
}
window.TPR = TPR;
function TPL__(p) {
  P2.style.width = 2.5 * p + '%';

  setOpacity(P2i, 0.5 * p * p);

  if (p == 20) run = false;
}
window.TPL__ = TPL__;

function TPL_(p) {
  P1.style.left = 2.5 * p + '%';

  P1.style.width = 40 + (10 - 2.5 * p) + '%';

  setOpacity(P1i, 100 - 0.5 * (p * p));

  if (p == 20) {
    P1i.src = IMGSRC[kI].src;

    setOpacity(P1i, 100);

    P1.style.left = 0;

    P1.style.width = '50%';

    for (var i = 1; i <= 20; i++) setTimeout('TPL__(' + i + ')', i * 32);
  }
}
window.TPL_ = TPL_;
function TPL() {
  if (!run) {
    run = true;

    P02i.src = IMGSRC[kI].src;

    P2.style.width = 0;

    kI--;

    if (kI < 0) kI = nI - 1;

    titLe(kI);

    P01i.src = IMGSRC[kI].src;

    P2i.src = IMGSRC[kI].src;

    for (var i = 1; i <= 20; i++) setTimeout('TPL_(' + i + ')', i * 32);
  } else setTimeout('TPL()', 100);
}
window.TPL = TPL;
function titLe(p) {
  document.getElementById('TXTBOX').innerHTML = IMGSRC[p].alt;
}

onload = function() {
  IMGSRC = document.getElementById('imgsrc').getElementsByTagName('img');

  DB = document.getElementById('DHTMLBOOK');

  P01 = DB.getElementsByTagName('span')[0];

  P01i = P01.getElementsByTagName('img')[0];

  P02 = DB.getElementsByTagName('span')[1];

  P02i = P02.getElementsByTagName('img')[0];

  P1 = DB.getElementsByTagName('span')[2];

  P1i = P1.getElementsByTagName('img')[0];

  P2 = DB.getElementsByTagName('span')[3];

  P2i = P2.getElementsByTagName('img')[0];

  nI = IMGSRC.length;

  P1i.src = IMGSRC[kI].src;

  P2i.src = IMGSRC[kI].src;

  titLe(kI);

  DB.style.visibility = 'visible';
};
