class AppConfig {
    public readonly locationAutocompleteURL: string = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${import.meta.env.VITE_API_KEY}&q=` 
}

const appConfig = new AppConfig()
export default appConfig;