<template>
    <!-- <nav>
    <router-link to="/about"></router-link>
    <router-link to="/login"></router-link>
   </nav> -->
    <!-- 모달창 상세페이지지 -->
  <div class="modal" v-if=" modalop == true">
    <div class="modal-bg">
      <button @click=" modalop = false" class="closeBT">✕</button>
      <h4>
        {{ oneroom[roomMoCk].title }}      
      </h4>
      <img :src=oneroom[roomMoCk].image class="roomimg">
      <p>{{ oneroom[roomMoCk].content }}</p>
      <p>{{ oneroom[roomMoCk].adder }} 지역</p>
      <p>{{ oneroom[roomMoCk].price  }} 원</p>
      <button @click=" oneroom[roomMoCk].declaration += 1 ">허위매물 신고</button>
      <span>신고수 : {{oneroom[roomMoCk].declaration}}</span><br>
      <button @click=" modalop = false"  class="closeBT-1">닫기</button>
    </div>
  </div>
  
   
  
    <div class="menu">
      <!-- <a href="">Home</a>
      <a href="">Products</a>
      <a href="" v-for="x in 3" :key="x">About</a>  -->
      <!-- 반복문  <a v-for="작명 in 반복 횟수" :key="작명">Home</a>  -->
      <a href="" v-for="a in menu1" :key="a">{{ a }}</a> 
      <a>☆</a>
      <button @click="goToAboutPage" >로그인</button>
      <a class="menuM" href="">＃</a>
    </div>

    <div class="discountBa">
      <div class="discountBa-1">
      <h4>지금 결제하면 20%할인</h4>
      </div>
    </div>
    
    <!-- <div >
      <img src="../assets/room0.jpg" class="roomimg">
      <h4 @click=" modalop = true">{{ products[0] }}</h4>
      <P>{{ price1 }} 만원</P>
      <button @click=" num[0] += 1 ">허위매물 신고</button>
      <span>신고수 : {{ num[0] }}</span>
  
    </div> -->
  
    <!-- <div>
      <img src="../assets/room1.jpg" class="roomimg">
      <h4 @click=" modalop = true">{{ products[1] }}</h4>
      <P>{{ price2 }} 만원</P>
      <button @click=" num[1] += 1 ">허위매물 신고</button>
      <span>신고수 : {{ num[1] }}</span>
  
    </div> -->
  
    <!-- <div>
      <img src="../assets/room2.jpg" class="roomimg">
      <h4 @click=" modalop = true">{{ products[2] }}</h4>
      <P>{{ price2 }} 만원</P>
      <button @click=" num[2] += 1 ">허위매물 신고</button>
      <span>신고수 : {{ num[2] }}</span>
      
    </div> -->

    <!-- 반복문 이용용 -->

    <div class="roomMain" v-for="(a,i) in oneroom" :key="i" >
      <img :src=oneroom[i].image class="roomimg">
      <h4 @click=" modalop = true;  roomMoCk= i">{{ oneroom[i].title}}</h4>
      <P>{{ oneroom[i].adder }} 지역</p>
      <P>{{ oneroom[i].price}} 원</P>
      <button @click=" oneroom[i].declaration += 1 "> 허위매물 신고</button>
      <span>신고수 : {{oneroom[i].declaration}}</span>
    </div> 
    

  </template>
  
  <script>

