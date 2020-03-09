const data = {
  skill1: {
    name: "HTML",
    value :80,
    Comment:"ああ",
  },
  skill2: {
    name: "CSS",
    value: 60,
    Comment:"ああ",
  },
  skill3: {
    name: "JavaScript",
    value: 37,
    Comment:"ああ",
  },
  skill4: {
    name: "node.js",
    value: 10,
    Comment:"ああ",
  },
  skill5: {
    name: "Photoshop",
    value: 15,
    Comment:"ああ",
  },
  skill6: {
    name: "Lightroom",
    value: 90,
    Comment:"ああ",
  },
  skill7: {
    name: "WordPress",
    value: 32,
    Comment:"",
  },
  skill6: {
    name: "Illustrator",
    value: 20,
    Comment: "ああ",
  }
}
headerbar();



var length = Object.keys(data).length;
//console.log(length); // 5

for (let i = 1; i <= length; i++) {
  // const element = array[i];
  // console.log(i);
  const at = "skill" + i;
  // console.log(data[at].name + " " + data[at].value + "%");
  $(function () {
    $(".skills").append("<div class='html slill-div'><h3 class='skills-titel'>" + data[at].name + "</h3><ul class='bar'><li style='width:" + data[at].value + "%;'></li></ul></div >");

    //console.log(data[at].name + "を追加しました");
    
  });
}

var offsetWorks;
var offsetskills;
var offsetprofile;
var Works;
var skills;
var profile;
// ページの特定の位置にスクロールする
$(function () { 
  offsetWorks = $('.Works').offset();//worksの位置を取得
  offsetskills = $('.skills').offset();//skillsの位置を取得
  offsetprofile = $('.profile').offset();//profileの位置を取得
  Works = offsetWorks.top;//worksの位置を取得
  skills = offsetskills.top;//skillsの位置を取得
  profile = offsetprofile.top;//profileの位置を取得
  console.log(offsetWorks.top + "offset");
  
  

  $('.header-Works').on('click', function () {
    $(window).scrollTop(Works-50);
  });
  $('.header-skills').on('click', function () {
    $(window).scrollTop(skills - 50);
  });
  $('.header-Profile').on('click', function () {
    $(window).scrollTop(profile - 50);
  });
  $('.header-top').on('click', function () {
    $(window).scrollTop(0);
  });


})
$(window).scroll(function () {
  // console.log($(this).scrollTop() + 'px');
  posX = window.scrollY;
  // console.log(posX);
  if (Works - 90 > posX > 0 ) {
    // console.log("TOP!!!");
    $('header button').css('border-bottom', '0');
    $('.header-top').css('border-bottom', '#555 3px solid');
  } else if (skills - 90 > posX) {
    // console.log("WORKS!!!");
    $('header button').css('border-bottom', '0');
    $('.header-Works').css('border-bottom', '#555 3px solid');
  } else if (profile - 90 > posX) {
    // console.log("skills!!!!");
    $('header button').css('border-bottom', '0');
    $('.header-skills').css('border-bottom', '#555 3px solid');
  } else if (profile - 90 < posX) {
    // console.log("profile!!!!");
    $('header button').css('border-bottom', '0');
    $('.header-Profile').css('border-bottom', '#555 3px solid');
  }



  
  headerbar();
});

//ヘッダーを引っ込めるたり出したりするところ
function headerbar(params) {
  if ($(this).scrollTop() <= 10) {
    // console.log($(this).scrollTop());
    $("header").css("top", "-50px");
  } else {
    $("header").css("top", "0px");
  }
}



