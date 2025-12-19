# 📄 CV Builder Pro

A dynamic, real-time Resume Builder built with **React + Vite**.  
This project focuses on mastering state management, complex form handling, and the **“Lifting State Up”** pattern in React.

---

## 🚀 Overview

The CV Builder allows users to input their personal information, educational background, and professional experience through a structured form and see their professional resume generated in real time.

---

## ✨ Key Features

- **Live Preview** – See changes instantly as you type  
- **Section Management** – Add / Edit / Delete education and experience entries  
- **State Lifting** – Centralized state to sync Editor and Preview components  
- **Responsive Design** – Optimized for desktop editing and print-friendly layouts  

---

## 🛠️ Technical Stack

- **Framework:** React (Functional Components + Hooks)  
- **Build Tool:** Vite (fast HMR)  
- **Styling:** CSS3 (Flexbox / Grid)  
- **State Management:** React `useState` (Lifting State Up pattern)  

---

## 🏗️ Architecture & Lessons Learned

This mentored project applies professional React patterns:

- **Lifting State Up**  
  All form data is centralized in `App.jsx`, keeping Editor (input) and Preview (output) perfectly in sync.

- **Controlled Components**  
  Every input field is controlled, making React state the single source of truth.

- **Component Composition**  
  The UI is broken into reusable components like `InputGroup`, `SectionTitle`, and `CvCard`.

---

## 💻 Getting Started

### Installation

Clone the repository:
```bash
git clone https://github.com/Dikshit-Raj-Sharma/CV-Builder.git
```

Install Dependencies
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

