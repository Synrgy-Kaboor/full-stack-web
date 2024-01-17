import {
  Grid,
  Stack,
  Typography,
  Box,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFF",
  border: "1px solid #C2C2C2",
  boxShadow: 24,
  borderRadius: 3,
  px: 9,
  py: 3,
};
import {
  ArrowBackIosOutlined,
  AddCircleOutlined,
  RemoveCircleOutlined,
} from "@mui/icons-material";

interface ModalPassangerProps{
    Passanger: any;
    open: boolean;
    onClose: () => void;
    onSave: () => void;
}

const ModalPassanger = () => {
  return (
    <Box sx={modalStyle} width={"auto"}>
      <Stack alignItems={"center"} width={"100%"} spacing={1}>
        <Box
          position={"relative"}
          width={"100%"}
          alignItems={"center"}
          display={"flex"}
        >
          <IconButton
            sx={{ position: "absolute" }}
            onClick={handleModalPassangerVisibleClose}
          >
            <ArrowBackIosOutlined></ArrowBackIosOutlined>
          </IconButton>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign={"center"}
            width={"100%"}
          >
            Penumpang
          </Typography>
        </Box>
        <Divider sx={{ width: "100%" }} />
        <Box width={"100%"}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={10}>
              <Stack>
                <Typography variant="h6" fontWeight={600}>
                  Dewasa
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={400}
                  color={"#9E9E9E"}
                ></Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} width={"100%"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <IconButton>
                  <AddCircleOutlined
                    sx={{
                      color: "#FFF",
                      bgcolor: "#9E9E9E",
                      borderRadius: "50%",
                    }}
                  ></AddCircleOutlined>
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  1
                </Typography>
                <IconButton>
                  <RemoveCircleOutlined
                    sx={{
                      color: "#FFF",
                      bgcolor: "#9E9E9E",
                      borderRadius: "50%",
                    }}
                  ></RemoveCircleOutlined>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ width: "100%" }} />
        <Box width={"100%"}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={10}>
              <Stack>
                <Typography variant="h6" fontWeight={600}>
                  Anak
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={400}
                  color={"#9E9E9E"}
                >
                  2-11 tahun saat melakukan perjalanan
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} width={"100%"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <IconButton>
                  <AddCircleOutlined
                    sx={{
                      color: "#FFF",
                      bgcolor: "#9E9E9E",
                      borderRadius: "50%",
                    }}
                  ></AddCircleOutlined>
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  1
                </Typography>
                <IconButton>
                  <RemoveCircleOutlined
                    sx={{
                      color: "#FFF",
                      bgcolor: "#9E9E9E",
                      borderRadius: "50%",
                    }}
                  ></RemoveCircleOutlined>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ width: "100%" }} />
        <Box width={"100%"}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={10}>
              <Stack>
                <Typography variant="h6" fontWeight={600}>
                  Bayi
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={400}
                  color={"#9E9E9E"}
                >
                  Dibawah 2 tahun saat melakukan perjalanan
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} width={"100%"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <IconButton>
                  <AddCircleOutlined
                    sx={{
                      color: "#FFF",
                      bgcolor: "#9E9E9E",
                      borderRadius: "50%",
                    }}
                  ></AddCircleOutlined>
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  1
                </Typography>
                <IconButton>
                  <RemoveCircleOutlined
                    sx={{
                      color: "#FFF",
                      bgcolor: "#9E9E9E",
                      borderRadius: "50%",
                    }}
                  ></RemoveCircleOutlined>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ width: "100%" }} />
        <Box width={"100%"}>
          <Typography variant="subtitle1" fontWeight={400} color={"#9E9E9E"}>
            Hasil menampilkan harga rata-rata per penumpang sudah termasuk
            pajak, harga dapat bervariasi tergantung jenis penumpang.
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Instruksi pesan tiket untuk anak dan bayi
          </Typography>
        </Box>
        <Divider sx={{ width: "100%", borderColor: "#FFF" }} />
        <Box width={"100%"}>
          <Button
            variant="contained"
            sx={{
              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
              width: "100%",
            }}
          >
            Cari
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
