# 🛍️ Product Store App

## 📖 Description
A modern and responsive e-commerce web application built with React.

This project allows users to browse products, search and filter items, view product details, manage a shopping cart, and complete a checkout process.

The main purpose of this project is to demonstrate the proper use of Context API + useReducer, Redux Toolkit, and React Query by using each one for the appropriate type of state.

---

## 🎥 Demo
https://youtu.be/JZrYTrYf6pY?si=A3borTFkcdcM4MNB

---

## 🚀 Features

### 🛍️ Product Features
- Browse products from DummyJSON API  
- View product details  
- Search products with debounce  
- Filter products by category  
- Pagination  
- Skeleton loading  
- Loading and error handling  
- Save to local storage  

### 🛒 Shopping Cart
- Add products to cart  
- Remove products  
- Increase quantity  
- Decrease quantity  
- Clear cart  
- Cart badge  
- Total items calculation  
- Total price calculation  
- Cart persistence using Redux Persist  

### ⚙️ Settings
- Dark / Light Mode  
- Grid / List View  
- Selected Category  

### 💡 User Experience
- Responsive design  
- Hero section  
- Toast notifications  
- Sound effects  
- Checkout page  
- Order success page  
- Empty search state  
- Modern UI with animations and hover effects  

---

## 🛠️ Technologies & Libraries
- React  
- Vite  
- React Router DOM  
- Redux Toolkit  
- React Redux  
- Redux Persist  
- React Query (@tanstack/react-query)  
- Context API  
- useReducer  
- Axios  
- React Toastify  
- CSS3  

---

## 🧠 State Management

### Context API + useReducer
Used for application settings:
- Theme (Dark / Light)  
- Grid / List View  
- Selected Category  

### Redux Toolkit
Used for global cart management:
- Add items  
- Remove items  
- Increase quantity  
- Decrease quantity  
- Clear cart  
- Total items  
- Total price  

### React Query
Used for server state:
- Fetch products  
- Fetch product details  
- Category data  
- Pagination  
- Query caching  
- Loading & error states  

---

## 📡 API
This project uses the **DummyJSON API** to fetch product data.

Data used in this project includes:
- Product list  
- Product details  
- Product categories  
- Product search  

API Website:  
https://dummyjson.com

---

## 📁 Project Structure
src/
│
├── api/
├── app/
├── components/
├── context/
├── features/
├── hooks/
├── pages/
├── routes/
├── utils/
└── App.jsx

---

## ▶️ Getting Started

Clone the repository:
```bash
git clone https://github.com/ArezoZargar/product-store-app.git
```

