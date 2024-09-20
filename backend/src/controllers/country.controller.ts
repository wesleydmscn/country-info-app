import type { RequestHandler, Response } from 'express';

import * as countryService from '../services/country.service';
import type { CustomRequest } from '../configs/general.config';

export const getAvailableCountries: RequestHandler = async (req, res) => {
  try {
    res.json(await countryService.getAvailableCountries());
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving available countries' });
  }
};

export const getCountryInfo = async (
  req: CustomRequest<{ countryCode: string; countryName: string }>,
  res: Response,
) => {
  const { countryCode, countryName } = req.body;

  !countryCode && res.status(400).json({ message: 'countryCode is missing' });
  !countryName && res.status(400).json({ message: 'countryName is missing' });

  try {
    const countryInfo = await countryService.getCompleteCountryInfo({
      countryCode,
      countryName,
    });

    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving country info' });
  }
};
