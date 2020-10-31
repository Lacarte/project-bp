import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces';

export class MyInMemoryService implements InMemoryDbService {

  // In-Memory DB will intercept /api/whatever calls and return data
  createDb() {
    const customers = [
      { id: 1, username: 'fred92', password: '1234' },
      { id: 2, username: 'john69', password: 'abcd' },
      // add as many data you need
    ];
    const products = [
      { id: 1, maker: 'Samsung', model: 'Galaxy'},
      { id: 2, maker: 'Sony', model: 'Xperia'}
    ];

    const doctypes = [
      { id: 1, name: 'Passport'},
      { id: 2, name: 'ID'},
      { id: 3, name: 'Licence'}
    ];

    const countries = [
      { id: 1, name: 'Haiti', code: 'HT'},
      { id: 2, name: 'Dominican Republic', code: 'DO'},
      { id: 3, name: 'France', ccode: 'FR'},
      { id: 4, name: 'Guadeloupe', ccode: 'GP'},
    ];

    const giftvalues = [
      { id: 1, value: 10},
      { id: 2, value: 20},
      { id: 3, value: 30},
      { id: 4, value: 40},
      { id: 5, value: 40},
      { id: 6, value: 40},
    ];



    return { customers, products, doctypes, countries, giftvalues  }; // add as many end-points you want
  }
}
