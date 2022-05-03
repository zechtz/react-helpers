import React, { FC, ReactNode } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles/createTheme";

import { makeStyles } from "@mui/styles";

import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme: Theme) => ({
  paper: { minWidth: "650px", width: "auto" },
  divider: { padding: 0 },
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    "& div": {
      color: "white",
    },
  },
  dialogWrapper: {
    padding: theme.spacing(0),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  icon: {
    cursor: "pointer",
  },
}));

interface DialgProps extends DialogProps {
  title: string;
  openDialog: boolean;
  setOpenDialog: Function;
  children: ReactNode;
}

const BaseDialog: FC<DialgProps> = (props) => {
  const { title, children, openDialog, setOpenDialog, ...otherProps } = props;
  const classes = useStyles();

  const dialogConfig = {
    ...otherProps,
  };

  return (
    <Dialog {...dialogConfig} open={openDialog}>
      <DialogTitle className={classes.root}>
        <Grid container>
          <Grid item>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title.toUpperCase()}
            </Typography>
          </Grid>
          <Grid item xs></Grid>
          <Grid item>
            <CloseIcon
              className={classes.icon}
              onClick={() => {
                setOpenDialog(false);
              }}
            />
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent dividers style={{ minHeight: "220px", height: "auto" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
