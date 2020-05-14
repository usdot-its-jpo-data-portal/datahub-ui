export const DTG_URL = 'https://api.us.socrata.com/api/catalog/v1';
export const DTG_DOMAIN = 'data.transportation.gov';

export const SCGC_URL = 'https://api.us.socrata.com/api/catalog/v1';
export const SCGC_DOMAIN = 'datahub.transportation.gov';

export const NTL_URL = 'https://rosap.ntl.bts.gov/fedora/export/view/collection/';
export const NTL_COLLECTION = "dot:239"; //Limit results to specific collection
export const NTL_DATELIMIT = "?from=2019-05-24T00:00:00Z"; //Limit results to before, after or between a specific date range
export const NTL_ROWSLIMIT = "&rows=9999";

export const COE_TOOLTIP_PLANNING ='The Planning project life cycle phase occurs when planning a project or procurement begins through release of a project or procurement.';
export const COE_TOOLTIP_PREAWARD = 'The Pre-Award project life cycle phase occurs after the release of a project or procurement through evaluation of project or procurement responses.';
export const COE_TOOLTIP_AWARD = 'The Award project life cycle phase begins when project award occurs through project kick-off.';
export const COE_TOOLTIP_POSTAWARD = 'The Post-Award project life cycle phase consists of the period after project kick-off where the project grows and starts producing data.';
export const COE_TOOLTIP_CLOSEOUT = 'The Closeout project life cycle phase occurs of the end of the project.';

export const ES_QUERY_LIMIT = 1000;
export const CC_LIST_ID = 1335295517;

export const EMAIL_MESSAGE = 'Join our mailing list! Stay up to date on new features and datasets!';
export const EMAIL_MESSAGE_ALERT = 'There is a problem with the registration service, please try again later.';
export const EMAIL_MESSAGE_INVALID_EMAIL = 'Invalid email format, please try again.';


//Also as promised here is an API link that ONLY grabs the 20 datasets you monitor: https://rosap.ntl.bts.gov/fedora/export/view/collection/dot:239?from=2019-05-24T00:00:00Z&until=2019-05-25T23:59:59Z