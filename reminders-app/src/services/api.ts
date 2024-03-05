import axios from "axios";
import { IReminder } from "../interfaces/reminder";

class API {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getRemainders() {
    try {
      const { data } = await this.http.get<IReminder[]>("/todos");
      return data;
    } catch (error: any) {
      console.log(error);
    }
  }

  async addRemainder(title: string) {
    try {
      const { data } = await this.http.post("/todos", { title });
      return data;
    } catch (error: any) {
      console.log(error);
    }
  }

  async removeRemainders(id: number) {
    try {
      const { data } = await this.http.delete("/todos/" + id);
      return data;
    } catch (error: any) {
      console.log(error);
    }
  }
}

const api = new API();
export default api;
