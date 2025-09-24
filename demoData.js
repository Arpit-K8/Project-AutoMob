// Demo data script for booking history
// This file can be included to populate sample booking data for testing

function populateDemoData() {
    const demoBookings = [
        {
            fullName: "John Doe",
            email: "john.doe@email.com",
            phone: "9876543210",
            address: "123 Main Street, Tech City, India",
            service: "preventive-maintenance",
            carNumber: "MH01AB1234",
            carCompany: "maruti-suzuki",
            carModel: "Swift",
            fuelType: "petrol",
            appointmentDate: "2025-01-20",
            estimatedTime: "2-3 hours",
            bookingId: "MX-2025-001001",
            bookingDate: "2025-01-15T10:30:00.000Z",
            status: "completed",
            timestamp: "2025-01-15T10:30:00.000Z",
            rating: 5,
            rated: true
        },
        {
            fullName: "John Doe",
            email: "john.doe@email.com",
            phone: "9876543210",
            address: "123 Main Street, Tech City, India",
            service: "engine-service",
            carNumber: "MH01AB1234",
            carCompany: "maruti-suzuki",
            carModel: "Swift",
            fuelType: "petrol",
            appointmentDate: "2025-01-25",
            estimatedTime: "3-4 hours",
            bookingId: "MX-2025-001002",
            bookingDate: "2025-01-18T14:20:00.000Z",
            status: "confirmed",
            timestamp: "2025-01-18T14:20:00.000Z"
        },
        {
            fullName: "John Doe",
            email: "john.doe@email.com",
            phone: "9876543210",
            address: "123 Main Street, Tech City, India",
            service: "car-care",
            carNumber: "MH01AB1234",
            carCompany: "maruti-suzuki",
            carModel: "Swift",
            fuelType: "petrol",
            appointmentDate: "2025-01-10",
            estimatedTime: "1-2 hours",
            bookingId: "MX-2025-001003",
            bookingDate: "2025-01-08T09:15:00.000Z",
            status: "completed",
            timestamp: "2025-01-08T09:15:00.000Z",
            rating: 4,
            rated: true
        },
        {
            fullName: "John Doe",
            email: "john.doe@email.com",
            phone: "9876543210",
            address: "123 Main Street, Tech City, India",
            service: "tire-service",
            carNumber: "MH01AB1234",
            carCompany: "maruti-suzuki",
            carModel: "Swift",
            fuelType: "petrol",
            appointmentDate: "2025-01-05",
            estimatedTime: "1-2 hours",
            bookingId: "MX-2025-001004",
            bookingDate: "2025-01-03T16:45:00.000Z",
            status: "cancelled",
            timestamp: "2025-01-03T16:45:00.000Z"
        },
        {
            fullName: "John Doe",
            email: "john.doe@email.com",
            phone: "9876543210",
            address: "123 Main Street, Tech City, India",
            service: "diagnostic",
            carNumber: "MH01AB1234",
            carCompany: "maruti-suzuki",
            carModel: "Swift",
            fuelType: "petrol",
            appointmentDate: "2024-12-28",
            estimatedTime: "1-2 hours",
            bookingId: "MX-2025-001005",
            bookingDate: "2024-12-26T11:30:00.000Z",
            status: "completed",
            timestamp: "2024-12-26T11:30:00.000Z",
            rating: 5,
            rated: true
        }
    ];

    // Check if demo data already exists
    const existingHistory = JSON.parse(localStorage.getItem('bookingHistory') || '[]');
    
    if (existingHistory.length === 0) {
        // Only populate if no existing data
        localStorage.setItem('bookingHistory', JSON.stringify(demoBookings));
        console.log('Demo booking data populated successfully!');
        return true;
    } else {
        console.log('Booking history already exists. Demo data not populated.');
        return false;
    }
}

// Function to clear all booking history (for testing)
function clearBookingHistory() {
    localStorage.removeItem('bookingHistory');
    console.log('Booking history cleared!');
}

// Function to add a single demo booking
function addDemoBooking() {
    const demoBooking = {
        fullName: "John Doe",
        email: "john.doe@email.com",
        phone: "9876543210",
        address: "123 Main Street, Tech City, India",
        service: "preventive-maintenance",
        carNumber: "MH01AB1234",
        carCompany: "maruti-suzuki",
        carModel: "Swift",
        fuelType: "petrol",
        appointmentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
        estimatedTime: "2-3 hours",
        bookingId: `MX-2025-${Date.now().toString().slice(-6)}`,
        bookingDate: new Date().toISOString(),
        status: "confirmed",
        timestamp: new Date().toISOString()
    };

    const existingHistory = JSON.parse(localStorage.getItem('bookingHistory') || '[]');
    existingHistory.unshift(demoBooking);
    localStorage.setItem('bookingHistory', JSON.stringify(existingHistory));
    
    console.log('Demo booking added successfully!');
    return demoBooking;
}

// Auto-populate demo data when script loads (only if no existing data)
if (typeof window !== 'undefined') {
    // Only run in browser environment
    document.addEventListener('DOMContentLoaded', function() {
        // Uncomment the line below to auto-populate demo data
        // populateDemoData();
    });
}
