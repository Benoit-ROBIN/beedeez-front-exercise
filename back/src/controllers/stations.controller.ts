import { NextFunction, Request, Response } from 'express';
import stationsService from '@services/stations.service';
import { Station } from '@/models/stations.model';

class StationsController {
  public stationsService = new stationsService();

  public getStations = async (req: Request, res: Response, next: NextFunction) => {
    const itemNb = req.query?.itemNb;
    try {
      const {
        stations: finAllStations,
        isCompleted,
        total,
      }: {
        stations: Station[];
        isCompleted: boolean;
        total: number;
      } = await this.stationsService.findAllStations(+itemNb);

      res.status(200).json({ data: { list: finAllStations, isCompleted, total }, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default StationsController;
