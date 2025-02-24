<!-- <template>
    <div>
      <h1>주소 검색 및 지도 표시</h1>
      <button @click="openPostcode">주소 검색</button>
      <p v-if="address"><strong>선택한 주소:</strong> {{ address }}</p>
      <div id="map" style="width: 100%; height: 400px; margin-top: 20px;"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        address: "", // 선택된 주소
        map: null, // 지도 객체
        marker: null, // 마커 객체
      };
    },
    methods: {
      // 다음 우편번호 서비스 실행
      openPostcode() {
        new daum.Postcode({
          oncomplete: (data) => {
            // 선택한 주소 저장
            this.address = data.address;
  
            // 주소로 좌표 검색 후 지도 업데이트
            this.searchAddressToCoordinates(this.address);
          },
        }).open();
      },
  
      // 주소를 좌표로 변환하여 지도 표시
      searchAddressToCoordinates(address) {
        const geocoder = new kakao.maps.services.Geocoder();
  
        geocoder.addressSearch(address, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
            // 지도 초기화 또는 이동
            if (!this.map) {
              this.initMap(coords);
            } else {
              this.map.setCenter(coords);
              this.marker.setPosition(coords);
            }
          } else {
            alert("주소를 찾을 수 없습니다.");
          }
        });
      },
  
      // 지도 초기화
      initMap(coords) {
        this.map = new kakao.maps.Map(document.getElementById("map"), {
          center: coords,
          level: 3,
        });
  
        // 마커 추가
        this.marker = new kakao.maps.Marker({
          position: coords,
        });
        this.marker.setMap(this.map);
      },
    },
    mounted() {
      // 카카오 지도 스크립트 로드
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services";
      script.onload = () => {
        console.log("카카오 지도 API 로드 완료");
      };
      document.head.appendChild(script);
    },
  };
  </script>
  
  <style>
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: #0056b3;
  }
  #map {
    border: 1px solid #ccc;
  }
  </style>
   -->