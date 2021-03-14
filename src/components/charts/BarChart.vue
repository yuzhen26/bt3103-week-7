<template>
  <div class="chart">
    <h1>Bar Chart</h1>
    <BarChart></BarChart>
  </div>
</template>

<script>
import BarChart from "./BarChart.js";
export default {
  components: {
    BarChart
  }
};
</script>

<style>
h1 {
    color:rgb(175, 145, 204);
    text-align: center;
    font-size: 35px;
    background-color: aliceblue;
}

</style>