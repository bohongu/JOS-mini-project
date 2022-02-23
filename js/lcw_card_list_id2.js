var study_group_data = [
	{
		"number": 0,
		"title": "ncs 스터디 부지런한 사람만",
		"category": "취업",
		"during": "22.01.07 ~ 23.03.01",
		"checkP": "1",
		"checkP2": "2명",
		"location": "서울",
		"location2": "마포구 연남동",
		"img": "url(./img/lcw_career_study.jpg)",
		"link": "./lcw_studyid1.html",
		"view": 21,
		"cost": "미정",
		"time":"월화수목금 오전 9~18시"

	},
	{
		"number": 1,
		"title": "[월수금일]토익 스터디 사람구함",
		"category": "어학",
		"during": "22.01.07 ~ 23.03.01",
		"checkP": "9",
		"checkP2": "10명",
		"location": "서울",
		"location2": "강동구 천호동",
		"img": "url(./img/lcw_language_study.jpg)",
		"link": "./lcw_studyid2.html",
		"view": 588,
		"cost": "미정",
		"time":"월수금 오전 9~18시"

	},
	{
		"number": 2,
		"title": "세월이 야속하여 공무원 스터디를 진행할까 하는데 어떠신지요?",
		"category": "취업",
		"during": "93.02.22 ~ 25.02.21",
		"checkP": "0",
		"checkP2": "1명",
		"location": "뉴욕",
		"location2": "타임스퀘어",
		"img": "url(./img/lcw_career_study.jpg)",
		"link": "./lcw_studyid3.html",
		"view": 2002202,
		"cost": "미정",
		"time":"월화수목금토일 오전 9~18시"

	},
	{
		"number": 3,
		"title": "복어기능사 준비",
		"category": "자격증",
		"during": "90.01.01 ~ 22.03.01",
		"checkP": "0",
		"checkP2": "10명",
		"location": "부산",
		"location2": "사하구",
		"img": "url(./img/lcw_certi.jpg)",
		"link": "./lcw_studyid4.html",
		"view": 123,
		"cost": "미정",
		"time":"월화수목금토 오전 9~18시"

	},

];
	var select=study_group_data[1];
	$(document).ready(function() {
		$('div.inner_review_title').append(select.category);
		$('h3:eq(0)').html(select.title);
		$('div.sub_inner_main_img img').css('src','./img/lcw_language_study.jpg');
		$('.review').html('#스터디모집 #스터디 #어학스터디 #토익');
		$('td:eq(0)').html(select.category);
		$('td:eq(1)').html(select.location);
		$('td:eq(2)').html(select.location2);
		$('td:eq(3)').html(select.during);
		$('td:eq(4)').html(select.time);
		$('td:eq(5)').html(select.cost);
		$('td:eq(6)').html(select.checkp2);
		
		
	});