import room from '../assets/room.js';

  
  export default {
    name: 'App',
    data(){
  
      return{
        price1 : 60,
        price2 : 70,
        price3 : 80,        
        products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
        products1 : ['반월당월룸','수성동원룸','반포동원룸룸'],
        menu1 : ['홈','아파트','주택','원룸','상가','빌딩','분양'],
        prices : ['60','70','80'],
        adder : ['대구','부산','대전'],
        num : [0,0,0],
        nums : [0,0,0],
        images:[
          require('@/assets/room0.jpg'),
          require('@/assets/room1.jpg'),
          require('@/assets/room2.jpg'),
        ],
        // declaration :[0,0,0],


        oneroom : room,
        modalop : false, //모달창창
        roomMoCk :0,
        selectedProduct: {},  
  
      }
    },
    methods: {
      increase(){
        this.declaration += 1;
      },

    goToAboutPage() {
    this.$router.push('/login');
    },
    
    goToAboutPage1() {
    this.$router.push('/about');
    },


    },
  
    components: {

    }
  }
  </script>
  
  <style>
  
  body{
    margin: 0;
  }
  div{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  
  #app {
    font-family: Avenir, Helvetica,bo Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
   
  }
  .menu{
   display: flex;
   justify-content: center;
   align-content: center;
  
   background: linear-gradient(to right, #6a11cb, #2575fc);
   padding:  15px;
   border-radius: 10px;
  
  }

  .menu  a {
    color: aliceblue;
    font-size: 2.1rem;
    padding: 16px;
  }

  .menu button{
    height: 50px;
    color: blue;
    background-color: white;
    border:0;
    border-radius: 10px;
    margin: 15px;

  }
  .menu .menuM{
    display: none;
  }

  /* 태블릿 화면 크기 */
  @media (max-width: 1023px) and (min-width: 768px) {
    
    .menu a {
        font-size: 30px; 
        padding:  15px;
    }


  }

  /* 모바일 화면 크기 */
  @media (max-width: 767px) {
    .menu a:not(.menuM), 
 
    .menu a {
        font-size: 15px; 
        padding:  10px;
        display: none;
    }
    .menu button{
      display: none;
    }
    .menu .menuM { /* #만 보이게 설정 */
    display: block;
    font-size: 2rem; /* 필요에 따라 크기 조정 */
  }
  }
  @media (max-width: 320px) { 
    .menu a:not(.menuM), 
    .menu a {
        font-size: 11px; 
        padding:  5px;
        display: none;
    }
    .menu button{
      display: none;
    }
    .menu .meunM { /* #만 보이게 설정 */
    display: block;
    font-size: 2rem; /* 필요에 따라 크기 조정 */
  }
  }



.discountBa {
  height: 100px; 
  background: lightpink;
  padding: 15px;
  margin: 10px;
  border-radius: 15px;
  font-size: 35px;
  white-space: nowrap; /* 줄바꿈 없이 한 줄로 */
  overflow: hidden;
 
}

.discountBa h4{
margin: 0;
animation: slideIn 7s linear infinite;
}


@keyframes slideIn {
  0% {
    transform: translateX(90%); 
  }
  100% {
    transform: translateX(-90%); 
  }
}

  .closeBT {
    background-color:lightblue ; 
    color: white;
    border: none; 
    border-radius: 15%; 
    padding: 0; 
    width: 32px;
    height: 32px;
    font-size: 30px;
    display: flex; 
    justify-content:space-between;
    align-items:center;
    cursor: pointer; 
    margin-left: 95%;
    padding: 2px;
    object-fit: cover;
    
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    .closeBT {
      width: 32px;
      height: 32px;
        font-size: 30px; 
        padding: 2px;
    }
  }

  /* 모바일 화면 크기 */
  @media (max-width: 767px) {
    .closeBT {
      width: 26px;
      height: 26px;
        font-size: 20px; 
        padding: 2px;
    }
  }


  .closeBT-1{
    margin: 10px;
  }



  .roomimg {
    width: 60%;
    margin: 20px;
    object-fit: cover;
  }
  
  .roomMain button{
    margin:1px 10px;
  }


  .modal{
  width: 100%;
  height: 100%;
  background-color:rgba(15,15,15,0.6);
  position: fixed;
  padding: 50px;
  margin-top: 50px;
  margin: 0px;
  z-index: 10;
  }
  .modal-bg{
  width: 100%;
  background: rgb(250, 248, 248);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
  }
  

</style>
