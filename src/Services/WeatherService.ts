import axios from 'axios';
import appConfig from '../Utils/AppConfig';

class WeatherService {
  public async getLocationAutocomplete(place: string): Promise<any> {
    const { data } = await axios.get(appConfig.locationAutocompleteURL + place);

    return data;
  }
}

const weatherService = new WeatherService();
export default weatherService;