Navigate to the project folder:
```bash
cd product-store-app
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

---

## 📷 Screenshots





* Home Page
<img width="2048" height="5500" alt="localhost_5173_" src="https://github.com/user-attachments/assets/57634914-eed0-4b46-9182-b2efc6c8dd8e" />

  <img width="2880" height="8694" alt="localhost_5176_" src="https://github.com/user-attachments/assets/f68f0ff8-9e05-4c1f-8d64-2ca4e82a2a34" />

* Product Details
<img width="2880" height="1636" alt="localhost_5176_ (5)" src="https://github.com/user-attachments/assets/835c9f28-20e3-447c-8a30-fa00ae2a6253" />


* Shopping Cart
  <img width="2048" height="1144" alt="localhost_5176_cart" src="https://github.com/user-attachments/assets/9fc3fd32-1151-46b0-b120-1916fe1a613e" />

<img width="2880" height="2386" alt="localhost_5176_cart (2)" src="https://github.com/user-attachments/assets/a9ca1d96-e0d7-4c20-a4ce-4fb1fd9fb9f1" />

* Notification
<img width="2880" height="1636" alt="localhost_5176_cart (5)" src="https://github.com/user-attachments/assets/280e4dd6-4ca8-4416-a409-d3c4f049f08e" />

* Checkout Page
  <img width="2880" height="1636" alt="localhost_5176_cart (6)" src="https://github.com/user-attachments/assets/126f31f6-e397-4ef5-9113-57ff72250f0b" />
<img width="2880" height="1636" alt="localhost_5176_cart (10)" src="https://github.com/user-attachments/assets/efd83e20-19fa-497d-858c-7559f19b828f" />
<img width="2880" height="1636" alt="localhost_5176_cart (11)" src="https://github.com/user-attachments/assets/e39bec58-270b-4297-81ce-e715a21f8871" />
<img width="3034" height="1724" alt="localhost_5176_checkout" src="https://github.com/user-attachments/assets/28c06d2f-65ab-4ace-a8ab-dbd1a4517170" />

* Dark Mode
 <img width="2880" height="4236" alt="localhost_5176_ (2)" src="https://github.com/user-attachments/assets/5fc615a7-c351-4626-8116-80e905ee97db" />
<img width="2880" height="8694" alt="localhost_5176_ (3)" src="https://github.com/user-attachments/assets/c9ce5c9b-5190-4e21-ba90-90039e0ac540" />
<img width="2880" height="1636" alt="localhost_5176_ (4)" src="https://github.com/user-attachments/assets/0e0ee28e-ffa1-4ca9-bc48-5dcda9a58321" />
<img width="2048" height="1144" alt="localhost_5176_cart (1)" src="https://github.com/user-attachments/assets/cbcb90c0-7028-4f6e-9600-00e1b927e48a" />
<img width="2880" height="2386" alt="localhost_5176_cart (3)" src="https://github.com/user-attachments/assets/2575c953-3cb8-4261-91ab-2be701b6eed5" />
<img width="2880" height="1636" alt="localhost_5176_cart (8)" src="https://github.com/user-attachments/assets/a84fe660-cacc-4561-a269-fd3317b3695f" />
<img width="2880" height="1636" alt="localhost_5176_cart (9)" src="https://github.com/user-attachments/assets/1800962d-4a58-4a81-9470-54c434047eba" />
<img width="2880" height="1636" alt="localhost_5176_cart (12)" src="https://github.com/user-attachments/assets/9dd47528-830f-408e-9a92-186fa0086077" />
<img width="3034" height="1724" alt="localhost_5176_cart (13)" src="https://github.com/user-attachments/assets/1d007179-269e-4595-9907-5115d141a390" />

* Notification
<img width="2880" height="1682" alt="localhost_5176_cart (4)" src="https://github.com/user-attachments/assets/21ebe24c-65d8-4e36-9b34-0c2fc43e7f2e" />


* Mobile Responsive View
<img width="1170" height="9882" alt="localhost_5173_products_7(iPhone 12 Pro)" src="https://github.com/user-attachments/assets/7fcfa381-0f5f-4fec-bf42-aab263a00e1e" />
<img width="1170" height="9882" alt="localhost_5173_products_7(iPhone 12 Pro) (1)" src="https://github.com/user-attachments/assets/49b08c6d-b2a1-47e5-a154-11bfdd5cfac0" />
<img width="1170" height="13617" alt="localhost_5173_products_7(iPhone 12 Pro) (2)" src="https://github.com/user-attachments/assets/4e01e4a0-6b2d-46a7-a497-1493533dfa6b" />
<img width="750" height="1742" alt="localhost_5173_products_7" src="https://github.com/user-attachments/assets/2cc991f8-f5a4-4c07-bf08-29f91a730ec8" />
<img width="750" height="1192" alt="localhost_5173_products_7 (1)" src="https://github.com/user-attachments/assets/980e4a69-f12d-43b2-9ee4-56b1f0eede55" />

---


## 📚 Learning Objectives
- State management using Context API and useReducer  
- Global state management using Redux Toolkit  
- Server state management using React Query  
- Component-based architecture  
- Responsive UI Design  
- Modern React development practices  

---

## 👩‍💻 Author
**Arezo Zargar**
