<template>
    <div class="view-container">
      <h1 class="title">회원가입</h1>
      <p class="description">
        미디어윌 온라인 통합 회원은 하나의 아이디로<br />
        미디어윌 패밀리 사이트를 모두 이용하실 수 있습니다.
      </p>
  
      <div class="cards-container">
        <div class="card" @click="goToAboutAgreementPage">
          <div class="icon icon-general"></div>
          <h2>일반 회원 가입</h2>
          <p>개인 직거래 광고를 등록하시는 경우에는 일반회원으로 가입해주세요.</p>
        </div>
  
        <div class="card" @click="goTo('business')">
          <div class="icon icon-business"></div>
          <h2>개인/법인 사업자 회원 가입</h2>
          <p>
            임대사업 등 직거래 광고를 등록하시는 경우에는 개인/법인 사업자 회원으로 가입해주세요.
          </p>
        </div>
  
        <div class="card" @click="goTo('agent')">
          <div class="icon icon-agent"></div>
          <h2>공인중개사 회원 가입</h2>
          <p>부동산 중개거래 광고를 등록하시는 경우에는 공인중개사 회원으로 가입해주세요.</p>
        </div>
      </div>
  
      <button class="login-button" @click="goToLogin">로그인</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpView",
    methods: {

    goToAboutAgreementPage() {
    this.$router.push('/login/agreement');
    },
      goToLogin() {
        console.log("로그인 페이지로 이동");
      },
    },
  };
  </script>
  
  <style scoped>
  /* 전체 화면 스타일 */
  .view-container {
    font-family: "Arial", sans-serif;
    text-align: center;
    padding: 20px;
  }
  
  /* 제목 스타일 */
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* 설명 텍스트 */
  .description {
    color: #555;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  /* 카드 컨테이너 */
  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
  }
  
  /* 카드 스타일 */
  .card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px 20px;
    width: 90%;
    max-width: 400px;
    text-align: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  
  .card h2 {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
  }
  
  .card p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
  
  /* 아이콘 스타일 */
  .icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    background-size: cover;
  }
  
  /* .icon-general {
    background-image: url('/icons/general.png');
  }
  
  .icon-business {
    background-image: url('/icons/business.png');
  }
  
  .icon-agent {
    background-image: url('/icons/agent.png');
  } */
  
  /* 로그인 버튼 스타일 */
  .login-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  </style>
  