<template>
    <div class="container">
      <h1>지역 단지 실거래가</h1>
      <!-- 테이블 -->
      <table class="data-table">
        <thead>
          <tr>
            <th>단지명</th>
            <th>매매가 (억)</th>
            <th>㎡당가격 (만원)</th>
            <th>전세가율 (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.totalPrice }}</td>
            <td>{{ item.pricePerSquare }}</td>
            <td>{{ item.rentRatio }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- 입력 폼 -->
      <div class="input-form">
        <h3>새 단지 추가</h3>
        <input type="text" v-model="newEntry.name" placeholder="단지명" />
        <input type="number" v-model="newEntry.totalPrice" placeholder="매매가 (억)" />
        <input type="number" v-model="newEntry.pricePerSquare" placeholder="㎡당가격 (만원)" />
        <input type="number" v-model="newEntry.rentRatio" placeholder="전세가율 (%)" />
        <button @click="addEntry">추가</button>
      </div>
  
      <!-- 차트 -->
      <line-chart :chart-data="chartData" />
    </div>
  </template>
  
  <script>
  import { reactive, ref } from "vue";
  import LineChart from "./components/LineChart.vue";
  
  export default {
    components: { LineChart },
    setup() {
      // 초기 데이터
      const data = reactive([
        { name: "래미안원펜타스", totalPrice: 62.6, pricePerSquare: 4929, rentRatio: 27.08 },
        { name: "테마하우스", totalPrice: 13.8, pricePerSquare: 1327, rentRatio: 72.23 },
        { name: "브리앙뜨", totalPrice: 17, pricePerSquare: 1339, rentRatio: 71.57 },
        { name: "대성유니드", totalPrice: 16.7, pricePerSquare: 1452, rentRatio: 60.13 },
        { name: "베르니스6차", totalPrice: 27, pricePerSquare: 1875, rentRatio: 87.04 },
      ]);
  
      const newEntry = ref({
        name: "",
        totalPrice: "",
        pricePerSquare: "",
        rentRatio: "",
      });
  
      const chartData = reactive({
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: "㎡당가격 (만원)",
            data: data.map((item) => item.pricePerSquare),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
  
      const addEntry = () => {
        if (newEntry.value.name && newEntry.value.totalPrice && newEntry.value.pricePerSquare && newEntry.value.rentRatio) {
          const newData = { ...newEntry.value, totalPrice: Number(newEntry.value.totalPrice), pricePerSquare: Number(newEntry.value.pricePerSquare), rentRatio: Number(newEntry.value.rentRatio) };
          data.push(newData);
  
          // 차트 업데이트
          chartData.labels.push(newData.name);
          chartData.datasets[0].data.push(newData.pricePerSquare);
  
          // 입력 필드 초기화
          newEntry.value = { name: "", totalPrice: "", pricePerSquare: "", rentRatio: "" };
        }
      };
  
      return {
        data,
        newEntry,
        chartData,
        addEntry,
      };
    },
  };
  </script>
  
  <style>
  .container {
    padding: 20px;
  }
  
  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .data-table th,
  .data-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .data-table th {
    background-color: #f4f4f4;
    text-align: left;
  }
  
  .input-form {
    margin-bottom: 20px;
  }
  
  .input-form input {
    margin-right: 10px;
    padding: 5px;
  }
  
  .input-form button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .input-form button:hover {
    background-color: #45a049;
  }
  </style>
  