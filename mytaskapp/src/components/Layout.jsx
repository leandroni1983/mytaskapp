import React from 'react';
import { styled } from '@mui/system';
const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}


const Container = styled("div")({
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2c2b4b"
})


export default Layout;
