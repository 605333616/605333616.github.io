document.getElementById("tableOfContents").innerHTML='<div class="content">'+
'<div style="display: flex;"><h4 style="margin-left:50px">目录</h4></div>'+
'<ol style="margin-top:3px;list-style:none" id="c1">'+
'</ol></div></div>';
var TofcName=["计算系统信息处理","信息的处理与显示","程序的底层显示","CPU的体系结构","优化程序性能","存储器的层次结构","链接","异常控制流","虚拟储存器","系统I/O","网路编程","并发编程"]
var TofcNameUrl=["http://127.0.0.1:4000/jekyll/update/2019/12/17/CSInformation.html",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""]

var TofcLName=
[["1","2","3"],
["","",""],
["","",""],
["","",""],
["","",""],
["","",""],
["","",""],
["","",""],
["","",""],
["","",""],
["","",""],
["","",""]]
var TofcNum=""
var TofcId="TofcId"
for(var i=0;i<TofcName.length;i++){
    TofcId="TofcId"+i;
    Tofctext='<li>'+
      '<button id="'+TofcId+'" class="TOfC" onclick="buttonDisplay('+i+')">+</button><a href="'+TofcNameUrl[i]+'">'
      +TofcName[i]+'</a><br/>'+
      '<ol style="margin-top:3px;list-style:none" id="lc'+i+'"></ol>'+
      '</li>';
    TofcNum=TofcNum+Tofctext;
}
document.getElementById("c1").innerHTML=TofcNum;

  for(var i=0;i<TofcLName.length;i++){
    var TofcNum=""
    for(var j=0;j<TofcLName[i].length;j++){
    TofcLtext='<li><a>'+TofcLName[i][j]+'</a></li>';
    TofcNum=TofcNum+TofcLtext
    }
    cid="lc"+i
    document.getElementById(cid).innerHTML=TofcNum;
    document.getElementById(cid).style.display = "none";
}

function buttonDisplay(num){
      var id="TofcId"+num
      cid="lc"+num
      id=document.getElementById(id);
      cid=document.getElementById(cid);
      if(id.innerHTML=="+"){
        id.innerHTML="-";
        cid.style.display = "block";
        for(var i=0;i<TofcLName.length;i++){
          fid="TofcId"+i
          fcid="lc"+i
          fid=document.getElementById(fid);
          fcid=document.getElementById(fcid);
          if(i==num){
            continue;
          }
          fid.innerHTML="+";
          fcid.style.display = "none";
        }
      }
      else{
        id.innerHTML="+";
        cid.style.display = "none";
      }
      
    }
