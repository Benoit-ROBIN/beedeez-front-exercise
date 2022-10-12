import stationsModel, { Station } from '@models/stations.model';

class StationsService {
  public async findAllStations(
    itemNb,
    filter = undefined,
  ): Promise<{
    stations: Station[];
    isCompleted: boolean;
    total: number;
  }> {
    const pattern = filter ? { name: new RegExp(filter as string, 'i') } : {};
    const stations: Station[] = await stationsModel.find(pattern).limit(itemNb);
    const countDocuments = await stationsModel.countDocuments(pattern);
    const isCompleted = countDocuments > stations.length;
    return {
      stations,
      isCompleted,
      total: countDocuments,
    };
  }
}

export default StationsService;
