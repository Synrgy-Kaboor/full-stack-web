/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Grid,
  Stack,
  Typography,
  Box,
  Button,
  IconButton,
  Divider,
  Modal,
} from "@mui/material";
import {
  ArrowBackIosOutlined,
  AddCircleOutlined,
  RemoveCircleOutlined,
} from "@mui/icons-material";
import {
  ModalPassagerProps,
  PassangerSearch,
} from "../../types/ModalPassagerProps";
import { useState } from "react";

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

const ModalPassanger = (props: ModalPassagerProps) => {
  const [adultValue, setAdultValue] = useState(props.Passanger.adult.value);
  const [childrenValue, setChildrenValue] = useState(
    props.Passanger.child.value
  );
  const [babyValue, setBabyValue] = useState(props.Passanger.baby.value);
  const handleOnClose = () => {
    setAdultValue(props.Passanger.adult.value);
    setChildrenValue(props.Passanger.child.value);
    setBabyValue(props.Passanger.baby.value);
    props.onClose();
  };
  return (
    <Modal
      open={props.open}
      onClose={handleOnClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      id="modal-passanger"
    >
      <Box sx={modalStyle} width={"auto"}>
        <Stack alignItems={"center"} width={"100%"} spacing={2}>
          <Box
            position={"relative"}
            width={"100%"}
            alignItems={"center"}
            display={"flex"}
          >
            <IconButton sx={{ position: "absolute" }} onClick={handleOnClose}>
              <ArrowBackIosOutlined></ArrowBackIosOutlined>
            </IconButton>
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign={"center"}
              width={"100%"}
              fontFamily={"Open Sans"}
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
                  <Typography variant="h6" fontWeight={600} 
              fontFamily={"Open Sans"}>
                    Dewasa
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={400}
                    color={"#9E9E9E"}
                    fontFamily={"Open Sans"}
                  ></Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} width={"100%"}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <IconButton onClick={() => setAdultValue(adultValue + 1)}>
                    <AddCircleOutlined
                      sx={{
                        color: "#FFF",
                        bgcolor: "#9E9E9E",
                        borderRadius: "50%",
                      }}
                    ></AddCircleOutlined>
                  </IconButton>
                  <Typography variant="h6" fontWeight={600} 
              fontFamily={"Open Sans"}>
                    {adultValue}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      if (adultValue > 0) setAdultValue(adultValue - 1);
                    }}
                  >
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
                  <Typography variant="h6" fontWeight={600} 
              fontFamily={"Open Sans"}>
                    Anak
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={400}
                    color={"#9E9E9E"}
                    fontFamily={"Open Sans"}
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
                  <IconButton
                    onClick={() => setChildrenValue(childrenValue + 1)}
                  >
                    <AddCircleOutlined
                      sx={{
                        color: "#FFF",
                        bgcolor: "#9E9E9E",
                        borderRadius: "50%",
                      }}
                    ></AddCircleOutlined>
                  </IconButton>
                  <Typography variant="h6" fontWeight={600} 
              fontFamily={"Open Sans"}>
                    {childrenValue}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      if (childrenValue > 0)
                        setChildrenValue(childrenValue - 1);
                    }}
                  >
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
                  <Typography variant="h6" fontWeight={600}
              fontFamily={"Open Sans"}>
                    Bayi
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={400}
                    color={"#9E9E9E"}
                    fontFamily={"Open Sans"}
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
                  <IconButton onClick={() => setBabyValue(babyValue + 1)}>
                    <AddCircleOutlined
                      sx={{
                        color: "#FFF",
                        bgcolor: "#9E9E9E",
                        borderRadius: "50%",
                      }}
                    ></AddCircleOutlined>
                  </IconButton>
                  <Typography variant="h6" fontWeight={600}
              fontFamily={"Open Sans"}>
                    {babyValue}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      if (babyValue > 0) setBabyValue(babyValue - 1);
                    }}
                  >
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
            <Typography variant="subtitle1" fontWeight={400} color={"#9E9E9E"}
              fontFamily={"Open Sans"}>
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
              fontFamily={"Open Sans"}
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
                fontFamily: "Open Sans",
              }}
              onClick={() => {
                const data = {
                  adult: {
                    value: adultValue,
                  },
                  child: {
                    value: childrenValue,
                  },
                  baby: {
                    value: babyValue,
                  },
                };
                props.onSave(data);
              }}
            >
              Simpan
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalPassanger;
