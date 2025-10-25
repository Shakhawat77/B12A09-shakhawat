# WarmPaws – Pet Care in Winter

**Live URL:** [https://zippy-madeleine-4618be.netlify.app](https://zippy-madeleine-4618be.netlify.app)

---

## Project Purpose
WarmPaws is a cozy winter companion platform for pet owners. It helps ensure pets stay warm, safe, and healthy during the cold season. Users can explore local pet care services, winter pet clothing, grooming options, and expert tips — all in a friendly, easy-to-use interface.

---

## Key Features
- **Homepage:** Warm winter-themed hero slider using Swiper/DaisyUI.  
- **Popular Winter Care Services:** Cards displaying service image, name, rating, price, and “View Details” button.  
- **Winter Care Tips:** Helpful tips for keeping pets healthy and warm in winter.  
- **Expert Vets Section:** Meet experienced vets with specialization details.  
- **Service Details Page:** Protected route; only accessible when logged in. Includes JSON data fields and “Book Service” form with toast notifications.  
- **Authentication:**  
  - Login and Signup forms with validation, password toggle, and Google social login.  
  - Forgot password functionality with redirect to Gmail.  
- **My Profile Page:** Shows user info with an “Update Profile” button (challenge section).  
- **Persistent Navbar and Footer:** Smooth navigation without reload errors.  
- **Toast Notifications:** Display success and error messages throughout the app.  
- **Responsive Design:** Mobile and desktop-friendly layout.  

---

## JSON Data
Contains at least 6 winter care service objects with fields such as:  
`serviceId, serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category`.

Example:
```json
[
  {
    "serviceId": 1,
    "serviceName": "Winter Coat Fitting for Dogs",
    "providerName": "PawCare Studio",
    "providerEmail": "info@pawcare.com",
    "price": 25,
    "rating": 4.9,
    "slotsAvailable": 4,
    "description": "Custom coat fitting and warm outfit options to keep your dog comfortable in the cold.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Clothing"
  }
]


## npm Packages Used:



| Package            | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `react-router` | Routing and protected routes                   |
| `react-icons`      | Icons (e.g., star rating)                      |
| `swiper`           | Hero slider and carousel                       |
| `react-toastify`   | Toast notifications for success/error messages |
| `daisyui`          | UI components and styling                      |
| `firebase`         | Authentication (email/password, Google login)  |
