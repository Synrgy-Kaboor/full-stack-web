/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Stack, Typography, Input, Box, Switch } from "@mui/material";
import bgPesawat from "../../assets/ikhroma-bg-pesawat.jpg";
import { useState } from "react";

const SearchFilterCard = () => {
  const [kepulanganVisible, setKepulanganVisible] = useState(false);

  const handleKepulanganVisible = () => {
    setKepulanganVisible(!kepulanganVisible);
  };
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
        <Stack justifyContent={"center"} alignItems={"center"} spacing={1}>
          <Box
            borderRadius={"0.5rem"}
            border={"1px solid #C2C2C2"}
            height={"auto"}
            width={"23.5rem"}
            padding={"1.5rem 1rem"}
          >
            <Grid
              container
              direction={"row"}
              spacing={0.5}
              alignItems={"center"}
            >
              <Grid item xs={10}>
                <Grid container item spacing={1} alignItems={"center"}>
                  <Grid container item xs={2}>
                    ICON
                  </Grid>
                  <Grid
                    container
                    item
                    xs={8}
                    spacing={0.5}
                    direction={"column"}
                  >
                    <Grid item xs={4}>
                      <Typography variant="body1">Dari</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Input
                        defaultValue="Surabaya, SUB"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item spacing={1} alignItems={"center"}>
                  <Grid container item xs={2}>
                    ICON
                  </Grid>
                  <Grid
                    container
                    item
                    xs={8}
                    spacing={0.5}
                    direction={"column"}
                  >
                    <Grid item xs={4}>
                      <Typography variant="body1">Ke</Typography>
                    </Grid>
                    <Grid item xs={"auto"}>
                      <Input
                        defaultValue="Surabaya, SUB"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.2059 15.0784L18.8641 17.4201L18.0106 18.2737V17.0666L18.0106 5.23405C18.0106 5.09579 17.9557 4.96321 17.8579 4.86545C17.7601 4.76769 17.6275 4.71277 17.4893 4.71277C17.351 4.71277 17.2185 4.76769 17.1207 4.86545C17.0229 4.96321 16.968 5.09579 16.968 5.23405L16.968 17.0666V18.2737L16.1145 17.4201L13.7763 15.0819C13.6782 14.9885 13.5477 14.9369 13.4122 14.9381C13.2755 14.9393 13.1448 14.9941 13.0481 15.0908C12.9515 15.1874 12.8967 15.3182 12.8955 15.4548C12.8943 15.5903 12.9459 15.7209 13.0393 15.8189L17.1208 19.9004C17.1208 19.9004 17.1208 19.9004 17.1208 19.9004C17.2186 19.9981 17.3511 20.053 17.4893 20.053C17.6275 20.053 17.76 19.9981 17.8578 19.9004C17.8578 19.9004 17.8578 19.9004 17.8578 19.9004L21.9428 15.8154C22.0406 15.7176 22.0955 15.585 22.0955 15.4468C22.0955 15.3086 22.0406 15.1761 21.9429 15.0784C21.9429 15.0783 21.9429 15.0783 21.9428 15.0783M21.2059 15.0784L21.9428 15.0783M21.2059 15.0784C21.2059 15.0784 21.2059 15.0783 21.2059 15.0783M21.2059 15.0784L21.2059 15.0783M21.9428 15.0783C21.8451 14.9806 21.7126 14.9258 21.5744 14.9258C21.4362 14.9258 21.3037 14.9806 21.2059 15.0783M21.9428 15.0783L21.2059 15.0783M2.82654 8.94705C2.73315 9.04508 2.68154 9.17565 2.68271 9.31113C2.6839 9.44781 2.73872 9.57855 2.83537 9.6752C2.93202 9.77185 3.06277 9.82667 3.19944 9.82786C3.33492 9.82904 3.46548 9.77743 3.5635 9.68405L5.9017 7.34585L6.75525 6.4923V7.69941L6.75525 19.5319C6.75525 19.6702 6.81017 19.8028 6.90793 19.9005C7.00569 19.9983 7.13828 20.0532 7.27653 20.0532C7.41478 20.0532 7.54737 19.9983 7.64513 19.9005C7.74288 19.8028 7.7978 19.6702 7.7978 19.5319L7.7978 7.69941V6.4923L8.65136 7.34585L10.9931 9.68759C10.9931 9.68761 10.9931 9.68762 10.9931 9.68764C11.0909 9.78533 11.2234 9.84021 11.3616 9.84021C11.4998 9.84021 11.6323 9.78536 11.7301 9.68769C11.7301 9.68766 11.7301 9.68762 11.7302 9.68759M2.82654 8.94705L12.0837 8.59711C12.2751 8.78863 12.3827 9.04835 12.3827 9.31915C12.3827 9.58996 12.2751 9.84968 12.0837 10.0412L11.7302 9.68759M2.82654 8.94705L6.90798 4.86561C6.908 4.86559 6.90802 4.86557 6.90804 4.86556C7.00579 4.76787 7.13833 4.71299 7.27653 4.71299C7.41473 4.71299 7.54727 4.76787 7.64502 4.86556C7.64504 4.86557 7.64505 4.86559 7.64507 4.86561L11.7301 8.95061C11.7301 8.95063 11.7301 8.95065 11.7301 8.95066M2.82654 8.94705L11.7301 8.95066M11.7302 9.68759C11.8278 9.58984 11.8827 9.45732 11.8827 9.31915C11.8827 9.18095 11.8278 9.04841 11.7301 8.95066M11.7302 9.68759L11.7301 8.95066"
                      fill="black"
                      stroke="white"
                    />
                  </svg>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            borderRadius={"0.5rem"}
            border={"1px solid #C2C2C2"}
            height={"auto"}
            width={"23.5rem"}
            padding={"1.5rem 1rem"}
          >
            <Grid
              container
              direction={"row"}
              spacing={0.5}
              alignItems={"center"}
            >
              <Grid item xs={10}>
                <Grid container item spacing={1} alignItems={"center"}>
                  <Grid container item xs={2}>
                    ICON
                  </Grid>
                  <Grid
                    container
                    item
                    xs={8}
                    spacing={0.5}
                    direction={"column"}
                  >
                    <Grid item xs={4}>
                      <Typography variant="body1">Keberangkatan</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <DatePicker />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={1}
                  alignItems={"center"}
                  sx={
                    kepulanganVisible
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Grid container item xs={2}>
                    ICON
                  </Grid>
                  <Grid
                    container
                    item
                    xs={8}
                    spacing={0.5}
                    direction={"column"}
                  >
                    <Grid item xs={4}>
                      <Typography variant="body1">Kepulangan</Typography>
                    </Grid>
                    <Grid item xs={"auto"}>
                      <Input
                        defaultValue="Surabaya, SUB"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Box>
                  <Switch onChange={handleKepulanganVisible} />
                </Box>
              </Grid>
            </Grid>
          </Box>
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
      <div
        style={{
          background: `
      linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%),
      url(${bgPesawat})`,
        }}
      >
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
