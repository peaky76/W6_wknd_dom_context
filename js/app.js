document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const save = document.querySelector("#form-album-entry");
  save.addEventListener("submit", handleFormSave);

  const cancel = document.querySelector("#form-album-entry");
  cancel.addEventListener("reset", handleFormCancel);

  const deleteAll = document.querySelector("#form-album-list");
  deleteAll.addEventListener("reset", handleListDelete);
});

const createAlbumDetailListItem = function (value, id) {
  listItem = document.createElement("li");
  listItem.classList.add("album-detail");
  listItem.id = id;
  listItem.textContent = value;
  return listItem;
};

const createNewAlbumElement = function (info) {
  const newAlbumContainer = document.createElement("li");

  const newAlbum = document.createElement("ul");
  newAlbum.classList.add("album");

  const title = createAlbumDetailListItem(info.title.value, "title");
  const artist = createAlbumDetailListItem(info.artist.value, "artist");
  const year = createAlbumDetailListItem(info.year.value, "year");
  const genre = createAlbumDetailListItem(info.genre.value, "genre");
  const rating = createStarRating(info.rating.value, "rating");
  const details = [title, artist, year, genre, rating];

  details.forEach((item) => newAlbum.appendChild(item));
  newAlbum.appendChild(title);
  newAlbumContainer.appendChild(newAlbum);

  return newAlbumContainer;
};

const createStarRating = function (rating, id) {
  listItem = document.createElement("li");
  listItem.classList.add("album-detail");
  listItem.id = id;
  full_stars = "\u2605".repeat(rating);
  empty_stars = "\u2606".repeat(5 - rating);
  listItem.textContent = full_stars.concat(empty_stars);
  return listItem;
};

const handleFormSave = function (e) {
  e.preventDefault();

  const newAlbum = createNewAlbumElement(this);
  const albumList = document.querySelector("#album-list");
  albumList.appendChild(newAlbum);
};

const handleFormCancel = function (e) {
  e.preventDefault();
  console.log("Form cancelled");
};

const handleListDelete = function (e) {
  const albumList = document.querySelector("#album-list");
  while (albumList.firstChild) {
    albumList.removeChild(albumList.firstChild);
  }
};
