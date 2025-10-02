# MechXpress - AutoMob Mechanic Platform

Welcome to MechXpress, a modern web platform for premium automobile care and service management. This project provides a complete solution for customers and admins to book, manage, and track automotive services with a beautiful, responsive UI.

## Features

### Core Pages
- **Home Page**: Overview of services, offers carousel, and company information.
- **Service Booking**: Book car services, view estimated time, and select from a variety of service types.
- **Booking Success**: Confirmation page with booking details and next steps.
- **Booking History**: View and manage all past bookings, filter by status, and rate completed services.
- **Contact Page**: Contact form, business information, and location details.

### Authentication & User Management
- **Login & Signup**: Secure authentication for users and admins, with animated backgrounds and modern forms.
- **Profile Management**: Update personal information, upload profile images, and manage preferences.
- **Admin Portal**: Manage bookings, view analytics, and create special offers for customers.
- **Admin Profile**: Admin-specific profile settings and management.

### Service Pages
- **Preventive Maintenance**: Comprehensive maintenance services and scheduling.
- **Body Repair**: Dent removal, scratch repair, and paintwork services.
- **Car Care**: Washing, waxing, and detailing services.
- **Engine Service**: Engine diagnostics, oil changes, and performance tuning.
- **Interior Service**: AC system service, cabin air filter replacement, and interior detailing.
- **Tire Service**: Tire rotation, balancing, alignment, and replacement services.
- **Diagnostic Services**: Advanced computer diagnostics and troubleshooting.
- **Brake System Service**: Complete brake system inspection and maintenance.
- **Hybrid/Electric Vehicle Services**: Specialized maintenance for hybrid and electric vehicles.

### Technical Features
- **Animated UI**: Uses Lottie for engaging visual effects and smooth transitions.
- **Responsive Design**: Fully optimized for desktop and mobile devices using Tailwind CSS.
- **Local Storage**: Demo data management for bookings, users, and ratings.

## File Structure

### Core Pages
- `index.html` - Main landing page
- `Home.html` - Dashboard home for logged-in users
- `Contact.html` - Contact page with form and business information

### Booking & History
- `Booking.html` - Service booking form and sidebar
- `booked.html` - Booking confirmation page
- `bookingHistory.html` - User booking history and management

### Authentication & Profiles
- `login.html` - Login page (user & admin)
- `signUp.html` - User registration page
- `profile.html` - User profile settings
- `adminProfile.html` - Admin profile settings

### Admin & Reports
- `adminPortal.html` - Admin dashboard for bookings, offers, and analytics
- `Reports.html` - Reports and analytics page

### Service Pages
- `PrevMain.html` - Preventive Maintenance services
- `BodyRep.html` - Body Repair services
- `CarCare.html` - Car Care and detailing services
- `EngSer.html` - Engine Service page
- `InteriorService.html` - Interior Service and AC maintenance
- `TireService.html` - Tire Service and maintenance
- `Diagon.html` - Diagnostic Services
- `BrakeSer.html` - Brake System Service
- `HybridSer.html` - Hybrid/Electric Vehicle Services

### Additional Files
- `demoData.js` - Demo data and sample content

### Assets
- `Image/` - Contains logo and service images:
  - `Logo.png` - MechXpress logo
  - `PreventiveCare.png` - Preventive maintenance image
  - `PaintingDenting.png` - Body repair image
  - `WashingCar.png` - Car care image
  - `EngineCare.png` - Engine service image
  - `InteriorCare.png` - Interior service image
  - `TyreCare.png` - Tire service image
  - `DiagonsticCare.png` - Diagnostic service image
  - `BrakingCare.png` - Brake service image
  - `HybridCare.png` - Hybrid vehicle service image
  - `ElectGIF.gif` - Electric vehicle animation
  - `disc-brake.webp` - Brake system image
  - Various other service and UI images

## Technologies Used

- **HTML5, CSS3, JavaScript** - Core web technologies
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Lottie](https://lottiefiles.com/)** - Lightweight animations and interactive elements
- **Local Storage API** - Browser-based data persistence for demo purposes
- **Responsive Design** - Mobile-first approach with Tailwind's responsive utilities

## Project Statistics

- **Total Files**: 26 HTML files(embedded JavaScript placed at the end of the HTML file) + 1 JavaScript file
- **Service Pages**: 9 dedicated service pages
- **Images**: 25+ service and UI images in the Image folder
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices

## How to Run Locally

1. **Clone this repository**:
   ```sh
   git clone https://github.com/yourusername/MechXpress.git
   ```

2. **Open the project folder** in VS Code or your preferred editor.

3. **Launch the application**:
   - Open `index.html` in your browser to start exploring the site
   - For full functionality, ensure all HTML files and the `Image/` folder are present

4. **Navigation**:
   - Start from `index.html` (landing page)
   - Use `login.html` to access user features
   - Admin features available through admin login

## File Organization

The project is organized into logical sections:
- **Core Pages**: Main navigation and landing pages
- **Service Pages**: Individual service detail pages
- **Authentication**: Login, signup, and profile management
- **Admin Tools**: Admin portal and analytics
- **Assets**: Images and demo data

## Customization

### Content Updates
- Update company info, offers, and service details in the respective HTML files
- Modify contact information in `Contact.html`
- Update service descriptions in individual service pages

### Styling & Branding
- Replace images in the `Image/` folder for your branding
- Modify Tailwind config and custom styles for your color scheme
- Update the MechXpress logo and branding elements

### Functionality
- Extend service pages with additional features
- Add new service types by creating additional HTML pages
- Modify the booking system in `Booking.html` and related files

## Data Storage Notice

> **Important:** This demo project stores all user, booking, and rating data in the browser's local storage for simplicity and demonstration purposes. This approach is **not recommended for production** or real-world applications, as local storage is not secure, can be cleared by the user, and does not support multi-user or server-side data management. For a production-ready solution, integrate a secure backend and database to handle authentication, bookings, and user data reliably.


**MechXpress** - Your trusted partner for premium auto care and service management.

*Built with ❤️ using modern web technologies*
