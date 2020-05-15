import moment from 'moment';
export default {
  validResponse: function(response) {
    return response && response.status === 200 && response.data && [200,201,204].includes(response.data.code) && response.data.result;
  },
  getErrors: function(response) {
    if (!this.validResponse(response)) {
      if (response.data) {
        let msg = response.data.status;
        if (response.data.errors && response.data.errors.length > 0) {
          for(let i=0 ; i<response.data.errors.length; i++) {
            msg += ' => '+response.data.errors[i].message;
          }
        }
        return msg;
      }
    }
  },
  validCCResponse: function(response) {
    return response && response.status === 200 && response.data && [200,201,204].includes(response.data.code);
  },
  resolveVersion: function(pkgJson) {
    if(!pkgJson || !pkgJson.version) {
      return null;
    }
    let dt = moment().utc().format("YYMMDDHHmm");
    let vers = pkgJson.version.split('.');
    let v = vers[0]+'.'+vers[1]+'.'+dt;
    return v;
  }
}
