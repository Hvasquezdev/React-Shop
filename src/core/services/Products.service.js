import { config } from "./../config/index";

class ApiProductsService {
  constructor() {
    this.baseUrl = config.apiBase;
  }

  async getProducts(limit = 10, offset = 0) {
    const response = await fetch(
      `${this.baseUrl}/products?${new URLSearchParams({ limit, offset })}`,
      {
        method: "GET",
      }
    );
    const parsedResponse = await response.json();

    return parsedResponse;
  }

  getTotalAmount(products = []) {
    return products.reduce((total, product) => total += product?.price || 0, 0);
  }
}

export default ApiProductsService;
