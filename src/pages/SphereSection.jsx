import { Grid } from "@mui/material";
import sphereImg from '../images/spheres.PNG';

export default function SphereSection() {
    const style = {
        direction:"row",
        justifyContent:"center",
        alignItems:"center",
        height:'100vh', 
        maxHeight:'980px',
        backgroundColor:'rgb(69,42,15)', 
        display:{ md: 'none', xs: 'flex' }
    }

    const imageStyle = {
        backgroundImage:`url(${sphereImg})`, 
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', 
        height:'100%', 
        backgroundPosition:'center'
    }
    return(
        <Grid container sx={style}>
            <Grid item xs={12} sx={imageStyle}>
            </Grid>
        </Grid>
    )
}