import { Router } from 'express';

import * as countryController from '../controllers/country.controller';

const router = Router();
const { getAvailableCountries, getCountryInfo } = countryController;

router.get('/available', getAvailableCountries);
router.post('/specific/info', getCountryInfo);

export { router as countryRouter };
