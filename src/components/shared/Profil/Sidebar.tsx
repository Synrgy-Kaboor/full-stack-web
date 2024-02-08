import { Divider, Stack, Typography, useTheme, Avatar } from "@mui/material";
import { sideBarItem1, exitItem } from ".";
import { useNavigate } from "react-router-dom";
import profileImg from "../../../assets/profile-img.svg";

interface SidebarProp {
  pathname: string;
}
export default function Sidebar({ pathname }: SidebarProp) {
  const navigate = useNavigate();
  const filterIcon =
    "brightness(0) invert(1) sepia(0) saturate(0) hue-rotate(0deg)";
  const theme = useTheme();
  console.log({ path: pathname });
  const handleListItemClick = (index: number) => {
    navigate(`/profil${sideBarItem1[index].route}`);
  };
  return (
    <>
      <Stack
        sx={{
          border: "1px solid #C2C2C2",
          borderRadius: "8px",
          background: "#FFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Stack
          onClick={() => navigate("/profil")}
          direction={"row"}
          gap={4}
          justifyContent={"space-around"}
          alignItems={"center"}
          padding={"30px 26px 20px 26px"}
        >
          <Avatar
            alt="user-avatar"
            src={profileImg}
            sx={{
              width: "70px",
              height: "70px",
              "@media screen and (max-width: 600px)": {
                width: "50px",
                height: "50px",
              },
            }}
          />
          <Stack
            sx={{
              cursor: "pointer",
              // "@media screen and (max-width: 600px)": {
              //   display: "none",
              // },
            }}
          >
            <Typography variant="h6">Andre Huston</Typography>
            <Typography variant="body2" color={"#9E9E9E"}>
              informasi pribadi 16% lengkap
            </Typography>
          </Stack>
        </Stack>
        <Divider
          sx={{
            width: "100%",
            color: "#C2C2C2",
            margin: "10px 0",
            display: { xs: "none", sm: "flex" },
          }}
        />
        {sideBarItem1.map((data, index) =>
          index !== 2 ? (
            <Stack
              key={index}
              gap={2}
              direction={"row"}
              sx={{
                alignItems: "center",
                padding: "10px 45px",
                cursor: "pointer",
                width: "100%",
                backgroundColor: pathname.includes(
                  `/profil${sideBarItem1[index].route}`
                )
                  ? theme.palette.primary.main
                  : "transparent",
                display: { xs: "none", sm: "flex" },
              }}
              onClick={() => {
                handleListItemClick(index);
              }}
            >
              <img
                src={data.icon}
                alt=""
                width={"32px"}
                height={"32px"}
                style={{
                  filter: pathname.includes(
                    `/profil${sideBarItem1[index].route}`
                  )
                    ? filterIcon
                    : "none",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: pathname.includes(
                    `/profil${sideBarItem1[index].route}`
                  )
                    ? "#ffffff"
                    : "#505050",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "26px",
                  letterSpacing: "-0.15px",
                  "@media screen and (max-width: 600px)": {
                    display: "none",
                  },
                }}
              >
                {data.text}
              </Typography>
            </Stack>
          ) : (
            <>
              <Stack
                key={index}
                gap={2}
                direction={"row"}
                sx={{
                  alignItems: "center",
                  padding: "10px 45px",
                  cursor: "pointer",
                  width: "100%",
                  backgroundColor: pathname.includes(
                    `/profil${sideBarItem1[index].route}`
                  )
                    ? theme.palette.primary.main
                    : "transparent",
                  display: { xs: "none" },
                }}
                onClick={() => {
                  handleListItemClick(index);
                }}
              >
                <img
                  src={data.icon}
                  alt=""
                  width={"32px"}
                  height={"32px"}
                  style={{
                    filter: pathname.includes(
                      `/profil${sideBarItem1[index].route}`
                    )
                      ? filterIcon
                      : "none",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: pathname.includes(
                      `/profil${sideBarItem1[index].route}`
                    )
                      ? "#ffffff"
                      : "#505050",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "26px",
                    letterSpacing: "-0.15px",
                    "@media screen and (max-width: 600px)": {
                      display: "none",
                    },
                  }}
                >
                  {data.text}
                </Typography>
              </Stack>
              <Divider
                sx={{
                  width: "100%",
                  color: "#C2C2C2",
                  margin: "10px 0",
                  display: { xs: "none", sm: "flex" },
                }}
              />
            </>
          )
        )}
        <Divider
          sx={{
            width: "100%",
            color: "#C2C2C2",
            margin: "10px 0",
            display: { xs: "none", sm: "flex" },
          }}
        />
        <Stack
          gap={2}
          direction={"row"}
          sx={{
            alignItems: "center",
            padding: "10px 45px",
            cursor: "pointer",
            width: "100%",
            display: { xs: "none", sm: "flex" },
          }}
          onClick={() => {
            console.log("keluar");
          }}
        >
          <img src={exitItem.icon} alt="" width={"32px"} height={"32px"} />
          <Typography
            variant="body2"
            sx={{
              color: "#505050",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "26px",
              letterSpacing: "-0.15px",
              "@media screen and (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            {exitItem.text}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
