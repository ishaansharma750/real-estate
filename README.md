# 🏡 Real Estate Web Application

A **ReactJS frontend assignment** for building a real estate web application based on a Figma design.  
The app fetches **property listings from an API** and implements **user authentication using Firebase**.  

---

## 🎯 Objective
Build a **responsive real estate web application** that allows users to browse properties, filter listings, and securely log in/register using Firebase Authentication.

---

## 📌 Features
- **Home Page**
  - Hero section with banner.
  - "What We Do" section (4 cards).
  - Featured Properties (fetched from API).
  - Properties available for sale and rent.
  - Newsletter subscription section.
  - Footer with quick links.

- **Property Listings Page**
  - Fetch and display property listings from API.
  - Filter by property type (**Sale / Rent**).

- **Authentication**
  - **Signup** with name, email, password, confirm password.
  - **Login** with email & password.
  - Firebase Authentication integration.
  - Session stored in **localStorage / Context API**.
  - Restricted routes for authenticated users only.

- **Responsive Design**
  - Works across desktop, tablet, and mobile.
  - Navbar adapts to mobile with hamburger menu.

---

## 🛠️ Tech Stack
- **React.js** (Functional Components + Hooks)
- **React Router** (for navigation)
- **Firebase Authentication**
- **TailwindCSS** (styling)
- **Context API / localStorage** (state management)
- **MockAPI** for property listings

# 1️⃣ Clone the repo
git clone https://github.com/ishaansharma750/real-estate.git
cd real-estate

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the development server
npm run dev

```bash
https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing
