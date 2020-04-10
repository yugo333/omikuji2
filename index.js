'use strict'

{
  const btn = document.getElementById('btn');

//配列から取り出す
  btn.addEventListener('click',()=>{
    const result = ['大吉','中吉','小吉','fuck'];
    const number = Math.floor(Math.random()*result.length);
    btn.innerText = result[number];
  });

//確率だし
  // btn.addEventListener('click',()=>{
  //   const n = Math.random();
  //   if (n < 0.1){
  //     btn.innerHTML = '大吉';
  //   }　else if (n < 0.4){
  //     btn.innerHTML = '中吉';
  //   }else{
  //     btn.innerHTML = '小吉'
  //   }
  // });


//クリック時に文字を変えるswitch文
  // btn.addEventListener('click',()=>{
  //   const number = Math.floor(Math.random()*3);
  //   // btn.textContent= number;//これ要らなくなる

  //   switch(number){
  //     case 0:
  //       btn.textContent = '大吉';
  //       break;
  //     case 1:
  //       btn.textContent = '中吉';
  //       break;
  //     case 2:
  //       btn.textContent = `小吉`;
  //       break;
  //   }
  // });

}