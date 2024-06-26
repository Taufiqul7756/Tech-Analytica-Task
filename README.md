# E-commerce Store

## Overview

Welcome to the E-commerce Store project! This is a simple online store application built using Next.js and Tailwind CSS. It leverages the Context API for state management and fetches product data from the Fake Store API. The application allows users to search for products, view them in both grid and list layouts, and manage a shopping cart.

## Features

- **Product Search:** Easily search for products by name or description.
- **Add to Cart:** Add products to your shopping cart.
- **Remove from Cart:** Remove products from your shopping cart.
- **Grid and List Views:** View products in either grid or list layouts.

## Technologies Used

- **Next.js:** A React framework for server-rendered applications.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Context API:** A React API for state management.
- **Fake Store API:** A free API for testing and prototyping e-commerce applications.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Taufiqul7756/Tech-Analytica-Task
   cd Tech-Analytica-Task

   ```

2. **Install dependencies::**

   ```bash
   npm install

   ```

3. **Run the development server::**
   ```bash
   npm run dev
   ```

### Project Structure

    ```bash
    Tech-Analytica-Task/
    ├── components/
    │   ├── Cart.jsx
    │   ├── Layout.jsx
    │   ├── Product.jsx
    │   ├── ProductList.jsx
    │   └── Input.js
    ├── context/
    │   └── CartContext.jsx
        └── ProductsContext.jsx
    ├── cart/
    │   ├── page.jsx
    ├── products/
    │   ├── page.jsx
    ├── utils/
    │   ├── service.jsx
        ├── utils.jsx
    │
    ├── public/
    │   └── images
    ├── styles/
    │   └── globals.css
    ├── .gitignore
    ├── package.json
    └── README.md

## Usage

### Searching for Products

Use the search bar at the top of the homepage to find products by name or description. The product list will dynamically update to show the search results.

### Adding to Cart

Click the "Add to Cart" button on any product to add it to your shopping cart. The cart icon in the navigation bar will update to reflect the number of items in your cart.

### Removing from Cart

Navigate to the cart page by clicking the cart icon in the navigation bar. From the cart page, you can remove products by clicking the "Remove" button next to each item.

### Viewing Products

Switch between grid and list views using the buttons provided above the product listings on the homepage.
