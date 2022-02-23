var study_group_data = [
    {
        "number": 0,
        "title": "ncs 스터디 부지런한 사람만",
        "category": "취업",
        "during": "22.01.07 ~ 23.03.01",
        "checkP": "1",
        "checkP2": "2명",
        "location": "서울",
        "img": "url(./img/lcw_career_study.jpg)",
        "link": "./lcw_studyid1.html",
        "view": 21,
        "country":"국내",
        "YN":"모집중"
    },
    {
        "number": 1,
        "title": "[월수금일]토익 스터디 사람구함",
        "category": "어학",
        "during": "22.01.07 ~ 23.03.01",
        "checkP": "9",
        "checkP2": "10명",
        "location": "서울",
        "img": "url(./img/lcw_language_study.jpg)",
        "link": "./lcw_studyid2.html",
        "view": 588,
        "country":"국내",
        "YN":"모집중"
    },
    {
        "number": 2,
        "title": "세월이 야속하여 공무원 스터디를 진행할까 하는데 어떠신지요?",
        "category": "취업",
        "during": "93.02.22 ~ 25.02.21",
        "checkP": "0",
        "checkP2": "1명",
        "location": "뉴욕",
        "img": "url(./img/lcw_career_study.jpg)",
        "link": "./lcw_studyid3.html",
        "view": 2002202,
        "country":"국외",
        "YN":"모집중"
    },
    {
        "number": 3,
        "title": "복어기능사 준비",
        "category": "자격증",
        "during": "90.01.01 ~ 22.03.01",
        "checkP": "0",
        "checkP2": "10명",
        "location": "부산",
        "img": "url(./img/lcw_certi.jpg)",
        "link": "./lcw_studyid4.html",
        "view": 123,
        "country":"국내",
        "YN":"모집중"
    },
    {
        "number": 4,
        "title": "[월-금]멀티캠퍼스 취업반",
        "category": "취업",
        "during": "22.01.01 ~ 23.03.01",
        "checkP": "0",
        "checkP2": "3명",
        "location": " | 서울",
        "img": "url(./img/lcw_career_study.jpg)",
        "link": "#",
        "view": 12,
        "country":"국내",
        "YN":"모집중"
    },
{
        "number": 5,
        "title": "운전면허스터디 합니다.",
        "category": "자격증",
        "during": "22.01.01 ~ 22.03.01",
        "checkP": "0",
        "checkP2": "1명",
        "location": " | 경기",
        "img": "url(./img/lcw_certi.jpg)",
        "link": "#",
        "view": 13,
        "country":"국내",
        "YN":"모집중"
    },
{
        "number": 6,
        "title": "[컴활1급] 인강공유 스터디",
        "category": "자격증",
        "during": "22.01.01 ~ 22.03.01",
        "checkP": "0",
        "checkP2": "3명",
        "location": " | 경기",
        "img": "url(./img/lcw_certi.jpg)",
        "link": "#",
        "view": 11,
        "country":"국내",
        "YN":"모집중"
    },
{
        "number": 7,
        "title": "[원어민] 영어회화 스터디",
        "category": "어학",
        "during": "22.3.7 ~ 22.03.14",
        "checkP": "0",
        "checkP2": "00명",
        "location": " | 서울",
        "img": "url(./img/lcw_language_study.jpg)",
        "link": "#",
        "view": 58,
        "country":"국내",
        "YN":"모집중"
    },
    {
        "number": 8,
        "title": "JPT 950점 스터디",
        "category": "어학",
        "during": "22.3.7 ~ 22.03.14",
        "checkP": "0",
        "checkP2": "00명",
        "location": " | 서울",
        "img": "url(./img/lcw_language_study.jpg)",
        "link": "#",
        "view": 5,
        "country":"국내",
        "YN":"모집완료"
    },
{
        "number": 9,
        "title": "[중국어] 원어민과 함께",
        "category": "어학",
        "during": "22.3.7 ~ 22.03.14",
        "checkP": "0",
        "checkP2": "00명",
        "location": " | 서울",
        "img": "url(./img/lcw_language_study.jpg)",
        "link": "#",
        "view": 1,
        "country":"국내",
        "YN":"모집완료"
    },
    {
        "number": 10,
        "title": "[수시]히말라야 등산",
        "category": "기타",
        "during": "22.3.7 ~ 22.03.14",
        "checkP": "0",
        "checkP2": "00명",
        "location": " | 서울",
        "img": "url(./img/lcw_etc.jpg)",
        "link": "#",
        "view": 1,
        "country":"국내",
        "YN":"모집완료"
    },
    {
        "number": 11,
        "title": "기타",
        "category": "기타",
        "during": "22.3.7 ~ 22.03.14",
        "checkP": "0",
        "checkP2": "00명",
        "location": " | 서울",
        "img": "url(./img/lcw_etc.jpg)",
        "link": "#",
        "view": 1,
        "country":"국내",
        "YN":"모집완료"
    },
];

$(document).ready(function () {

    function make_card(){ $('ul.sub_cnt_slide_wrap.sub_cnt_slide01_wrap').append('<li class="sub_cnt_list sub_cnt_list01 ">'
        +'<a href="" class="new_out_bg on">'
            +'<p class="spec_pick"></p>'
        +'	<div class="pick_con_img" style=""></div>'
        +'	<div class="main_cnt_txtbox">'
        +		'<dl><dt class="view20Byte"> </dt>'
        +'			<dd><p class="infor txt01"><span class="red cate_infor"> </span></p><p class="infor thin date_infor txt02"></p>'
        +'			<p class="infor2 thin txt03"><span class="check_person thin"><strong></strong></span><span class="thin add_infor"></span></p>'
        +'			</dd><dd><p class="infor3"><strong class="thin"><span class="red thin"></span></strong></p></dd></dl></div></a></li>');
    }
    
    for(var i=0;i<12;i++){
        make_card();
    }
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
    let card_data=[];
    for(xx of study_group_data){
        card_data[xx.number]=$('li.sub_cnt_list.sub_cnt_list01:eq('+xx.number +')');
    }
    let cnt = 0;
    $('input:checkbox').click(function () {
        if(cnt==0){
            cnt++;
            for (let x =0; x<study_group_data.length;x++) {
                $('.sub_cnt_list:eq('+x+')').css('display','none');
            }
        }
        if($(this).is(":checked")){
            let cnt1=0;
            for(let x=0;x<study_group_data.length;x++){ 
                var i =study_group_data[x];
                if($(this).val()==i.category||$(this).val()==i.country||$(this).val()==i.YN){
                    $('ul.sub_cnt_slide_wrap.sub_cnt_slide01_wrap').append('<li class="sub_cnt_list sub_cnt_list01 ">'+	card_data[x].html()+'</li>');
                    cnt++;
                }
            }
        }
        else if($(this).is(":checked")==false){
            for(let x=0;x<study_group_data.length;x++){ 
                var i =study_group_data[x];
                if($(this).val()==i.category||$(this).val()==i.country||$(this).val()==i.YN){
                    console.log($(this).val()+"해제");
                    $('ul.sub_cnt_slide_wrap.sub_cnt_slide01_wrap').css('display','none');
                }
            }
        }
        cnt1=0;
    });
});