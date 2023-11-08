import { Search } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import weatherService from "../../../Services/WeatherService";
import "./Home.css";
import LocationAutocompleteModel from "../../../Models/LocationAutocompleteModel";
import weather from "../../../../array.json";

function Home(): JSX.Element {
  const [country, setCountry] = useState<string>("");
  const [isPlaceReade, setPlaceReady] = useState<boolean>(false);
  const [arrayOfCountry, setArrayOfCountry] = useState<
    LocationAutocompleteModel[]
  >([]);

  useEffect(() => {
    if (isPlaceReade) {
      // weatherService
      //   .getLocationAutocomplete(country)
      // .then((data) => setArrayOfCountry(data));
      setCountry("");
    }
  }, [isPlaceReade]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setPlaceReady(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div className="Home">
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <TextField
          type="text"
          label="Enter Country or City:"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={country}
        />
      </Box>
      <div className="weatherInfo">
          hello
      </div>
    </div>
  );
}

export default Home;
