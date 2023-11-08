import {
  AppBar,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Header.css";

function Header({
  page,
  setPage,
}: {
  page: string;
  setPage(page: string): void;
}): JSX.Element {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            flexGrow: 1,
          }}
        >
          WeatherApp
        </Typography>
        <ToggleButtonGroup exclusive aria-label="Platform" value={page}>
          {["Home", "Favorite"].map((item, idx) => (
            <ToggleButton
              key={idx}
              value={item}
              onClick={() => {
                setPage(item);
              }}
              sx={{ fontWeight: 700, backgroundColor: "" }}
            >
              {item}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
