package com.example.Hotel_bookingApp.repository;

import com.example.Hotel_bookingApp.model.BookedRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<BookedRoom, Long> {
    List<BookedRoom> findByRoomId(Long roomId);
    List<BookedRoom> findByGuestEmail(String email);

    Optional<BookedRoom> findByBookingConfirmationCode(String confirmationCode);
}
