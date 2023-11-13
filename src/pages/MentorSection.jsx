import { Grid} from "@mui/material";
import image from '../images/mentor.jpeg'
import MainTitle from "../components/MainTitle";
import IconBlock from "../components/IconBlock";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {titleStyle, titleStyle2, nameStyle, positionStyle, paragrfStyle, shadowContainerStyle, gridTitleStyle} from './style'

export default function MentorSection() {

    return(
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center" sx={{height:'100vh', alignContent:{xs:'flex-start', sm:'center'}}}>
            <Grid container 
                spacing={0} 
                item xs={12} sm={11} md={10}
                sx={shadowContainerStyle}>
                <Grid item xs={12} sm={6} md={6} position='relative' alignContent='flex-start'>
                    <Card sx={{ height: '100%' }}>
                            <CardMedia
                                sx={{ height: {xs:'400px', sm:'640px', md:'650px'}}}
                                image={image}
                                title="Микола Кіпняк"
                            />
                     </Card>
                     <Grid item sx={gridTitleStyle}>
                            <MainTitle 
                                text={'Ментор'}
                                sx={titleStyle2}
                                />
                        </Grid>
                </Grid>
                <Grid container item xs={12} sm={6} md={6} 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                   >
                    <Grid container item  direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item sx={{display:{ sm: 'block', xs: 'none' }}}>
                            <MainTitle 
                                text={'Ментор'}
                                sx={titleStyle}
                                />
                        </Grid>
                        <h3 style={nameStyle}>Микола Кіпняк</h3>
                        <p style={positionStyle}>Senior Full-stack engineer</p>
                        <p style={paragrfStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </Grid>
                    <Grid container item xs={10} 
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                            <IconBlock/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}