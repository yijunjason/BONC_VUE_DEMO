<template>
    <div id="main"></div>
</template>

<script>
    import * as echarts from 'echarts';
    import chinaMap from './mapJSON/china.json';

    export default {
        name: 'EchartsMap',
        props: {
            cityDataP: {
                type: Array,
                default: () => [],
            },
            areaDataP: {
                type: Array,
                default: () => [],
            },
            mapLineDataP: {
                type: Array,
                default: () => [],
            },
        },
        data: function() {
            return {
                cityData: this.cityDataP,
                areaData: this.areaDataP,
                mapLineData: this.mapLineDataP,
            }
        },
        mounted() {
            this.echartsInit();
        },
        updated() {
            this.echartsInit();
        },
        methods: {

            convertData: function(data) {
                let res = [];
                for (let i = 0; i < data.length; i++) {
                    if (this.geoCoordMap.filter(item => item.name === data[i].name).length)
                        res.push({
                            name: data[i].name,
                            value: this.geoCoordMap.filter(item => item.name === data[i].name)[0].value.concat(data[i].value)
                        })
                }
                return res;
            },
            barData: function(data) {
                return data.map((item) => {
                    return [ item.value, item.name ]
                })
            },
            echartsInit: function () {
                const myChart = echarts.init(document.getElementById('main'));

                const name = 'china';

                echarts.registerMap(name, chinaMap, {});

                const option = {
                    backgroundColor: '#fff',
                    title: {
                        top: 20,
                        text: '累死都没显示成功的地图',
                        subtext: '大概是副标题',
                        x: 'center',
                        textStyle: {
                            color: '#000'
                        },
                    },
                    geo: {
                        type: 'map',
                        map: name,
                        roam: false,// 缩放（scale）和平移（mofalseve），设置为true为二者都开放
                        selectedMode: false, // map模式下，当存在series-map时，该属性会被series-map.selectedMode: 'single'覆盖，需要在series-map中额外设置
                        // silent: false, //
                        geoIndex: 1,
                        zoom: 1.5,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#ffffff'  //字体颜色
                                },
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#ffffff'  //选中后的字体颜色
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#9DB2FF',
                                shadowColor:'rgb(58,115,192)',
                                shadowOffsetX: 10,
                                shadowOffsetY: 11
                            },
                            emphasis: {
                                areaColor: '#2AB8FF',
                                borderWidth: 0,
                                color: 'green',
                                label: {
                                    show: false
                                }
                            }
                        },
                        // select: {
                        //   itemStyle: {
                        //     areaColor: 'black', // 选中时的默认颜色
                        //   }
                        // },
                        data: this.cityData,
                    },
                    tooltip: {
                        formatter: (params) => {
                            // params.data; // 该区域的data数据
                            // params.value; // 该区域的value数据
                            // params.seriesName; // 鼠标区域的数据series.name，可用来判断该数据来源
                            if (!params.data) {
                                return ``;
                            }

                            if (params.seriesName === '市报名人数') {
                                return `${params.seriesName} <br /> ${params.data.name}: ${params.value}`;
                            }
                            if (params.seriesName === '区县报名人数') {
                                return `${params.seriesName} <br /> ${params.data.name}: ${params.value[2]}`;
                            }
                            if (params.seriesName === 'Top 5') {
                                return `${params.seriesName} <br /> ${params.data.name}: ${params.value[2]}`;
                            }
                            return `${params.seriesName} <br /> ${params.value}`
                        }

                    },
                    visualMap: {
                        show: true,
                        //设置最大值和最小值
                        min: 0,
                        max: 100,
                        //设置位置
                        left: '4%',
                        top: '40%',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        seriesIndex: [0], //作用在哪个series上
                        inRange: {
                            color: ['#ffcbc5', '#4f63ff'] //粉黄
                        }
                    },
                    grid: {
                        left: '85%',
                        right: '5%',
                    },
                    xAxis: {
                        type: 'value',
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 1,
                            textStyle: {
                                color: '#aaa'
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true, //改变数据顺序
                        nameGap: 16,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            show: true,
                            textStyle: {
                                color: '#000000'
                            }
                        },
                    },
                    series:[
                        {
                            name: "市报名人数",
                            roam: false,
                            type: "map",
                            // geoIndex: 0, // 该属性的设置会导致series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。
                            map: name,
                            data: this.cityData,
                            zoom: 1.5,
                            // selectedMode: 'single', // 默认'single'，在map模式下，geo.selectedMode的属性会被无效化。
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        color: '#ffffff'  //字体颜色
                                    },
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#ffffff'  //选中后的字体颜色
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgb(147, 235, 248)',
                                    borderWidth: 1,
                                    areaColor: '#2AB8FF',
                                },
                                emphasis: {
                                    areaColor: 'rgb(0,0,0)',
                                    shadowColor: 'rgb(12,25,50)',
                                    borderWidth: 0.1
                                }
                            },
                        },
                        {
                            name: '区县报名人数',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            showEffectOn: 'render',
                            rippleEffect: {
                                period: 4,
                                scale: 4,
                                brushType: 'stroke' // 'fill'
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: '#fffd21', //设置圆点的颜色
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            symbolSize: function (params) {
                                // console.log('paramsparams', params);
                                if (params[2] > 30)
                                    return params[2] / 10;
                                else
                                    return 3;
                            }, //圆点的大小可以自行设置，这里不赘述
                            data: this.areaData,
                        },
                        {
                            name: 'Top 5',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'pin',
                            symbolSize: 40,
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 9,
                                        fontWeight: 'bold'
                                    },
                                    formatter(value) {
                                        return value.data.value[2]
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#F62157', //标志颜色
                                }
                            },
                            //使用之前的函数处理数据，为之前的cityData添加经纬度，当然也可以让初始数据像之前的areaData一样就有经纬度
                            data: this.convertData(this.cityData),
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            zlevel: 1
                        },
                        {
                            name: '柱状图',
                            zlevel: 1.5,
                            type: 'bar',
                            symbol: 'none',
                            // itemStyle: {
                            //   normal: {
                            //     color: colors[colorIndex][n]
                            //   }
                            // },
                            data: this.barData(this.cityData)
                        },
                        {
                            name: '线路',
                            type: 'lines',
                            // geoIndex: 1,
                            zlevel: 2,
                            // z: 2,
                            coordinateSystem: 'geo',
                            effect: {
                                show: true,
                                constantSpeed: 60,
                                symbol: 'arrow', //箭头图标，pin 圆点
                                symbolSize: 10, //图标大小
                                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                            },
                            lineStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            {
                                                offset: 0,
                                                color: '#58B3CC',
                                            },
                                            {
                                                offset: 1,
                                                color: '#312aff',
                                            },
                                        ],
                                        false
                                    ),
                                    width: 5, //尾迹线条宽度
                                    opacity: 0.2, //尾迹线条透明度
                                    curveness: 0, //尾迹线条曲直度
                                },
                            },
                            data: this.mapLineData,
                            tooltip: {
                                show: false,
                            },
                        },
                    ]
                };

                myChart.setOption(option);
            }
        },
        computed: {
            geoCoordMap: function () {
                return chinaMap.features.map((item) => {
                    return {
                        name: item.properties.name,
                        value: item.properties.center
                    }
                })
            }
        }
    }
</script>

<style>
    #main{
        width: 100%;
        height: calc(100% - 80px);
    }
</style>