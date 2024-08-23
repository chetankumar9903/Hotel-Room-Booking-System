import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddRoom from "./components/room/AddRoom";
import ExistingRooms from "./components/room/ExistingRooms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import EditRoom from "./components/room/EditRoom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import RoomListing from "./components/room/RoomListing";
import Admin from "./components/admin/Admin";
import Checkout from "./components/bookings/Checkout";
import BookingSuccess from "./components/bookings/BookingSuccess";
import Bookings from "./components/bookings/Bookings";
import FindBooking from "./components/bookings/FindBooking";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Profile from "./components/auth/Profile";
import { AuthProvider } from "./components/auth/AuthProvider";
import RequireAuth from "./components/auth/RequireAuth";
import RequireAdmin from "./components/auth/RequireAdmin";
import NotAuthorized from "./components/notAuthorized/NotAuthorized";

function App() {
  return (
    <AuthProvider>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/edit-room/:roomId"
              element={
                <RequireAuth>
                  <RequireAdmin>
                    <EditRoom />
                  </RequireAdmin>
                </RequireAuth>
              }
            />

            <Route
              path="/existing-rooms"
              element={
                <RequireAuth>
                  <RequireAdmin>
                    <ExistingRooms />
                  </RequireAdmin>
                </RequireAuth>
              }
            />
            <Route
              path="/add-room"
              element={
                <RequireAuth>
                  <RequireAdmin>
                    <AddRoom />
                  </RequireAdmin>
                </RequireAuth>
              }
            />

            <Route
              path="/book-room/:roomId"
              element={
                <RequireAuth>
                  <Checkout />
                </RequireAuth>
              }
            />

            <Route path="/browse-all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking-success" element={<BookingSuccess />} />

            <Route
              path="/existing-bookings"
              element={
                <RequireAuth>
                  <RequireAdmin>
                    <Bookings />
                  </RequireAdmin>
                </RequireAuth>
              }
            />

            {/* <Route path="/find-booking" element={<FindBooking />} /> */}
            <Route
              path="/find-booking"
              element={
                <RequireAuth>
                  <FindBooking />
                </RequireAuth>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<FindBooking />} />
            <Route path="/not-authorized" element={<NotAuthorized />} />
          </Routes>
          {/* <Footer/>  if footer contains link */}
        </Router>
        <Footer /> {/* if footer does not contains any link*/}
      </main>
    </AuthProvider>
  );
}

export default App;
