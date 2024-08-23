import React, { useEffect, useState } from "react";
import { getRoomById, updateRoom } from "../utils/ApiFunctions";
import RoomTypeSelector from "../common/RoomTypeSelector";
import { Link, useParams } from "react-router-dom";

const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { roomId } = useParams();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({ ...room, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: name === "roomPrice" ? parseFloat(value) || "" : value });
  };

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId);
        setRoom(roomData);
        setImagePreview(roomData.photo);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to fetch room data");
      }
    };
    fetchRoom();
  }, [roomId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const formData = new FormData();
      // formData.append("roomType", room.roomType);
      // formData.append("roomPrice", room.roomPrice);
      // if (room.photo instanceof File) {
      //   formData.append("photo", room.photo);
      // }

      const response = await updateRoom(roomId, room);
      if (response.status === 200) {
        setSuccessMessage("Room updated successfully!");
        const updatedRoomData = await getRoomById(roomId);
        setRoom(updatedRoomData);
        setImagePreview(updatedRoomData.photo);
        setErrorMessage("");
      } else {
        setErrorMessage("Error updating room");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="mt-5 mb-2">Edit Room Details</h2>

          {successMessage && (
            <div className="alert alert-success fade show">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger fade show">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="roomType" className="form-label">
                Room Type
              </label>
              <div>
                <RoomTypeSelector
                  handleRoomInputChange={handleInputChange}
                  newRoom={room}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="roomPrice" className="form-label">
                Room Price
              </label>
              <input
                type="number"
                className="form-control"
                required
                id="roomPrice"
                name="roomPrice"
                value={room.roomPrice}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Room Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                className="form-control"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={
                    typeof imagePreview === 'string'
                      ? `data:image/jpeg;base64,${imagePreview}`
                      : imagePreview
                  }
                  alt="Room Preview"
                  style={{ maxWidth: "400px", maxHeight: "400px" }}
                  className="mt-3"
                />
              )}
            </div>

            <div className="d-grid gap-2 d-md-flex mt-2">
              <Link to="/existing-rooms" className="btn btn-outline-info">
                Back
              </Link>
              <button type="submit" className="btn btn-outline-warning">
                Update Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditRoom;