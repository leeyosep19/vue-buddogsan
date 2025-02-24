<template>
  <div class="login-container">
    <div class="login-box">
      <h2>로그인</h2>
      <form @submit.prevent="handleLogin">
        <!-- 이메일 입력 -->
        <div class="input-group">
          <label for="email">이메일</label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>

        <!-- 비밀번호 입력 -->
        <div class="input-group">
          <label for="password">비밀번호</label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        <!-- 아이디 저장 & 로그인 상태 유지 -->
        <div class="checkbox-group">
          <label>
            <input
              type="checkbox"
              v-model="saveId"
            />
            아이디 저장
          </label>
          <label>
            <input
              type="checkbox"
              v-model="keepLoggedIn"
            />
            로그인 상태 유지
          </label>
        </div>

        <!-- 로그인 버튼 -->
        <button type="submit" class="login-button">로그인</button>
      </form>

      <!-- 추가 링크 -->
      <div class="extra-links">
        <router-link to="/find-id">아이디 찾기</router-link>
        <router-link to="/find-password">비밀번호 찾기</router-link>     
      </div>
      <p>아직 계정이 없으신가요?<router-link to="/login/accession">회원가입</router-link></p>
    </div>
  </div>
  <!-- 푸터 -->
  <footer class="footer">
    <div class="footer-content">
        <!-- 드롭다운 기능 -->
        <div class="company-info">
          <p @click="toggleDropdown " class="company-title" >
            (주) 주식회사 ▼
          </p>
          <div
            class="dropdown-content"
            v-if="isDropdownOpen == true"
          >
            <p>대표이사 : OOO</p>
            <p>사업자 등록번호 : 000-00-00000</p>
            <p>통신판매업 신고 : 00000000000000000</p>
            <p>주소 : 서울시 0000000000, 0000000000000 (0000)</p>
            <p>현장확인 전화 0000-0000 / 팩스 00-0000-0000</p>
            <p>이메일 0000@naver.com</p>
            <p>홍보확인 팩스 0000-0000 / 00-0000-0000</p>
            <p>모바일분양권 00000000000000000000</p>
            <p>신홍보 증빙 서류 0000000000000000000000</p>
          </div>
        </div>
    <div>
      <a href="">이용약관</a> |
      <a href="">개인정보처리 방침</a> |
      <a href="">위치기반 서비스 약관</a> |
      <a href="">청소년보호정책</a> |
      <a href="">매물광고자율규약</a> |
      <a href="">책임한계 및 법적고지지</a>
    </div>
      <div class="footer-content">
        <p>© 2025 YourWebsite. All Rights Reserved.</p>
        <div class="social-links">
          <a href="#" target="_blank">Facebook</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      saveId: false, // 아이디 저장 여부
      keepLoggedIn: false, // 로그인 상태 유지 여부
      isDropdownOpen: false, //드롭다운 풋터
    };
  },
  methods: {
    handleLogin() {
      // 로그인 처리 로직
      if (this.email && this.password) {
        alert(`
          로그인 시도 중!
          아이디 저장: ${this.saveId}
          로그인 상태 유지: ${this.keepLoggedIn}
        `);

        // 필요한 추가 로직 (예: API 호출, 로컬 스토리지 저장)
        if (this.saveId) {
          localStorage.setItem('savedEmail', this.email);
        } else {
          localStorage.removeItem('savedEmail');
        }
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    goToAboutAccessionPage() {
    this.$router.push('/login/accession');
    },

  },


  mounted() {
    // 저장된 이메일이 있으면 자동으로 입력
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
      this.email = savedEmail;
      this.saveId = true;
    }
  },
};
</script>

<style scoped>
/* 스타일 */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  font-family: 'Arial', sans-serif;
}
.footer{
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #6a11cb, #2575fc); 
}

.login-box {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.login-box h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
}

.input-group input:focus {
  border-color: #2575fc;
  box-shadow: 0 0 5px rgba(37, 117, 252, 0.5);
}

.checkbox-group {
  display: flex;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #555;
 
}

.checkbox-group label {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.checkbox-group input {
  margin-right: 0.5rem;
}

.login-button {
  width: 100%;
  padding: 0.8rem;
  background-color: #2575fc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #1a5dc1;
}

.extra-links {
  margin-top: 1.5rem;
  display: flex;
  font-size: 0.9rem;
}

.extra-links a {
  color: #2575fc;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;
}

.extra-links a:hover {
  text-decoration: underline;
}

.footer a{
  color: white;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-content p {
  margin: 0;
  font-size: 0.9rem;
}

.social-links {
  margin-top: 0.5rem;
}

.social-links a {
  margin: 0 0.5rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
}

.social-links a:hover {
  text-decoration: underline;
}

/* 드롭다운 스타일 */
.company-info {
  text-align: left;
  margin-bottom: 1rem;
  cursor: pointer;
  color: #fff;
}

.company-title {
  font-weight: bold;
  font-size: 1rem;
}

.dropdown-content {
  margin: 10px;
  background: #444;
  padding: 1rem;
  border-radius: 8px;
  color: #ddd;
  font-size: 0.9rem;
}

.dropdown-content p {
  margin: 0.3rem 0;
}
</style>
