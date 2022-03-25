export interface AxiosType {
  data?: object;
  params?: object;
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
}
