import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  
  it('shoudl receibe 0ms and convert to 0:00', () => {
    expect(convertToHumanTime(0)).to.be.eql('0:00');
  });

  it('should receive 1000ms and convert to 0:01', () => {
    expect(convertToHumanTime(1000)).to.be.eql('0:01');
  });

  it('should receive 11000ms and convert to 0:11', () => {
    expect(convertToHumanTime(11000)).to.be.eql('0:11');
  });

  it('should receive 60ms and convert to 1:00', () => {
    expect(convertToHumanTime(60000)).to.be.eql('1:00');
  });
});