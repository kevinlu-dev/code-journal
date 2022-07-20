var inputPhotoUrl = document.getElementById('user-photo-url');
var submitJournalEntry = document.getElementById('code-journal-form');
var defaultPhoto = document.getElementById('image-preview');

inputPhotoUrl.addEventListener('input', function (event) {
  defaultPhoto.src = event.target.value;
});

submitJournalEntry.addEventListener('submit', submitFunction);
function submitFunction(event) {
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

  var ulSelect = document.querySelector('ul');
  var callFunction = journalEntry(journalAll);
  ulSelect.prepend(callFunction);
  var paraLocation = document.querySelector('.para-location');
  paraLocation.setAttribute('class', 'hidden');

}

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

document.addEventListener('DOMContentLoaded', function (event) {
  var ulCreatePoint = document.querySelector('.create-point');

  for (let i = 0; i < data.entries.length; i++) {
    var dataEntriesLoop = journalEntry(data.entries[i]);
    ulCreatePoint.appendChild(dataEntriesLoop);
  }
});

var tabContLocation = document.querySelector('.nav-location');
var viewNodeList = document.querySelectorAll('.view');

tabContLocation.addEventListener('click', function (event) {
  var eventTarget = event.target;
  if (eventTarget.matches('.tab')) {
    var dataViewAttribute = eventTarget.getAttribute('data-view');
    for (let i = 0; i < viewNodeList.length; i++) {
      var nodeListAttribute = viewNodeList[i].getAttribute('data-view');
      if (dataViewAttribute === nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view');
        data.view = nodeListAttribute;
      } else if (dataViewAttribute !== nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view hidden');
      }
    }
  }
});

var newFormView = document.querySelector('.user-new');

newFormView.addEventListener('click', function (event) {
  var eventTarget = event.target;
  if (eventTarget.matches('.button-new')) {
    var dataViewAttribute = eventTarget.getAttribute('data-view');
    for (let i = 0; i < viewNodeList.length; i++) {
      var nodeListAttribute = viewNodeList[i].getAttribute('data-view');
      if (dataViewAttribute === nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view');
        data.view = nodeListAttribute;
      } else if (dataViewAttribute !== nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view hidden');
      }
    }
  }
});

submitJournalEntry.addEventListener('click', function (event) {
  var eventTarget = event.target;
  if (eventTarget.matches('.submit-button')) {
    var dataViewAttribute = eventTarget.getAttribute('data-view');
    for (let i = 0; i < viewNodeList.length; i++) {
      var nodeListAttribute = viewNodeList[i].getAttribute('data-view');
      if (dataViewAttribute === nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view');
        data.view = nodeListAttribute;
      } else if (dataViewAttribute !== nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view hidden');
      }
    }
  }
});

window.addEventListener('load', function (event) {
  for (let i = 0; i < viewNodeList.length; i++) {
    var nodeListAttribute = viewNodeList[i].getAttribute('data-view');
    if (data.view === nodeListAttribute) {
      viewNodeList[i].setAttribute('class', 'view');
    } else if (data.view !== nodeListAttribute) {
      viewNodeList[i].setAttribute('class', 'view hidden');
    }
  }
});
