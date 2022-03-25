import { Grid } from "@mui/material";
import React from "react";
import Image from "../../atoms/image"
import Typography from "../../atoms/typography"
import theme from "../../../theme"

type DetailsImageProps = {
    imageCaptionLine1: string
    imageCaptionLine2: string
    image: any
};

const DetailsImage = (props: DetailsImageProps) => {

    return (
        <Grid container data-testid="DetailsImage" direction="column" justifyContent="center" alignItems="center">           
            <Grid item>
                <Image src={props.image} alt="Image" />
            </Grid>
            <Grid item marginTop="40px">
                <Typography variant="h3" color={theme.palette.text.primary}>
                    {props.imageCaptionLine1} 
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h3" color={theme.palette.text.primary}>
                    {props.imageCaptionLine2}
                </Typography>
            </Grid>
        </Grid>
    );
};
export default DetailsImage;
