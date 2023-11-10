import { Grid} from "@mui/material";
import image from '../images/mentor.jpeg'
import MainTitle from "../components/MainTitle";
import {Button} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGooglePlusG, faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';




export default function MentorSection() {
    
    const titleStyle = {
        cfontFamily: 'Montserrat',
        fontSize: '50px',
        fontWeight: 700,
        lineHeight: '61px',
        letterSpacing: '1px',
        textAlign: 'center',
        color:' #412B14',
        textTransform:'uppercase'
      }

    return(
        <Grid container direction="row"
        justifyContent="center"
        alignItems="center">
            <Grid container spacing={0} item xs={10} direction="row"
  justifyContent="center"
  alignItems="center" sx={{boxShadow:' 5px 5px 4px 0px #00000040', margin:'60px 0'}}>
                <Grid item xs={10} md={6} >
                    <img src={image} alt=""  style={{width:'100%'}}/>
                </Grid>
                <Grid container item xs={10} md={6} irection="column"
  justifyContent="center"
  alignItems="center">
                    <Grid container item xs={10} direction="column"
  justifyContent="center"
  alignItems="center">
                        <MainTitle 
                            text={'Ментор'}
                            sx={titleStyle}
                            />
                        <h3>Микола Кіпняк</h3>
                        <p>Senior Full-stack engineer</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        
                        <Grid container item>
                         
                            <FontAwesomeIcon icon={faGooglePlusG} />
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#080808",}} />
                            {/* <FontAwesomeIcon icon={faYoutube} /> */}
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}