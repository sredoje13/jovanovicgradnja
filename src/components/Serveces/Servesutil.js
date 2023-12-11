import React from "react";
import { actions } from "../redux/reduxstore";
import { styles } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Servesutil(props) {
  const classes = styles();
  const windowwidth = useSelector((state) => state.mainstore.windowwidth);
  const serverindex = useSelector((State) => State.mainstore.serverindex);
  const dispatch = useDispatch();

  const allservescolumn = props.allserves.map((item, i) => (
    <ListItem
      key={i}
      className={classes.list}
      onClick={() => {
        dispatch(actions.choseserverindex(i));
        windowwidth < 960 && props.scroll();
      }}
      sx={{
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))",
      }}
    >
      <ListItemButton>
        {serverindex === i && (
          <ListItemIcon sx={{ minWidth: windowwidth > 500 ? "16px" : "5px" }}>
            <ArrowForwardIosIcon
              sx={{ width: windowwidth > 350 ? "25px" : "15px" }}
            />
          </ListItemIcon>
        )}
        <ListItemText
          primaryTypographyProps={{
            fontSize: windowwidth > 500 ? "16px" : "10px",
          }}
          className={classes.root}
          primary={item.name.toUpperCase()}
        />
      </ListItemButton>
    </ListItem>
  ));
  return <List className={classes.listitem}>{allservescolumn}</List>;
}

export default Servesutil;
