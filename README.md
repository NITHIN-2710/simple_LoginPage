# Student Portal - Login Form with Client-Side Validation

## 📌 Project Overview
This project implements a **login form with client-side validation** using HTML, CSS, and JavaScript. The form ensures that user inputs meet predefined criteria before submission. Upon successful validation, users are redirected to a **Student Portal**, where they can view courses, assignments, and manage their profile.

## ✨ Features
- **Client-side form validation** (Name, Email, Phone, Password, Confirm Password)
- **Error handling** with real-time feedback
- **Local storage integration** to remember the user session
- **Student Portal dashboard** with a simple UI
- **Logout functionality** to clear session data

## 🛠️ Technologies Used
- **HTML** - Structure of the pages
- **CSS** - Styling and layout
- **JavaScript** - Form validation and local storage handling

## 📂 Project Structure
```
📁 Student-Portal
 ├── 📄 index.html  (Login form)
 ├── 📄 home.html   (Dashboard after login)
 ├── 📄 index.css   (Styling for login page)
 ├── 📄 style.css   (Styling for dashboard)
 ├── 📄 script.js   (Form validation logic)
```

## 🚀 How to Run the Project
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/student-portal.git
   ```
2. **Navigate to the Project Folder**
   ```sh
   cd student-portal
   ```
3. **Open `index.html` in a Browser**
   - Alternatively, use **Live Server** in VS Code for better experience.

## 🔐 Validation Rules
- **Name:** At least 3 characters
- **Email:** Must be in a valid format (e.g., user@example.com)
- **Phone:** Exactly 10 digits
- **Password:** At least 6 characters, 1 uppercase letter, 1 number, 1 special character
- **Confirm Password:** Must match the password

## 🔄 Logout Functionality
Users can log out using the **Logout** button in the Student Portal, which removes the stored username and redirects them to the login page.

## 🚀 Future Enhancements
- **Server-side validation** for enhanced security
- **Database integration** to store user credentials
- **Improved UI/UX** with animations and responsiveness

---
### 📝 Author
Developed by Vututkuri Nithin Datta 🚀

