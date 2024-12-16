import HttpContext from "./HttpContext";

const route = "/api/v1/products";

class ProductsService {
    constructor() {
        this.httpContext = new HttpContext()
    }

    async getProducts(){
        return await this.httpContext.HttpGet(route);
    }

    async getProduct(id){
        return await this.httpContext.HttpGet(`${route}/${id}`);
    }

    async createProduct(data){
        const request ={
            url:data
        }
        // console.log(data)
        try {
            return await this.httpContext.HttpPost(route, request);
        } catch (error) {
            console.error("Error creating product", error);
        }
    }

}

export { ProductsService };