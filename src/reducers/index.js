import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Tenu Suit Suit", duration: "3:45" },
    { title: "Ek Ajnabi", duration: "3:49" },
    { title: "Ye Raatein Ye Mausam", duration: "4:01" },
    { title: "Mere Sapno", duration: "3;21" },
    { title: "O Mere Dil Ke Chain", duration: "2:56" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  song: songsReducer,
  selectedSong: selectedSongReducer
});
