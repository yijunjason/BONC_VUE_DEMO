<template>
    <div id="main"></div>
</template>

<script>
    import * as echarts from 'echarts';

    export default {
        name: 'EchartsBar',
        props: {
            chartData: {
                type: Array,
                default: () => [],
            }
        },
        mounted() {
            this.echartsInit();
        },
        updated() {
            this.echartsInit();
        },
        methods: {
            echartsInit: function () {
                const myChart = echarts.init(document.getElementById('main'));
                myChart.setOption({
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: this.chartData
                    }]
                });
            },
        },
    }
</script>

<style>
    #main{
        width: 100%;
        height: calc(100% - 80px);
    }
</style>