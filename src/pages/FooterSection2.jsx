import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Box, ThemeProvider } from '@mui/system';
import { Grid } from '@mui/material';

export default function FooterSection2() {
    const boxStyle = {
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: 0,
        boxShadow: '0px 0.125rem 0.25rem 0px #00000033',
        bgcolor: 'primary.main',
        '&:hover': {
            bgcolor: 'primary.dark',
            },  
        display:"flex", 
        alignItems:"center", 
        justifyContent:'center',
        m:'0.3rem',
    }
    const textStyle ={
        fontFamily: 'Roboto',
        fontSize: '17px',
        fontWeight: 400,
        lineHeight: '25px',
        textAlign: 'left',
        color:'#999999'
    }

    const iconItems = [
        {item:faFacebookF, link:'https://mui.com/'},
        {item:faTwitter, link:'https://mui.com/'},
        {item:faGooglePlusG, link:'https://mui.com/'},
        {item:faLinkedinIn, link:'https://mui.com/'},
        {item:faYoutube, link:'https://mui.com/'},
    ]

    return(
        <Grid container direction='flex' justifyContent='center' alignContent='center' xs={12} sx={{backgroundColor:'#1D2023', height:'150px'}}>
            <Grid container item xs={12} direction='row' justifyContent='center'>
                <ThemeProvider
                    theme={{
                        palette: {
                            primary: {
                                main: '#444444',
                                dark: '#999999',
                            },
                        },
                    }}>
                        {iconItems.map((icon, index) => (
                                <a key={index} href={icon.link}>
                                    <Box key={index} sx={boxStyle}>
                                        <FontAwesomeIcon icon={icon.item} style={{color: "white",}}/>
                                    </Box>
                                </a>
                        ))}
                </ThemeProvider>
            </Grid>
            <p style={textStyle}>© Copyright Institute-of-it 2023</p>
        </Grid>
    )
}