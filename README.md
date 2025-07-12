PumpMaster – Conceptual Login and Dashboard Demo

This project demonstrates a conceptual frontend implementation for a pump monitoring system using React. It includes a login page with route protection and a styled dashboard interface. While no real backend is used, it simulates authentication via hardcoded credentials and localStorage.

Features
    Login form with custom background styling
    Test credential-based login simulation
    Route protection using a PrivateRoute component
    Separate navigation bars for login and dashboard to prevent styling conflicts
    Dashboard displaying mock pump data in a styled table
    Functional buttons styled for conceptual demonstration

Technologies Used
    React
    React Router DOM
    CSS Modules (plain CSS)
    Vite (for fast development setup)

How to Run

    Extract the ZIP archive.
    Open a terminal in the project directory.
    Run the following commands:

        npm install
        npm run dev
    Open your browser at http://localhost:5173

Test Credentials
    To access the dashboard:

        Username: test@demo.com

        Password: 123456

    After successful login, the system stores a mock token in localStorage and grants access to the protected dashboard route.

Project Structure (Key Files)

Edit
/public
  └── login.jpg                # Background image used in login

/src
  /pages
    ├── LoginPage.jsx          # Login screen
    └── Dashboard.jsx          # Protected dashboard view
  /styles
    ├── LoginPage.css          # Styling for login page
    └── Dashboard.css          # Styling for dashboard and navbar
  /services
    ├── authService.js         # Login handler (mock logic)
    └── axiosInstance.js       # Placeholder for future API setup
  /components
    └── PrivateRoute.jsx       # Route guard logic
  └── App.jsx                  # Main application routes


Notes
    This is a frontend-only conceptual demo.

    No real authentication or API requests are performed.

    Focus is on demonstrating structure, route protection, and UI layout.