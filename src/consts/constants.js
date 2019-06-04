export const SOCRATA_URL = 'https://api.us.socrata.com/api/catalog/v1';
export const SOCRATA_DOMAIN = 'data.transportation.gov';

export const NTL_URL = 'https://rosap.ntl.bts.gov/fedora/export/view/collection/';
export const NTL_COLLECTION = "dot:239"; //Limit results to specific collection
export const NTL_DATELIMIT = "?from=2019-05-24T00:00:00Z"; //Limit results to before, after or between a specific date range
export const NTL_ROWSLIMIT = "&rows=9999";

//Also as promised here is an API link that ONLY grabs the 20 datasets you monitor: https://rosap.ntl.bts.gov/fedora/export/view/collection/dot:239?from=2019-05-24T00:00:00Z&until=2019-05-25T23:59:59Z