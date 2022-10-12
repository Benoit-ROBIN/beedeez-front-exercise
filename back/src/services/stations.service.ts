import stationsModel, { Station } from '@models/stations.model';

class StationsService {
  public async findAllStations(itemNb): Promise<{
    stations: Station[];
    isCompleted: boolean;
    total: number;
  }> {
    const stations: Station[] = await stationsModel.find().limit(itemNb);
    const countDocuments = await stationsModel.countDocuments();
    const isCompleted = countDocuments > stations.length;
    return {
      stations,
      isCompleted,
      total: countDocuments,
    };
  }
}

export default StationsService;
