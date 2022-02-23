
window.onload = function(){
	var ampm;
	var h;
	var m;
	var board1;
	var contents = document.getElementById("contents");
	var output = document.getElementById("output");
	
	var chatbtn = document.getElementById("chatbtn");
	var badlang = ["시발", "개새끼", "병신","지랄"]


	class Board{
		constructor(contents){
	
			this.contents = contents;
			this.time = new Date();
			 ampm = (this.time.getHours()>12 ?  "PM" : "AM");
			  h = (this.time.getHours()>12 ? this.time.getHours()-12 : this.time.getHours());
			 m = this.time.getMinutes();
		}
		toString(){
		return "<img src='./img/profile.jpg' width=30px height=30px>" + "멀티캠퍼스:" + "<br>" + 
		"<img src='./img/tail.png' width=15px height=18px>" + "<div class='balloon'> " + this.contents + "</div>" +"<br>"+ 
		  ampm+ " " +h+":"+ m ;
		}
	}
	
	
	
	chatbtn.onclick = function(){
			board1 = new Board(contents.value);
			for(var i=0; i < badlang.length; i++){
				if(badlang[i].value == board1.contents){
					alert("욕설로 인해 강퇴됩니다");
					contents.value = null;
					window.open("about:blank","_self").close();

				}
			}
			output.innerHTML +="<br>"+board1.toString() + "<br>";
			output.scrollTop = output.scrollHeight;
				contents.value = null;
		}
	contents.onkeypress = function(){
		
		if(event.keyCode==13){
			board1 = new Board(contents.value);
			for(var i=0; i < badlang.length; i++){
				if(badlang[i] == board1.contents){
					alert("욕설로 인해 강퇴됩니다");
					window.open("about:blank","_self").close();
				}
			}
		
				output.innerHTML += "<br>"+ board1.toString() +"<br>";
				output.scrollTop = output.scrollHeight;
				contents.value = null;
		}
		
			
		}
		
	}
  
