import {shallowMount} from '@vue/test-utils';
import DataUtils from '@/utils/data-utils.js';

describe('data-utils.js', () => {
  let dataUtils;
  beforeEach(() => {
    dataUtils = {...DataUtils}
  });

  it('test validResponse invalid response', () => {
    let r = dataUtils.validResponse(null);
    expect(r).toBeFalsy();
  });
  it('test validResponse invalid status', () => {
    let response = {
      status: 876
    }
    let r = dataUtils.validResponse(response);
    expect(r).toBeFalsy();
  });
  it('test validResponse no response.data', () => {
    let response = {
      status: 200,
      data: null
    }
    let r = dataUtils.validResponse(response);
    expect(r).toBeFalsy();
  });
  it('test validResponse invalid response.data.code', () => {
    let response = {
      status: 200,
      data: {
        code: 500
      }
    }
    let r = dataUtils.validResponse(response);
    expect(r).toBeFalsy();
  });
  it('test validResponse invalid response.data.result', () => {
    let response = {
      status: 200,
      data: {
        code: 200,
        result: null
      }
    }
    let r = dataUtils.validResponse(response);
    expect(r).toBeFalsy();
  });
  it('test validResponse valid', () => {
    let response = {
      status: 200,
      data: {
        code: 200,
        result: {}
      }
    }
    let r = dataUtils.validResponse(response);
    expect(r).toBeTruthy();
  });
  it('test getErrors', () => {
    let response = {
      status: 200,
      data: {
        code: 500,
        status: 'status',
        result: null,
        errors: [
          {message: 'error 1'},
          {message: 'error 2'}
        ]
      }
    }
    let r = dataUtils.getErrors(response);
    expect(r).toEqual('status => error 1 => error 2');
  });

  it('test validCCResponse invalid response', () => {
    let r = dataUtils.validCCResponse(null);
    expect(r).toBeFalsy();
  });
  it('test validCCResponse invalid status', () => {
    let response = {
      status: 876
    }
    let r = dataUtils.validCCResponse(response);
    expect(r).toBeFalsy();
  });
  it('test validCCResponse no response.data', () => {
    let response = {
      status: 200,
      data: null
    }
    let r = dataUtils.validCCResponse(response);
    expect(r).toBeFalsy();
  });
  it('test validCCResponse invalid response.data.code', () => {
    let response = {
      status: 200,
      data: {
        code: 500
      }
    }
    let r = dataUtils.validCCResponse(response);
    expect(r).toBeFalsy();
  });
  it('test validCCResponse valid', () => {
    let response = {
      status: 200,
      data: {
        code: 200,
        result: {}
      }
    }
    let r = dataUtils.validCCResponse(response);
    expect(r).toBeTruthy();
  });
  it('test resolveVersion invalid package.json', () => {
    let pkgJson = null;
    let r = dataUtils.resolveVersion(pkgJson);
    expect(r).toBeNull();
  });
  it('test resolveVersion invalid version', () => {
    let pkgJson = {
      version: null
    };
    let r = dataUtils.resolveVersion(pkgJson);
    expect(r).toBeNull();
  });
  it('test resolveVersion valid', () => {
    let pkgJson = {
      version: '1.2.0'
    };
    let r = dataUtils.resolveVersion(pkgJson);
    let parts = r.split('.');
    expect(parts[0]).toEqual('1');
    expect(parts[1]).toEqual('2');
  });
});
