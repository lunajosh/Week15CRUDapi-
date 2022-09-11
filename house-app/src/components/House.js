import React from "react";
import {NewRoomForm} from './NewRoomForm';

//functional component
export const House = (props) => {
    //deconstruct the props to get an update -- house, all the data that reps the house, updateHouse, the method to update it
    const { house, updateHouse} = props;

    const deleteRoom = (roomId) => {
        //when deleting a room, updating a house, the updated house to the results that come back when filter out the room that has a matching id. Will use filter method on the array.
        const updatedHouse = {
            //using spread
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId )
        };
        updateHouse(updatedHouse);
    }

    // method to add a room
    const addNewRoom = (room) =>
        
        updateHouse({...house, rooms: [...house.rooms, room]});

    //function to check if the room name is null or empty
    const checkRoomName = (room) => {
        console.log("checkRoomName", room);
        if (room === null || room === "") {
            return "";
        } else {
            return room.name;
        }
    };

    //function to check if the room area is null or empty
    const checkRoomArea = (room) => {
    //If the room area is null or empty return an empty string
        if (room === null || room === "") {
            return "";
         }
    //If the room area is not null or empty return the room area
        else {
        return room.area;
    }
  };

    //plural (rooms) -- this component is the rooms
    const rooms = () => (
        <ul className="homedescription">
            {house.rooms.map((room, index) => (
                <ul key={index}>
                    {console.log(house.rooms)}
                        <label className="room">{`${checkRoomName(room)}`}</label> <br/>
                        <label className="area">{`Area: ${checkRoomArea(room)} square feet`}
                    </label>
                    <button className="btn btn-outline-secondary" onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </ul>
            ))}
        </ul>
    );

    return (
       <div className="housename">
            <h3> Home Name: </h3>
                <div className="housename-name">
                    <h4>{house.name}</h4>
                </div>

            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
       </div> 
    );
};