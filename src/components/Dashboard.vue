<template>
    <div>
        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/orders" exact>Orders</router-link></li>
            <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
        </ul>
        <barchart></barchart>
        <h1>Line Chart</h1>
        <lineChart></lineChart>
    </div>
</template>

<script>
import barchart from './charts/BarChart.vue'
import lineChart from './CallAPI.vue'
export default{
    components:{
        barchart,
        lineChart,
    }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #db6ac3;
  border-radius: 10px;
  border-width: 1px;
}
</style>
