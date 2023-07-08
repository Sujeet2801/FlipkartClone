
import { Box, Typography } from "@mui/material";
import { navData } from "../../Constants/data";
import styled from "@emotion/styled";

const Component = styled(Box)(({theme})=> ({
    display: 'flex',
    margin: '0 21px 0 12px',
    justifyContent: 'space-between',
    background: '#fff',
    // [theme.breakpoints.down('lg')]: {
    //     margin: 0
    // }
}));

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
     font-size: 14px;
     font-weight: 600;
     font-family: inherit;
`

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(data => (
                    <Container>
                        <img src={data.url} alt="nav" style={{width: 64}}  />    
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NavBar;