<template>
  <div id="pie" style="width: 800px; height: 400px"></div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onBeforeMount, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as echarts from "echarts";
import map from './map.json'

const route = useRoute();
const router = useRouter();
const props = defineProps<{ data: Object[] }>();

watch(
  () => props.data,
  (val) => {
    state.data = props.data;
  }
);

console.log("1-开始创建组件-setup");
const state = reactive({
  data: {},
});
onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});
onMounted(() => {
  echarts.registerMap('fj',map as any)
  const myChart = echarts.init(document.getElementById("pie") as HTMLElement);
 let option = {
            geo: {
                type: "map",
                aspectScale: 1, // 横向拉伸
                // roam: true, // 地图操作 开启缩放或者平移，可以设置成 'scale' 或者 'move'。
                map: "fj",
                label: {
                    show: true,
                    normal: {
                        show: true, // 默认地图文字字号和字体颜色
                        fontSize: 10,
                        color: "#ffffff",
                    },
                    emphasis: {
                        show: true,
                        fontSize: 10, // 选中地图文字字号和字体颜色
                        color: "#CFCFCF",
                    },
                },
                itemStyle: {
                    normal: {
                        areaColor: "#040c3c", //地图本身的颜色
                        borderColor: "#00feda", //省份边框颜色
                        borderWidth: 1, // 省份边框宽度
                        opacity: 1, //图形透明度
                    },
                    emphasis: {
                        areaColor: "yellow", // 高亮时候地图显示的颜色
                        borderWidth: 0, // 高亮时的边框宽度
                    },
                },
                textFixed: {
                Alaska: [20, -20],
                }
            },
            series: [
                {
                type: "effectScatter",
                coordinateSystem: "geo",
                symbolSize: 12,
                label: {
                    normal: {
                    show: false,
                    },
                    emphasis: {
                    show: false,
                    },
                },
                itemStyle: {
                    normal: {
                    shadowBlur: 10,
                    color: "#00ECC8",
                    },
                    emphasis: {
                    borderColor: "#fff",
                    borderWidth: 1,
                    },
                },
                },
            ],
        };
  myChart.setOption(option);
});
</script>
<style scoped lang="less"></style>
