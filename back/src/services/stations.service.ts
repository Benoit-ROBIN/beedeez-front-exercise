import stationsModel, { Station } from '@models/stations.model';

class StationsService {
  public async findAllStations(itemNb): Promise<{
    stations: Station[];
    total: number;
  }> {
    const stations: Station[] = await stationsModel.find().limit(itemNb);
    const countDocuments = await stationsModel.countDocuments();
    return {
      stations,
      total: countDocuments,
    };
  }
}

export default StationsService;
