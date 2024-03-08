import { RevenueType } from "../types";

export function calculateRevenueGrowthRate(data: RevenueType[]) {
  for (let i = 0; i < data.length; i++) {
    const currentRevenue = data[i].revenue;
    const currentDate = new Date(data[i].date);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    if (i >= 12) {
      const previousMonthData = data[i - 12];
      const previousMonthRevenue = previousMonthData.revenue;
      const growthRate = Math.round(
        (currentRevenue / previousMonthRevenue - 1) * 100
      );

      data[i].revenue_growth_rate = growthRate;
    } else {
      // 前12个月的数据，无法计算增长率，将增长率设为0
      data[i].revenue_growth_rate = 0;
    }
  }

  return data.slice(12);
}
