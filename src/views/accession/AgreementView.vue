<template>
    <div class="agreement-container">
      <h1>일반 회원가입</h1>
      <div class="step-indicator">
        <span class="step active">1</span>
        <span class="step">2</span>
      </div>
      <div class="agreement-box">
        <button class="agree-all-btn" @click="toggleAllAgreements">
          <!-- <span class="check-icon">✔</span> -->
          ✔ 모두 동의합니다.
        </button>
        <p class="agree-description">
          이용약관, 개인정보 수집 및 이용, 마케팅·이벤트 정보 수신(선택)에 <span class="highlight">모두 동의</span>합니다.
        </p>
        <ul class="agreement-list">
          <li v-for="(item, index) in agreements" :key="index">
            <label>
              <input type="checkbox" v-model="item.checked" />
              {{ item.text }} <span :class="item.required ? 'required' : 'optional'">({{ item.required ? '필수' : '선택' }})</span>
            </label>
            <a href="#" class="details-link">내용 ></a>
          </li>
        </ul>
        <div class="button-group">
          <button class="cancel-btn" @click=" goToAboutPage">취소</button>
          <button class="confirm-btn">본인인증</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AgreementView",
    data() {
      return {
        agreements: [
          { text: "이용약관 동의", required: true, checked: false },
          { text: "만 14세 이상 확인", required: true, checked: false },
          { text: "개인정보 수집 이용 동의", required: true, checked: false },
          { text: "마케팅, 이벤트정보 수신 동의", required: false, checked: false },
        ],
        allChecked: false, // 모두 동의 상태
      };
    },
    methods: {
      toggleAllAgreements() {
        this.allChecked = !this.allChecked;
        this.agreements.forEach((item) => {
          item.checked = this.allChecked;
        });
      },

    goToAboutPage() {
    this.$router.push('/login');
    },

    },
  };
  </script>
  
  <style scoped>
  .agreement-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .step-indicator {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .step {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    background-color: #e0e0e0;
    color: #fff;
    margin: 0 5px;
    font-size: 14px;
  }
  .step.active {
    background-color: #007bff;
  }
  .agreement-box {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .agree-all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .agree-all-btn:hover{
    background-color: #007bff;
    color: white;
  }

  /* .agree-all-btn .check-icon {
    color: #007bff;
    margin-right: 10px;
  }
  .agree-all-btn .check-icon:hover{
    color: white;
  } */

  .agree-description {
    font-size: 12px;
    color: #555;
    margin-bottom: 15px;
  }
  .agree-description .highlight {
    color: #007bff;
    font-weight: bold;
  }
  .agreement-list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
  }
  .agreement-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .agreement-list label {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .required {
    color: #007bff;
    margin-left: 5px;
  }
  .optional {
    color: #888;
    margin-left: 5px;
  }
  .details-link {
    font-size: 12px;
    color: #007bff;
    text-decoration: none;
  }
  .details-link:hover {
    text-decoration: underline;
  }
  .button-group {
    display: flex;
    justify-content: space-between;
  }
  .cancel-btn,
  .confirm-btn {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .cancel-btn {
    margin-right: 10px;
    background-color: #f1f1f1;
    color: #555;
  }
  .cancel-btn:hover{
    background-color: #007bff;
    color: #fff;
  }

  .confirm-btn {
    background-color: #f1f1f1;
    color: #555;
  }
  .confirm-btn:hover{
    background-color: #007bff;
    color: #fff;
  }

  </style>
  