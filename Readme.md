# Hotel Room Booking System

## Overview

The **Hotel Room Booking System** is a web application designed for managing hotel room bookings. It allows users to view available rooms, make reservations, and manage their bookings. The system also features an admin dashboard for managing room availability and viewing all bookings.

## Features

- **User Authentication**: Secure login and registration for users and administrators.
- **Room Booking**: Users can browse available rooms, make reservations, and view their booking details.
- **Admin Dashboard**: Admins can view all bookings, manage room availability, and perform administrative tasks.
- **Role-Based Access Control**: Different functionalities available based on user roles (e.g., Admin, User).

## Technologies

- **Backend**: Spring Boot, Spring Security
- **Frontend**: ReactJS
- **Database**: MySQL

## Installation

### Prerequisites

- Java 11 or higher
- Node.js and npm
- MySQL

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/chetankumar9903/hotel-room-booking-system.git
   cd hotel-room-booking-system
2. **Backend Setup**

- Navigate to the backend directory.
- **Database Configuration**: Update `application.properties` with your MySQL database credentials.
- Install dependencies: `mvn install`
- Run the application: `./mvnw spring-boot:run`
3. **Frontend Setup**
- Navigate to the frontend directory.
- Install dependencies: `npm install`
- Start the development server: `npm start`
4. **Database Setup**
- Create a new MySQL database and update the `application.properties` file with your database credentials.
- Create a MySQL database named `hotel_booking_system`
- All tables and schemas are automatically created once you run the backend application.

## Usage

### Access the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Login/Register

- Users and admins can log in using their credentials.
- Admins have access to additional features for managing bookings.

### Book a Room

Browse available rooms and make reservations through the booking interface.

### Manage Bookings

- Admins can view and manage all bookings from the admin dashboard.

## Contributing

1. **Fork the Repository**

   Click the "Fork" button at the top-right corner of the repository page to create your copy of the repository.

2. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature

3. **Make Changes**

    Implement your changes or new features.

4. **Commit and Push**
    ```bash
    git add .
    git commit -m "Add new feature"
    git push origin feature/your-feature
5. **Create a Pull Request**

    Open a pull request on GitHub to merge your changes.
## Acknowledgments

- Inspired by modern web development practices.
- Utilizes popular frameworks and libraries like Spring Boot, ReactJS, and MySQL.

Feel free to adjust the links, paths, and other specific details according to your project setup.




