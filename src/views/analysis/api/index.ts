import request from "../../../utils/request";
interface RevenueParams {
  start_date: string;
  end_date: string;
}
export const revenueGet = ({ start_date, end_date }: RevenueParams) => {
  return request.get("/data", {
    params: {
      dataset: "TaiwanStockMonthRevenue",
      data_id: "2330",
      start_date,
      end_date,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRlIjoiMjAyNC0wMy0wOCAwODo0MjozNiIsInVzZXJfaWQiOiJBbGxlbkx1aXMiLCJpcCI6IjI3LjE0LjEyNi4xNDEifQ.T9a70YV9url47MytDegL9_U-4nHE2CkSa-z9ZN29WHk",
    },
  });
};
