import {
  Card,
  CardContent,
  Stack,
  Box,
  Typography,
  Divider,
} from "@mui/material";

import FlightLogo from "../../assets/Logo Maskapai.png";
import PlaneIcon from "../../assets/plane icon.png";

export default function FlightDetailCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <img src={FlightLogo} alt="Garuda Indonesia" />
          </Box>
          <Box sx={{ textAlign: "end" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Garuda Indonesia
            </Typography>
            <Typography variant="body2">Ekonomi</Typography>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="center" mt={2}>
          <Box>
            <Typography variant="body2">Surabaya</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              05.00 WIB
            </Typography>
          </Box>
          <Box sx={{ width: "40%", textAlign: "center" }} mx={2}>
            <Divider sx={{ borderStyle: "dashed" }}>
              <img src={PlaneIcon} alt="" />
            </Divider>
            <Typography variant="subtitle2" sx={{ color: "gray" }}>
              Durasi 4 Jam
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "gray" }}>
              Sen, 24 Des 2023
            </Typography>
          </Box>
          <Box sx={{ textAlign: "end" }}>
            <Typography variant="body2">Jakarta</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              09.00 WIB
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
