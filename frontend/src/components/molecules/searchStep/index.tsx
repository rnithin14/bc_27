import React from "react";
import Avatar from "../../atoms/avatar/index";
import TypographyTag from "../../atoms/typography/index";
import Grid from "@mui/material/Grid";
import Icon from "../../atoms/icon/index";
interface SearchStepProps {
  heading: string;
  status: string;
  sx?: any;
  number?: number;
  icon?: any;
}

const searchStep = ({ heading, status, number, icon }: SearchStepProps) => {
  return (
    <Grid container direction="row" alignItems="baseline" spacing={2}>
      <Grid item>
        {status === "done" && (
          <Avatar
            data-testid="done"
            children={<Icon src={icon} />}
            sx={{ bgcolor: "primary.300" }}
          ></Avatar>
        )}

        {status === "current" && (
          <Avatar
            data-testid="current"
            children={number}
            sx={{ bgcolor: "primary.300" }}
          ></Avatar>
        )}

        {status === "notdone" && (
          <Avatar
            data-testid="notdone"
            children={number}
            sx={{ color: "background.paper", bgcolor: "grey.100" }}
          ></Avatar>
        )}
      </Grid>

      <Grid item>
        {status === "notdone" && (
          <TypographyTag variant="subtitle1" children={heading} />
        )}
        {status !== "notdone" && (
          <TypographyTag
            sx={{ color: "primary.300" }}
            variant="subtitle1"
            children={heading}
          />
        )}
      </Grid>
    </Grid>
  );
};
export default searchStep;
