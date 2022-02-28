import React from "react";
import { Button, styled } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

const buttonColor = "#FF8200";
const buttonColorHover = "#CC6900";
const buttonTextColor = "#F9FBFF"

const RefreshButtonStyled = styled(Button)(() => ({
    color: buttonTextColor,
    backgroundColor: buttonColor,
    '&:hover': {
        backgroundColor: buttonColorHover,
    },
}));

interface IRefreshButtonProps {
    onClick: () => void
}

const RefreshButton = (props: IRefreshButtonProps) =>
(
    <>
        <RefreshButtonStyled onClick={() => props.onClick()} variant="contained" endIcon={<RefreshIcon />}>
            Refresh
        </RefreshButtonStyled>
    </>
)

export default RefreshButton;