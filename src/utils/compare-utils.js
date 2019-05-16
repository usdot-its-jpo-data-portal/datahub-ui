export default {
  ////===============================================SEARCH HELPER FUNCTIONS===============================================
  // Method used for sorting search results by dataset title alphabetically
  compareName: function (a, b) {
    const titleA = a.name.toUpperCase();
    const titleB = b.name.toUpperCase();

    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
  },
  
  // Method used for sorting search results by date created
  compareDate: function(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);

    let comparison = 0;
    if (dateA < dateB) {
      comparison = 1;
    } else if (dateA > dateB) {
      comparison = -1;
    }
    return comparison;
  }
}
