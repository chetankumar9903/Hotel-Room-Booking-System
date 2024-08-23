import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getHeader = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

// This function adds a new room to the database
export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  const response = await api.post("/rooms/add/new-room", formData,{
		headers: getHeader()
	});

  if (response.status == 201) {
    return true;
  } else {
    return false;
  }
}

// This function gets all the Room Types from the database
export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room/types");
    return response.data;
  } catch (error) {
    throw new Error("Error during fetching room types");
  }
}

// This function gets all rooms from database

export async function getAllRooms() {
  try {
    const result = await api.get("/rooms/all-rooms");
    return result.data;
  } catch (error) {
    throw new Error("Error during fetching all rooms");
  }
}

//This function delete the room through room id
export async function deleteRoom(roomId) {
  try {
    const result = await api.delete(`/rooms/delete/room/${roomId}`,{
			headers: getHeader()
		});
    return result.data;
  } catch (error) {
    throw new Error(`Error during deleting room ${error.message}`);
  }
}

//This function update the details of the room

export async function updateRoom(roomId, roomData) {
  const formData = new FormData();
  formData.append("roomType", roomData.roomType);
  formData.append("roomPrice", roomData.roomPrice);
  formData.append("photo", roomData.photo);

  const response = await api.put(`/rooms/update/${roomId}`, formData,{
		headers: getHeader()
	});
  return response;
}

/* this is another same function like above for this uncomment code in edit room also

export const updateRoom = async (roomId, formData) => {
  try {
    const response = await api.put(`/rooms/update/${roomId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error("Error updating room: " + error.message);
  }
};

*/

//This function gets room  by id

export async function getRoomById(roomId) {
  try {
    const result = await api.get(`/rooms/room/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error(
      `Error during fetching the room ${roomId} , ${error.message}`
    );
  }
}

//This function saves a new booking to the database
export async function bookRoom(roomId, booking) {
  try {
    const response = await api.post(
      `/bookings/room/${roomId}/booking`,
      booking
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error in booking room : ${error.message}`);
    }
  }
}

//this function gets all the bookings from database
export async function getAllBookings() {
  try {
    const result = await api.get("/bookings/all-bookings",{
			headers: getHeader()
		});
    return result.data;
  } catch (error) {
    throw new Error(`Error in fetching all bookings : ${error.message}`);
  }
}

//This function gets the bookings by confirmation code
export async function getBookingByConfirmationCode(confirmationCode) {
  try {
    const result = await api.get(`/bookings/confirmation/${confirmationCode}`);
    return result.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(
        `Error in finding booking by confirmation code : ${error.message}`
      );
    }
  }
}

//This function cancel the booking
export async function cancelBooking(bookingId) {
  try {
    const result = await api.delete(`/bookings/booking/${bookingId}/delete`);
    return result.data;
  } catch (error) {
    throw new Error(`Error in cancelling booking : ${error.message}`);
  }
}

//This function gives all the available rooms from the database
export async function getAvailableRooms(checkInDate, checkOutDate, roomType) {
  try {
    const result = await api.get(
      `/rooms/available-rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomType=${roomType}`
    );
    return result;
  } catch (error) {
    throw new Error(`Error in fetching available rooms : ${error.message}`);
  }
}

/* This function register a new user */
export async function registerUser(registration) {
  try {
    const response = await api.post("/auth/register-user", registration);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error in registration : ${error.message}`);
    }
  }
}

/* This function login a registered user */
export async function loginUser(login) {
  try {
    const response = await api.post("/auth/login", login);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    // if(error.response && error.response.data){
    //   throw new Error(error.response.data);
    // }else{
    //   throw new Error(`Error in login : ${error.message}`)
    // }

    console.log(error);
    return null;
  }
}

/*  This is function to get the user profile */
export async function getUserProfile(userId, token) {
	try {
		const response = await api.get(`users/profile/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
    // throw new Error(`Error in fetching user profile : ${error.message}`);
		throw error
	}
}


/* This isthe function to delete a user */
export async function deleteUser(userId) {
	try {
		const response = await api.delete(`/users/delete/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
    // throw new Error("Error in deleting a user" )
		return error.message
	}
}


/* This is the function to get a single user */
export async function getUser(userId, token) {
	try {
		const response = await api.get(`/users/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
    // throw new Error("Error in finding a user")
		throw error
	}
}


/* This is the function to get user bookings by the user id */
export async function getBookingsByUserId(userId, token) {
	try {
		const response = await api.get(`/bookings/user/${userId}/bookings`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		console.error("Error fetching bookings:", error.message)
		throw new Error("Failed to fetch bookings")
	}
}
