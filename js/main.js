var inputPhotoUrl = document.getElementById('user-photo-url');
var submitJournalEntry = document.getElementById('code-journal-form');
var defaultPhoto = document.getElementById('image-preview');

inputPhotoUrl.addEventListener('input', function (event) {
  defaultPhoto.src = event.target.value;
});

submitJournalEntry.addEventListener('submit', function (event) {
  event.preventDefault();
  var journalAll = {
    title: submitJournalEntry.elements.title.value,
    photoUrl: submitJournalEntry.elements.photourl.value,
    notes: submitJournalEntry.elements.notes.value,
    entryId: data.nextEntryId++
  };
  data.entries.unshift(journalAll);
  defaultPhoto.setAttribute('src', 'images/placeholder-image-square.jpg');
  document.getElementById('code-journal-form').reset();
});
