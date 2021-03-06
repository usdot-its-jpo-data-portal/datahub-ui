import moment from 'moment';

export default {
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
    let dateA = moment(a.lastUpdate);
    let dateB = moment(b.lastUpdate);

    let comparison = 0;
    if (dateA.isBefore(dateB)) {
      comparison = 1;
    } else if (dateA.isAfter(dateB)) {
      comparison = -1;
    }
    return comparison;
  },

  // Method used for sorting search results by rank
  compareESScore: function(a, b) {
    let comparison = 0;
    if (a.esScore < b.esScore) {
      comparison = 1;
    } else if (a.esScore > b.esScore) {
      comparison = -1;
    }
    return comparison;
  },
  compareDownloadsTotal: function(a, b) {
    if (a.metrics.downloadsTotal >= b.metrics.downloadsTotal) {
      return -1;
    }
    return 1;
  },
  comparePageViewsLastMonth: function(a, b) {
    if (a.metrics.pageViewsLastMonth >= b.metrics.pageViewsLastMonth) {
      return -1;
    }
    return 1;
  },
  comparePageViewsTotal: function(a, b) {
    if (a.metrics.pageViewsTotal >= b.metrics.pageViewsTotal) {
      return -1;
    }
    return 1;
  }
}
