import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const api = axios.create({ baseURL: `http://localhost:${process.env.PORT}/country` });

describe('Country Tests', () => {
  it('Return available countries', async () => {
    const response = await api.get('/available');
    const countries = response.data;

    expect(countries).toHaveProperty('countries');
    expect(countries.countries.length).toBeGreaterThan(0);
  });

  it('Return specific country info', async () => {
    const response = await api.post('/specific/info', {
      countryCode: 'BR',
      countryName: 'Brazil',
    });

    const countryInfo = response.data;

    expect(countryInfo).toHaveProperty('borderCountries');
    expect(countryInfo).toHaveProperty('countryPopulation');
    expect(countryInfo).toHaveProperty('countryFlag');
  });
});
