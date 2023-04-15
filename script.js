
function redirect(){
  
    window.location.href = "./playpage.html";
}
var nameof = document.getElementById("winner");
var score = document.getElementById("winner-point");
var totalwinTime = 0;
var coin = 3;

const urlParams = new URLSearchParams(window.location.search);
const UserName = urlParams.get('name');
if(UserName==null){
  UserName=".";
}


function flipCoin(coinValue) {
     
    var result = Math.random();
    
    if(coin<=0){
      nameof.innerText=`Game Over ${UserName}`;
      score.innerText=`You Total Time Win ${totalwinTime}`;
      setTimeout(function(){
        window.location.href = "./index.html";
      },3000);
    }else{

        
            if (result > 0.5) {
              if(coinValue=="head"){
                ++coin;
                ++totalwinTime;
                nameof.innerText=`You Win ${UserName}`;
                score.innerText=`You Total Score ${coin} `;
                console.log("win")
              }else{
                --coin;
                nameof.innerText=`You Loose ${UserName}`;
                score.innerText=`You Total Score ${coin} `;
                console.log("Loose")
              }
              var image = document.getElementById("result-img")
              image.src = "./images/pasa.png";
              image.style.cssText=`
                display:block;
                
              `;
              setTimeout(function(){
                image.style.cssText=`display:block;
              
                `;
              },2000);
              
        
            } else {
              if(coinValue=="tail"){
                console.log("win")
                ++coin;
                ++totalwinTime;
                nameof.innerText=`You Win ${UserName}`;
                score.innerText=`You Total Score ${coin} `;
              }else{
                --coin;
                console.log("Loose")
                nameof.innerText=`You Loose ${UserName}`;
                score.innerText=`You Total Score ${coin} `;
              }
              var image2=document.getElementById("result-img")
                  image2.src = "./images/bhart.png";
        
                  image2.style.cssText=`display:block;
                
                  `;
                  setTimeout(function(){
                    image2.style.cssText=`display:block;
                  
                    `;
                  },2000);
            }
    }

  }