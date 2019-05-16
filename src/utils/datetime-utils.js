export default {
    formatDate: function(date) {
      var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ];
      var newDate = new Date(date);
      var day = newDate.getUTCDate();
      var monthIndex = newDate.getUTCMonth();
      var year = newDate.getUTCFullYear();
      return monthNames[monthIndex] + ' ' + day +  ' ' + year;
    }
}
