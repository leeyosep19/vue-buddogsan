<template>
    <canvas ref="chart"></canvas>
  </template>
  
  <script>
  import { onMounted, watch, ref } from "vue";
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default {
    props: {
      chartData: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const chart = ref(null);
  
      onMounted(() => {
        chart.value = new Chart(chart.value, {
          type: "line",
          data: props.chartData,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          },
        });
      });
  
      watch(
        () => props.chartData,
        (newData) => {
          chart.value.data = newData;
          chart.value.update();
        },
        { deep: true }
      );
  
      return {
        chart,
      };
    },
  };
  </script>
  