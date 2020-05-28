<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>

    <script>
        var data,content,x,count = 0,input,keyinput = "",li;
        $(document).ready(function(){
            var request = new XMLHttpRequest();
            request.open("GET","https://testapi.io/api/Yevrah/myDict",true);
            request.send();
            request.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    data = JSON.parse(this.responseText);
                    x = data.dictionary;
                    for(var word of x){
                        $(".li").append("<li>"+ word["word"]+"</li>");
                        count++;
                    }
                   
                    $("#input_box").ready(function(){
                        var inputs = $("#input_box");
                        input = inputs.val();
                        li = $("li");
                        inputs.keydown(function(input){
                            content = input.originalEvent.key;
                            keyinput = keyinput + (content == "Meta"||content == "Alt"||content == "Backspace"||content == "Control"|| content == "Enter" ||content == "Shift")?"":content;
                            if(content == "Backspace"){
                                keyinput = keyinput.slice(0,-1);
                                if(keyinput == ""){
                                    keyinput = "$%#";
                                }
                            }
                            for(var i = 0;i < count ;i++){
                                if(li[i].innerHTML.toLowerCase().indexOf(keyinput) > -1){
                                    li[i].style = "display: block";
                                }else{
                                    li[i].style = "display: hide";
                                }  
                            }
                            keyinput = "";
                        });
                    li.click(function(){
                        FocusOut();
                        var y = this;
                        $("#input_box").val(y.innerHTML);
                        for(var temp of x){
                            console.log(temp["word"]);
                            if(temp["word"].toLowerCase() == $("#input_box").val().toLowerCase()){
                                $("#break").after("<div class='bigCont'><h2 id = 'word'>"+ temp["word"]+"</h2><p id = 'means'>"+temp["means"]+"</p></div>");
                            }
                        }
                        
                    });
                    
                    });
                    $("#search").click(function(){
                        var html;
                        for(var temp of x){
                            if(temp["word"].toLowerCase() == $("#input_box").val().toLowerCase()){
                                html ="<div class='bigCont'><h2 id = 'word'>"+ temp["word"]+"</h2><p id = 'means'>"+temp["means"]+"</p></div>";
                                break;
                            }else{
                                html = "<div class='bigCont'><h1><b>No Words Found</b><h1></div>";
                            }          
                        }
                        $("#break").after(html);
                        FocusOut();
                    });
                }
                
            };
            //http://tips4pc.com/forums/topic/computer-terms-meanings-definitions-dictionary-language
            //$("center").after("<div class = 'bigCont'><h3>word</h3><p>"+data.dictionary.word+"</p></div>");
        })

        function FocusOut(){
            $("li").hide();
        }

        function Focus(){
            $("li").show();
        }
    </script>