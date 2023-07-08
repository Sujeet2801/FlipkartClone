
import { Typography, Box, styled, Table, TableRow, TableCell} from "@mui/material";

import {LocalOffer as Badge} from '@mui/icons-material';

const Container = styled(Typography)`
    margin-left: 10px;
`;

const SmallText = styled(Box)`
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    & > td {
        font-size: 14px;
    }
`


const ProductDetail = ({product}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60* 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>
            <Container >{product.title.longTitle}</Container>
            <Container style={{marginTop: 5, color: '#878787', fontSize: 14}}>
                8 Ratings & 1 Reviews
                <Box component="span"> <img src={fassured} style={{width: 77, marginLeft: 20}} alt=""/></Box>
            </Container>
            <Container>
                <Box component="span" style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C'}}>{product.price.discount}off</Box>
            </Container>
            <Container>Available Offers</Container>
            <SmallText>
                <Container><StyledBadge/> Get extra 20% off upto Rs 50 on 1 irems</Container>
                <Container><StyledBadge/> Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced
                    between ₹15,000 to ₹39,999T&C</Container>
                <Container><StyledBadge/> Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced
                    between ₹40,000 to ₹49,999T&C</Container>
                <Container><StyledBadge/> Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of 
                    ₹50,000 and aboveT&C</Container>
                <Container><StyledBadge/> Combo OfferBuy 2 items save 5%; Buy 3 or more save 10%See all
                    productsT&C</Container>
                <Container><StyledBadge/> Buy More, Save MoreBuy worth ₹1000-1749 save ₹75 (Minimum 2 items); Buy worth
                    ₹1750 save ₹150 (Minimum 2 items)See all productsT&C</Container>

            </SmallText>
            <Table>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Seller</TableCell>
                    <TableCell >
                        <Box component="span" style={{color: '#2874f0'}}>SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} style={{width: 390}} alt="flipkartpoints"/>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </Table>
        </>
    )
}

export default ProductDetail;