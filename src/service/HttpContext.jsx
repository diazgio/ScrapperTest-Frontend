import axios from "axios";

const api = import.meta.env.VITE_BACKEND_URL;

class HttpContext {
  constructor() {
    this.apiBaseUrl = api;
  }

  API_URL() {
    return api;
  }

  configureHeaders() {
    const headers = {
      "Content-Type": "application/json",
    };
    return headers;
  }

  catchResponse(e) {
    return {
      error: e,
      success: false,
    };
  }

  completeResponse(response) {
    if (response.status !== 200) {
      return this.catchResponse(response.status.message);
    }

    return {
      data: response.data,
      success: true,
    };
  }

  async HttpGet(route) {
    try {
      const response = await axios.get(`${api}${route}`, {
        headers: this.configureHeaders(),
      });
      return this.completeResponse(response);
    } catch (error) {
      return this.catchResponse(error);
    }
  }
  
  async HttpPost(route, data) {
    try {
      const response = await axios.post(`${api}${route}`, data, {
        headers: this.configureHeaders(),
      });
      return this.completeResponse(response);
    } catch (error) {
      return this.catchResponse(error);
    }
  }
}

export default HttpContext;