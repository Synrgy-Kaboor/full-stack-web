/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Grid,
  Stack,
  Typography,
  Input,
  Box,
  Switch,
  Container,
  Card,
  CardContent,
  Button
} from "@mui/material";
import bgPesawat from "../../assets/ikhroma-bg-pesawat.jpg";
import { useState } from "react";
import {
  FlightTakeoffOutlined,
  FlightLandOutlined,
  SwapVertOutlined,
} from "@mui/icons-material";

const PilihJadwalSearch = () => {
  return (
    <Grid
      container
      sx={{
        background: `
    linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%),
    url(${bgPesawat})`,
    paddingBlock: "4rem"
      }}
      rowSpacing={2}
      alignItems={"center"}
    >
      <Grid container item md={7}>
        <Typography
          variant="h3"
          color={"white"}
          fontWeight={"800"}
          fontStyle={"normal"}
          pl={6}
        >
          Tiket Pesawat Murah & Promo Hari Ini
        </Typography>
      </Grid>
      <Grid
        container
        item
        md={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card>
          <CardContent sx={{ padding: "2rem" }}>
            <Stack direction={"column"} spacing={2}>
              <Box
                borderRadius={"0.5rem"}
                border={"1px solid #C2C2C2"}
                sx={{ padding: "1rem 1.5rem" }}
              >
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Grid
                    container
                    item
                    xs={10}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Stack direction={"column"} spacing={1}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <FlightTakeoffOutlined></FlightTakeoffOutlined>
                        <Stack direction={"column"}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#9E9E9E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            Dari
                          </Typography>
                          <Input
                            defaultValue="Surabaya, SUB"
                            sx={{
                              width: "100%",
                              color: "#1C1C1E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          />
                        </Stack>
                      </Stack>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <FlightTakeoffOutlined></FlightTakeoffOutlined>
                        <Stack direction={"column"}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#9E9E9E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            Ke
                          </Typography>
                          <Input
                            defaultValue="Surabaya, SUB"
                            sx={{
                              width: "100%",
                              color: "#1C1C1E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid container item xs={2} justifyContent={"center"}>
                    <SwapVertOutlined></SwapVertOutlined>
                  </Grid>
                </Grid>
              </Box>
              <Box
                borderRadius={"0.5rem"}
                border={"1px solid #C2C2C2"}
                sx={{ padding: "1rem 1.5rem" }}
              >
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Grid
                    container
                    item
                    xs={10}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Stack direction={"column"} spacing={1}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <FlightTakeoffOutlined></FlightTakeoffOutlined>
                        <Stack direction={"column"}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#9E9E9E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            Keberangkatan
                          </Typography>
                          <Input
                            defaultValue="Surabaya, SUB"
                            sx={{
                              width: "100%",
                              color: "#1C1C1E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          />
                        </Stack>
                      </Stack>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <FlightTakeoffOutlined></FlightTakeoffOutlined>
                        <Stack direction={"column"}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#9E9E9E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            Kepulangan
                          </Typography>
                          <Input
                            defaultValue="Surabaya, SUB"
                            sx={{
                              width: "100%",
                              color: "#1C1C1E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid container item xs={2} justifyContent={"center"}>
                    <SwapVertOutlined></SwapVertOutlined>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container justifyContent={"center"} spacing={1}>
                  <Grid item xs={6}>
                    <Box
                      borderRadius={"0.5rem"}
                      border={"1px solid #C2C2C2"}
                      sx={{ padding: "1rem" }}
                    >
                      <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                      >
                        <FlightTakeoffOutlined></FlightTakeoffOutlined>
                        <Stack>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#9E9E9E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            Penumpang
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#1C1C1E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            1 Orang
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      borderRadius={"0.5rem"}
                      border={"1px solid #C2C2C2"}
                      sx={{ padding: "1rem" }}
                    >
                      <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                      >
                        <FlightTakeoffOutlined></FlightTakeoffOutlined>
                        <Stack>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#9E9E9E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            Kelas
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              width: "100%",
                              color: "#1C1C1E",
                              fontWeight: 600,
                              fontStyle: "normal",
                              lineHeight: "1.5rem",
                            }}
                          >
                            Ekonomi
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Button variant="contained" sx={{background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`, width: "100%"}}>Cari</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PilihJadwalSearch;
