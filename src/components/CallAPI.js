import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                label: 'west',
                data: [],
                fill: false,
                borderColor: "#3e95cd"
            }, 
            {
                label: 'national',
                data: [],
                fill: false,
                borderColor: "#8e5ea2",
            },
            {
                label: 'east',
                data: [],
                fill: false,
                borderColor: "#3cba9f"
            },
            {
                label: 'central',
                data: [],
                fill: false,
                borderColor: "#e8c3b9"
            },
            {
                label: 'south',
                data: [],
                fill: false,
                borderColor: "#c45850"
            },
            {
                label: 'north',
                data: [],
                fill: false,
                borderColor: "#c45850"
            }]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchData: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {

            var hours = response.data["items"]
            for (var i in hours){
                this.datacollection.labels.push(hours[i]["timestamp"])   
                this.datacollection.datasets[0]["data"].push(hours[i]["readings"]["psi_twenty_four_hourly"]["west"])
                this.datacollection.datasets[1]["data"].push(hours[i]["readings"]["psi_twenty_four_hourly"]["national"])
                this.datacollection.datasets[2]["data"].push(hours[i]["readings"]["psi_twenty_four_hourly"]["east"])
                this.datacollection.datasets[3]["data"].push(hours[i]["readings"]["psi_twenty_four_hourly"]["central"])
                this.datacollection.datasets[4]["data"].push(hours[i]["readings"]["psi_twenty_four_hourly"]["south"])
                this.datacollection.datasets[5]["data"].push(hours[i]["readings"]["psi_twenty_four_hourly"]["north"])
            }
            this.renderChart(this.datacollection, this.options)
        })
    }},
    created() {
        this.fetchData()
    }
}
 