import { Grid} from "@mui/material";
import image from '../images/mentor.jpeg'
import MainTitle from "../components/MainTitle";
import IconBlock from "../components/IconBlock";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
export default function MentorSection() {

    const titleStyle = {
        cfontFamily: 'Montserrat',
        fontSize: '3.125rem',
        fontWeight: 700,
        lineHeight: '3.8125rem',
        letterSpacing: '0.0625rem',
        textAlign: 'center',
        color:' #412B14',
        textTransform:'uppercase',
        margin:'3.75rem 0 1.25rem',
      }
      const nameStyle = {
        fontFamily: 'Montserrat',
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: '1.6875rem',
        letterSpacing: '0.0625rem',
        textAlign: 'left',
        color:'#212121'
      }

      const positionStyle = {
        fontFamily: 'Roboto',
        fontSize: '1.0625rem',
        fontWeight: 500,
        lineHeight: '1.5625rem',
        letterSpacing: 0,
        textAlign: 'left',
        color:'#777777',
        margin:0
      }

      const paragrfStyle = {
        fontFamily: 'Roboto',
        fontSize: '0.9375rem',
        fontWeight: 400,
        lineHeight: '1.5625rem',
        letterSpacing: 0,
        textAlign: 'center',
        color:'#444444',
        padding:'0.625rem 2.5rem',
      }

    return(
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center" sx={{height:'100vh', alignContent:{xs:'flex-start', sm:'center'}}}>
            <Grid container 
                spacing={0} 
                item xs={12} sm={11} md={10}
                direction='row'
                justifyContent="center"
                alignItems="center"
                alignContent='flex-start'
                sx={{boxShadow:' 0.3125rem 0.3125rem 0.25rem 0px #00000040', height:{xs:'100vh', sm:'auto'} }}>
                <Grid item xs={12} sm={6} md={6} >
                    <Card sx={{ height: '100%' }}>
                            <CardMedia
                                sx={{ height: {xs:'540px', sm:'640px', md:'700px'}}}
                                image={image}
                                title="Микола Кіпняк"
                            />
                     </Card>
                    {/* <img src={image} alt="Микола Кіпняк"  style={{width:'100%', maxHeight:'40rem', objectFit: 'cover'}}/> */}
                </Grid>
                <Grid container item xs={12} sm={6} md={6} 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{}}>
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