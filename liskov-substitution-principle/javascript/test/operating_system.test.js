const chai = require('chai')
    , expect = chai.expect;

import OS from '../src/javascripts/operating_system'

describe('Operating System', () => {
  it('should return it\'s kernal name', () => {
    let os = new OS.OperatingSystem('NT');     

    expect(os.kernalName).to.eql('NT');
  });
});

describe('Windows', () => {
  it('should return it\'s kernal name', () => {
    let windows = new OS.Windows('NT');

    expect(windows.kernalName).to.eql('NT');
  });

  describe('#architect', () => {
    let windows = new OS.Windows('NT');

    expect(windows.architect).to.eql('Bill Gates');
  });
});
