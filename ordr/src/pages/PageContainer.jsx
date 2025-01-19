import Grid from "@mui/material/Grid2"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewNavbar from "../components/NewNavbar";
import Customers from "./Customers";
import Dashboard from "./Dashboard";
import Dining from "./Dining";
import Hygiene from "./Hygiene";
import Offers from "./Offers";
import Requests from "./Requests";
import Users from "./Users";
import Payments from "./Payments";
import { Stack} from "@mui/material";

const PageContainer = () => {
    return(
            <Grid item>
                <Grid item size={4}>
                    <NewNavbar />
                </Grid>
                <Grid item size={8} >
                    <h1>hello</h1>
                </Grid>
            </Grid>
    )
}

export default PageContainer;