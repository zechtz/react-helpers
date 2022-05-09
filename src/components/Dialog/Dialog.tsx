import React, { FC, ReactNode } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles(() => ({
  paper: { minWidth: "650px", width: "auto" },
  divider: { padding: 0 },
  root: {
    padding: useTheme().spacing(2),
    backgroundColor: useTheme().palette.primary.main,
    "& div": {
      color: "white",
    },
  },
  dialogWrapper: {
    padding: useTheme().spacing(0),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  icon: {
    cursor: "pointer",
  },
}));

export interface Props extends DialogProps {
  title: string;
  isOpen: boolean;
  onCancel: Function;
  children: ReactNode;
}

const BaseDialog: FC<Props> = ({
  title,
  children,
  isOpen,
  onCancel,
  ...otherProps
}) => {
  const classes = useStyles();

  const dialogConfig = {
    isOpen,
    ...otherProps,
  };

  return (
    <Dialog {...dialogConfig}>
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
                onCancel(false);
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

BaseDialog.defaultProps = {
  isOpen: false,
};

BaseDialog.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default BaseDialog;
