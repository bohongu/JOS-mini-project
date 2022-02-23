var study_group_data = [
  {
    number: 0,
    title: "ncs 스터디 부지런한 사람만",
    category: "취업",
    during: "22.01.07 ~ 23.03.01",
    checkP: "1",
    checkP2: "2명",
    location: " | 서울",
    img: "./img/lcw_career_study.jpg",
    link: "./lcw_studyid1.html",
    view: 21,
  },
  {
    number: 1,
    title: "[월수금일]토익 스터디 사람구함",
    category: "어학",
    during: "22.01.07 ~ 23.03.01",
    checkP: "9",
    checkP2: "10명",
    location: " | 서울",
    img: "./img/lcw_language_study.jpg",
    link: "./lcw_studyid2.html",
    view: 588,
  },
  {
    number: 2,
    title: "세월이 야속하여 공무원 스터디를 진행할까 하는데 어떠신지요?",
    category: "취업",
    during: "93.02.22 ~ 25.02.21",
    checkP: "0",
    checkP2: "1명",
    location: " | 뉴욕",
    img: "./img/lcw_career_study.jpg",
    link: "./lcw_studyid3.html",
    view: 2002202,
  },
  {
    number: 3,
    title: "복어기능사 준비",
    category: "자격증",
    during: "90.01.01 ~ 22.03.01",
    checkP: "0",
    checkP2: "10명",
    location: " | 부산",
    img: "./img/lcw_certi.jpg",
    link: "./lcw_studyid4.html",
    view: 123,
  },
  {
    number: 4,
    title: "[월-금]멀티캠퍼스 취업반",
    category: "취업",
    during: "22.01.01 ~ 23.03.01",
    checkP: "0",
    checkP2: "3명",
    location: " | 서울",
    img: "./img/lcw_career_study.jpg",
    link: "#",
    view: 12,
  },
  {
    number: 5,
    title: "운전면허스터디 합니다.",
    category: "자격증",
    during: "22.01.01 ~ 22.03.01",
    checkP: "0",
    checkP2: "1명",
    location: " | 경기",
    img: "./img/lcw_certi.jpg",
    link: "#",
    view: 13,
  },
  {
    number: 6,
    title: "[컴활1급] 인강공유 스터디",
    category: "자격증",
    during: "22.01.01 ~ 22.03.01",
    checkP: "0",
    checkP2: "3명",
    location: " | 경기",
    img: "./img/lcw_certi.jpg",
    link: "#",
    view: 11,
  },
  {
    number: 7,
    title: "[원어민] 영어회화 스터디",
    category: "어학",
    during: "22.3.7 ~ 22.03.14",
    checkP: "0",
    checkP2: "00명",
    location: " | 서울",
    img: "./img/lcw_language_study.jpg",
    link: "#",
    view: 58,
  },
  {
    number: 8,
    title: "JPT 950점 스터디",
    category: "어학",
    during: "22.3.7 ~ 22.03.14",
    checkP: "0",
    checkP2: "00명",
    location: " | 서울",
    img: "./img/lcw_language_study.jpg",
    link: "#",
    view: 5,
  },
  {
    number: 9,
    title: "[중국어] 원어민과 함께",
    category: "어학",
    during: "22.3.7 ~ 22.03.14",
    checkP: "0",
    checkP2: "00명",
    location: " | 서울",
    img: "./img/lcw_language_study.jpg",
    link: "#",
    view: 1,
  },
];
$(document).ready(function () {
  function make_card(x) {
    $("div.study_pick:eq(" + x + ")").append(
      '<div class="study_pick_img"><ul class="sub_cnt_slide_wrap sub_cnt_slide01_wrap">' +
        '<li class="sub_cnt_list sub_cnt_list01 "><a href="" class="new_out_bg on"><p class="spec_pick"></p>' +
        '<div class="pick_con_img" style="background-image:url(' +
        "/img/lcw_career_study.jpg" +
        ')"><div class="study_pick_img"><img class="study_pick_img1" src="/img/lcw_career_study.jpg"></div>' +
        '</div><div class="study_pick_img"><dl class="middddle"><dt class="view20Byte1"></dt><dd class="middddle3"><p class="infor txt01"><span class="red cate_infor"></span></p><p class="infor thin date_infor txt02"></p>' +
        '<p class="infor2 thin txt03"><span class="check_person thin"><strong></strong></span><span class="thin add_infor"></span></p></dd><dt class="middddle2"></dt>' +
        '<p class="infor3"><strong class="thin"><span class="red thin"></span></strong></p></dl></div></a></li></ul></div>'
    );
  }
  for (var i = 0; i < 10; i++) {
    make_card(i);
  }
  for (i of study_group_data) {
    $("dt.view20Byte1:eq(" + i.number + ")").html(i.title);
    $("span.cate_infor:eq(" + i.number + ")").html(i.category);
    $("p.txt02:eq(" + i.number + ")").html(i.during);
    $("span.check_person strong:eq(" + i.number + ")").html(
      i.checkP + " / " + i.checkP2
    );
    $("span.add_infor:eq(" + i.number + ")").html(i.location);
    $(".study_pick_img1:eq(" + i.number + ")").attr("src", i.img);
    $("a.new_out_bg:eq(" + i.number + ")").attr("href", i.link);
    $(".red.thin:eq(" + i.number + ")").before("조회");
    $(".red.thin:eq(" + i.number + ")").html(i.view),
      $("strong.thin:eq(" + i.number + ")").append("건");
  }
});
