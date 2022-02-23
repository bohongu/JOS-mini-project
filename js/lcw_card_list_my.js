var study_group_data = [
    {
        "number": 0,
        "title": "세월이 야속하여 공무원 스터디를 진행할까 하는데 어떠신지요?",
        "category": "취업",
        "during": "93.02.22 ~ 25.02.21",
        "checkP": "0",
        "checkP2": "1명",
        "location": "뉴욕",
        "img": "url(./img/lcw_career_study.jpg)",
        "link": "/lcw_studyid3.html",
        "view": 2002202
    },
    {
        "number": 1,
        "title": "복어기능사 준비",
        "category": "자격증",
        "during": "90.01.01 ~ 22.03.01",
        "checkP": "0",
        "checkP2": "10명",
        "location": "부산",
        "img": "url(./img/lcw_certi.jpg)",
        "link": "/lcw_studyid4.html",
        "view": 123
    },

];

$(document).ready(function () {
    for (i of study_group_data) {
        $('dt.view20Byte:eq(' + i.number + ')').html(i.title);
        $('span.cate_infor:eq(' + i.number + ')').html(i.category);
        $('p.txt02:eq(' + i.number + ')').html(i.during);
        $('span.check_person strong:eq(' + i.number + ')').html(i.checkP + " / " + i.checkP2);
        $('span.add_infor:eq(' + i.number + ')').html(i.location);
        $('div.pick_con_img:eq(' + i.number + ')').css('background-image', i.img);
        $('a.new_out_bg:eq(' + i.number + ')').attr('href', i.link);
        $('.red.thin:eq(' + i.number + ')').before("조회");
        $('.red.thin:eq(' + i.number + ')').html(i.view),
        $('strong.thin:eq(' + i.number + ')').append("건");
    }
});