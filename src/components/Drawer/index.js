import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextField from "@mui/material/TextField";
import Video from "../../pages/Video";
import { getLinks } from "../../api/index";
import Modal from "../../pages/Modal";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import FullScreen from "../../pages/Video/fullScreen/FullScreen";

const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  .item {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  // api
  const [links, setLinks] = useState([]);

  const getAllLinks = async () => {
    const data = await getLinks();
    console.log(data);
    setLinks(data);
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  const { id } = useParams();

  // api
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const myFunction = (body) => {
    console.log(body);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", gap: "5px" }}>
        <MenuIcon sx={{ mr: 3 }} />
        <YouTubeIcon sx={{ color: "red" }} />
        <Typography
          sx={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: "bold",
          }}
        >
          YouTube
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          "Dashboard",
          "Videos",
          "Analytics",
          "Comments",
          "Transcriptions",
          "Other",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ fontSize: "5px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Settings", "What's new", "Send feedback"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ fontSize: "5px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {links?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.subscribe ? (
              <ListItemButton>
                <ListItemIcon>
                  <Img sx={{ width: "40" }} src={item.imgUrl} alt="" />
                </ListItemIcon>
                <ListItemText
                  primary={item.channelName}
                  sx={{ fontSize: "5px" }}
                />
              </ListItemButton>
            ) : (
              ""
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ background: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Searching"
              variant="outlined"
              sx={{
                width: "40%",
                border: "none",
                outline: "none",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* <Container>
          {links?.map((item, index) => {
            return (
              <div
                key={index}
                className="item"
                onClick={() => {
                  myFunction(item);
                }}
              >
                <Video title={item.title} link={item.link} />
              </div>
            );
          })}
        </Container> */}

        <Container>
          {links?.map((item, index) => {
            return (
              <Link to={`full/${item.id}`}>
                <div
                  key={index}
                  className="item"
                  onClick={() => {
                    myFunction(item);
                  }}
                >
                  <Video link={item.link} title={item.title} />
                  {/* <FullScreen link={item.link} title={item.title} /> */}
                </div>
              </Link>
            );
          })}
        </Container>

        {/* <Container>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
          <div className="item">
            <Video title={links.title} link={links.link} />
          </div>
        </Container> */}
      </Box>
    </Box>
  );
}
