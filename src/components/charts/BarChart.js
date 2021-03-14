import { Bar } from 'vue-chartjs'
import database from "../../firebase.js"

export default {
    extends: Bar,
    data: function () {
        return {

            datacollection: {
                labels: [],
                datasets: [{
                    label: [],
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#e6a749"],
                    data: [0, 0, 0, 0, 0, 0]
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total number of each dish'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods: {
        fetchItems: function () {
            database.collection('menu').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    this.datacollection.labels.push(doc.data().name)
                })
            })
        },
        fetchData: function () {
            database.collection('orders').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    Object.entries(doc.data()).
                        forEach(item => {
                            if (item[1] > 0) {
                                for (var i = 0; i < this.datacollection.labels.length; i++) {
                                    if (item[0] === this.datacollection.labels[i]) {
                                        this.datacollection.datasets[0].data[i] += item[1];
                                        break;
                                    }
                                }
                            }
                        }
                        )
                })
                this.renderChart(this.datacollection, this.options)
            })
        }
    },
    created() {
        this.fetchItems();
        this.fetchData();
    }
}
