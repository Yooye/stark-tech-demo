export default {
  color: ["#E8AF00", "#B74444"],
  tooltip: {
    trigger: "item",
    axisPointer: {
      type: "none",
    },
  },
  legend: {
    data: ["每月营收", "单月营收年增率"],
  },
  grid: {
    left: "18%",
  },
  xAxis: [
    {
      type: "category",
      data: [],
      axisPointer: {
        type: "shadow",
      },
      axisLabel: {
        interval: 12,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "千元",
      min: 0,
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      name: "%",
      min: 0,
      axisLabel: {
        formatter: "{value}",
      },
    },
  ],
  series: [
    {
      name: "每月营收",
      type: "bar",
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // 设置背景颜色为黑色半透明
        textStyle: {
          color: "#fff", // 设置字体颜色为白色
        },
        formatter: function (params: any) {
          console.log(params);
          const value = params.value; // 获取数值
          const seriesName = params.seriesName; // 获取系列名称

          // 自定义气泡信息的样式
          const content = `${seriesName} =  ${value}`;

          return content;
        },
      },
      data: [],
    },
    {
      name: "单月营收年增率",
      type: "line",
      symbol: "none",
      yAxisIndex: 1,
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // 设置背景颜色为黑色半透明
        textStyle: {
          color: "#fff", // 设置字体颜色为白色
        },
        formatter: function (params: any) {
          console.log(params);
          const value = params.value; // 获取数值
          const seriesName = params.seriesName; // 获取系列名称

          // 自定义气泡信息的样式
          const content = `${seriesName} =  ${value}`;

          return content;
        },
      },
      data: [],
    },
  ],
};
