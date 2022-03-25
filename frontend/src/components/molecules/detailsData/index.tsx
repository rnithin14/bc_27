import { Grid } from '@mui/material';
import * as React from 'react';
import Typography from '../../atoms/typography'
import backgroundImage from '../../../assets/images/background.svg'
import Image from '../../atoms/image'
import { styled } from '@mui/material/styles';
import theme, { EXTRA_COLORS } from '../../../theme'


type DetailsDataProps = {
    values: string[]
    valuesTag: string[]
    labelLine1: string
    labelLine2: string
};

const Wrapper = styled('div')(
    () => `
    position: relative;
  `,
);

const WrapperText = styled('div')(
    () => `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    `
)

const DetailsData = (props: DetailsDataProps) => {

    return (
        <Grid spacing="32px" container data-testid="DetailsData" direction="column" justifyContent="center" alignItems="center">
           {props.values.map((value,index) => (
                <Grid item>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Wrapper>
                                <Image src={backgroundImage} alt="css" />
                                <WrapperText>
                                    <Typography variant="heading" color={theme.palette.primary[600]}>
                                        {props.values[index]}
                                    </Typography>
                                </WrapperText>
                            </Wrapper>
                        </Grid>
                        <Grid item marginLeft="32px">
                            <Typography variant="h2" color={EXTRA_COLORS.orange}>
                                {props.valuesTag[index]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
            <Grid item marginTop="40px">
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h3">{props.labelLine1}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3">{props.labelLine2}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

};

export default DetailsData;