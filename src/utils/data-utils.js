export default {
  validResponse: function(response) {
    return response && response.status === 200 && response.data && response.data.code === 200 && response.data.result;
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
    return response && response.status === 200 && response.data && response.data.code === 200;
  }
}
