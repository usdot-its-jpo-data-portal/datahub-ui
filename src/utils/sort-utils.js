import CompareUtils from './compare-utils.js';

export default {
  sortData: function (data, sortByName) {
    if(sortByName) {
      data.sort(CompareUtils.compareName);
    } else {
      data.sort(CompareUtils.compareDate);
    }
    return data;
  }
}
