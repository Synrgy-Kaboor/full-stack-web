/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Grid,
  Stack,
  Typography,
  Autocomplete,
  Container,
  Box,
} from "@mui/material";
import bgPesawat from "../../assets/ikhroma-bg-pesawat.jpg";

interface RoundedBoxProps {
  height: string;
  width: string;
}

const RoundedBox = (props: RoundedBoxProps) => {
  return (
    <Box
      borderRadius={"0.5rem"}
      border={"1px solid #C2C2C2"}
      height={props.height}
      width={props.width}
    ></Box>
  );
};

const SearchFilterCard = () => {
  return (
    <>
      <Box
        borderRadius={"10px"}
        height={"35.6875rem"}
        width={"27.375rem"}
        bgcolor={"white"}
        boxShadow={
          "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"
        }
        padding={"2rem"}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <RoundedBox height={"10.25rem"} width={"23.5rem"}></RoundedBox>
          <Grid container>2</Grid>
          <Grid container>3</Grid>
          <Grid container>4</Grid>
        </Stack>
      </Box>
    </>
  );
};

const PilihJadwalSearch = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bgPesawat})` }}>
        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Grid item xs={6}>
            <Typography
              variant="h2"
              style={{
                color: "white",
                fontFamily: "Open Sans",
                fontSize: "3.375rem",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
                letterSpacing: "-0.04688rem",
              }}
            >
              Tiket Pesawat Murah & Promo Hari Ini
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <SearchFilterCard></SearchFilterCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PilihJadwalSearch;
