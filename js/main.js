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

  function journalEntry(entry) {
    var newListing = document.createElement('li');

    var newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');
    newListing.appendChild(newRow);

    var newColumnHalfOne = document.createElement('div');
    newColumnHalfOne.setAttribute('class', 'column-half');
    newRow.appendChild(newColumnHalfOne);

    var newImage = document.createElement('img');
    newImage.setAttribute('src', entry.photoUrl);
    newColumnHalfOne.appendChild(newImage);

    var newColumnHalfTwo = document.createElement('div');
    newColumnHalfTwo.setAttribute('class', 'column-half');
    newRow.appendChild(newColumnHalfTwo);

    var newHeadingTwo = document.createElement('h2');
    var journalTitle = document.createTextNode(entry.title);
    newColumnHalfTwo.appendChild(newHeadingTwo);
    newHeadingTwo.appendChild(journalTitle);

    var newParagraph = document.createElement('p');
    var journalNotes = document.createTextNode(entry.notes);
    newColumnHalfTwo.appendChild(newParagraph);
    newParagraph.appendChild(journalNotes);

    return newListing;
  }

  var ulCreatePoint = document.querySelector('.create-point');

  for (let i = 0; i < data.entries.length; i++) {
    var dataEntriesLoop = journalEntry(data.entries[i]);
    ulCreatePoint.appendChild(dataEntriesLoop);
  }

});
