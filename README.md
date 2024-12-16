# Scraper Frontend

This project is a React-based frontend for displaying and managing products scraped and created via the backend. The application provides an interactive interface for users to view all products in a grid, create new products using a modal, and explore detailed information about each product on a dedicated page.

## Features

- **Home Page**: Displays all created products in a responsive grid layout.
  - Each product is shown as a card displaying key information such as title, price, and average ratings.
  - Users can easily navigate to a detailed product page by clicking on the card.
- **Create Product Modal**: Allows users to create a new product by pasting a product URL. This URL interacts directly with the backend's `/products` endpoint.
  - Includes validation to ensure the input is a valid URL.
- **Product Page**: Shows detailed information about a single product, including its images, description, and additional metadata.
- **Modularized Logic**: All API calls are handled using a dedicated service file that uses Axios for requests.
- **Styling**: The application is styled using Tailwind CSS for a modern and responsive design.

## Technologies Used

- **React**: Main library for building the user interface.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: For styling and layout.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd scraper-frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Ensure the backend server is running at the expected URL (e.g., `http://localhost:3000`). You can adjust the base URL for API calls in the service file.

## Project Structure

- **`/src/components`**: Contains reusable React components such as `ProductCard`, `ProductModal`, and others.
- **`/src/pages`**: Includes main pages like `HomePage` and `ProductPage`.
- **`/src/services/productsService.js`**: Handles all HTTP requests using Axios.
- **`/src/styles`**: Tailwind CSS configuration and custom styles.

## Features Overview

### Home Page

- Displays all products fetched from the backend.
- Uses a grid layout to organize product cards.
- Each card shows the following details:
  - Product title.
  - Normal price.
  - Average ratings.
  - Ratings and reviews summary.
- Includes a "NEW PRODUCT" button to open the Create Product Modal.

### Product Modal

- Accessible via a button on the Home Page.
- Provides a simple form for creating a product by entering the product URL.
- Sends a POST request to the backend's `/products` endpoint.
- Includes a loader to indicate progress during submission.
- Validates the input to ensure the user provides a valid URL.
- On successful creation, the modal closes, and the Home Page refreshes to display the new product.

### Product Page

- Displays detailed information about a specific product.
- Information includes:
  - Title, description, price, discount, and average ratings.
  - A carousel or gallery for product images.
  - Additional metadata, such as size, purpose, frame material, and more.

## API Service Example

All HTTP requests are managed through `src/services/productsService.js`. Below is an example of how the API service is structured:

```javascript
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export class ProductsService {
  async getProducts() {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  }

  async getProduct(id) {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  }

  async createProduct(url) {
    const response = await axios.post(`${API_BASE_URL}/products`, { url });
    return response.data;
  }
}
```

## Tailwind CSS Integration

Tailwind CSS is configured in the project to provide utility-first styling. The configuration file can be found at `tailwind.config.js`. Example usage includes:

- Responsive grid layout for the Home Page:

  ```html
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* Product Cards */}
  </div>
  ```

- Button styles:
  ```html
  <button
    className="px-3 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-200"
    onClick="{openModal}"
  >
    NEW PRODUCT
  </button>
  ```

## Notes

1. This project assumes the backend server is running locally at `http://localhost:3000`.
2. For deployment, ensure that the backend's base URL is updated in the API service file.
3. The modal and product page are designed for simplicity and may require further enhancements for production use.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
