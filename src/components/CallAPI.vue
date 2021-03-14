<template>
  <div class="chart">
    <lineChart></lineChart>
  </div>
</template>

<script>
import lineChart from "./CallAPI.js";
export default {
  components: {
    lineChart
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