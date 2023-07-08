
import { Fragment } from "react";
import { useEffect } from "react";

//component
import NavBar from "./Nav";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";

import {Box, styled} from '@mui/material';


import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 10px 10px;
    background: #f2f2f2
`;

// const Home = () => {

//     const {products} = useSelector(state => state.getProducts)

//     const dispatch = useDispatch();

//     useEffect(()=> {
//         dispatch(getProducts())
//     }, [dispatch])

//     return(
//         <Fragment>
//             <NavBar/>
//             <Component>
//                 <Banner/>
//                 <MidSlide products={products} title = "Deal of the Day" timer={true}/>
//                  <Slide products={products} title = "Discount for You" timer={false}/>
//                 <Slide products={products} title = "Suggesting Items" timer={false}/>
//                 <Slide products={products} title = "Top Selection" timer={false}/>
//                 <Slide products={products} title = "Recommended Items" timer={false}/> 
//             </Component>
//         </Fragment>
//     )
// }

const Home = () => {

    const {products} = useSelector(state => state.getProducts)

    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    return (
        <Fragment>
            <NavBar/>
            <Component>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <Slide products={products} title="Discounts for you" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended" timer={false}/>
            </Component>
        </Fragment>
    )
}

export default Home;