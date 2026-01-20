const note = document.getElementById("note");

// Charger la note au démarrage
note.value = localStorage.getItem("note") || "";

function saveNote() {
  localStorage.setItem("note", note.value);
  alert("Note sauvegardée !");
}

function clearNote() {
  localStorage.removeItem("note");
  note.value = "";
}
