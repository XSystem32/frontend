import { browser, element, by, protractor } from 'protractor';
import { AppPage } from './app.po';

it('should create new junction', () => {
  browser.get('');
  element(by.id('junctions')).click();

  element.all(by.css('.example-card')).then((el) => {
    const before = el.length; // eg before = 3
    element(by.id('junction')).click();
    element(by.css('input[formControlName=userCreated]')).sendKeys('David');
    element(by.css('input[formControlName=host]')).sendKeys('3');
    element(by.css('input[formControlName=availableSeats]')).sendKeys('4');
    element(by.css('input[formControlName=departureTime]')).sendKeys('22-10-2019' + protractor.Key.TAB + '10-05');

    element(by.id('registerTrip')).click();

    element.all(by.css('.example-card')).then((el2) => {
      const after = el2.length; // eg after = 4

      expect(before + 1).toEqual(after);
    });
  });
});
