document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const save = document.querySelector("#form-album-entry");
  save.addEventListener("submit", handleFormSave);

  const cancel = document.querySelector("#btn-cancel");
  cancel.addEventListener("click", handleFormCancel);
});

const handleFormSave = function (e) {
  e.preventDefault();

  let title = this.title.value;
  let artist = this.artist.value;
  let rating = this.rating.value;

  const newAlbum = document.createElement("li");
  newAlbum.textContent = `title: ${title}, artist: ${artist}, rating: ${rating}`;

  const albumList = document.querySelector("#album-list");
  albumList.appendChild(newAlbum);

  //   console.log(
  //     `Form saved with title: ${title}, artist: ${artist}, rating: ${rating}`
  //   );
};

const handleFormCancel = function (e) {
  e.preventDefault();
  console.log("Form cancelled");
};
