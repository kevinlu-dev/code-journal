/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
});

var previousEntriesJSON = localStorage.getItem('javascript-local-storage');
if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}
