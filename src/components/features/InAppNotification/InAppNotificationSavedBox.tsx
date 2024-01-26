/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
import { Box, Stack, Typography, Divider, IconButton } from "@mui/material";
import {
  CalendarMonthOutlined,
  DirectionsWalkOutlined,
  FlightClassOutlined,
  FlightTakeoffOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import theme from "../../../config/theme";
import { useState } from "react";
const InAppNotificationSavedBox = () => {
  const [popUpDetailVisible, setPopUpDetailVisible] = useState(false);
  return (
    <>
      <Box borderRadius={1} border={"1px solid #C2C2C2"} py={2}>
        <Stack gap={1}>
          <Stack px={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={1.25}
              mb={1}
            >
              <Stack direction={"row"} alignItems={"center"} gap={2.5}>
                <Typography variant="h6" fontWeight={600} color={"#505050"}>
                  Surabaya (SUB)
                </Typography>
                <FlightTakeoffOutlined />
                <Typography variant="h6" fontWeight={600} color={"#505050"}>
                  Jakarta (CGK)
                </Typography>
              </Stack>
              <Box position={"relative"}>
                <IconButton onClick={() => setPopUpDetailVisible(!popUpDetailVisible)}>
                  <MoreHorizOutlined />
                </IconButton>
                <Box borderRadius={1} border={"1px solid #C2C2C2"} sx={{background: "#FFF"}} py={2.25} position={"absolute"} right={0} width={"max-content"} display={popUpDetailVisible ? "flex" : "none"}>
                  <Stack gap={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        background: theme.palette.gradients?.diagonal,
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                      fontWeight={600}
                      px={3.5}
                    >
                      Edit Notifikasi Harga
                    </Typography>
                    <Divider />
                    <Typography
                      variant="h6"
                      sx={{
                        background: "#CB3A31",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                      fontWeight={600}
                      px={3.5}
                    >
                      Hapus Notifikasi Harga
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Stack>
            <Stack direction={"row"} gap={1.7}>
              <Stack direction={"row"} gap={0.5} color={"#9E9E9E"}>
                <CalendarMonthOutlined />
                <Typography variant="subtitle1" fontWeight={600}>
                  4 Des 2024
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={0.5} color={"#9E9E9E"}>
                <DirectionsWalkOutlined />
                <Typography variant="subtitle1" fontWeight={600}>
                  1 Orang
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={0.5} color={"#9E9E9E"}>
                <FlightClassOutlined />
                <Typography variant="subtitle1" fontWeight={600}>
                  Ekonomi
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider></Divider>
          <Typography
            px={3}
            variant="subtitle1"
            sx={{
              background: theme.palette.gradients?.diagonal,
              backgroundClip: "text",
              color: "transparent",
            }}
            fontWeight={700}
          >
            Rp 1.230.000 - Rp 1.500.000
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export { InAppNotificationSavedBox };
