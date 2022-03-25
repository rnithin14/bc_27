import React from 'react';
import { Grid } from '@mui/material';
import SearchStep from '../../molecules/searchStep';
import tick from "../../../assets/icons/tick.svg";

type SearchStepperHeaderProps = {
    currentPage: number;
    stepperHeadings: string[]
};


const SearchStepperHeader = ({ currentPage, stepperHeadings }: SearchStepperHeaderProps) => {

    return(
        <Grid container marginTop="56px">
            {stepperHeadings.map((heading, index) => (
                <Grid item marginRight="32px">
                    {currentPage < index+1 &&
                        <SearchStep heading={heading} status = "notdone" number={index+1} icon={tick} />}
                    {currentPage === index+1 &&
                        <SearchStep heading={heading} status = "current" number={index+1} icon={tick} />}
                    {currentPage > index+1 &&
                        <SearchStep heading={heading} status = "done" number={index+1} icon={tick} />}
                </Grid>
            ))}
        </Grid>
    );
}

export default SearchStepperHeader;