import AuthWrapper from '@/layout/AuthWrapper/AuthWrapperComponent';
import CustomButton from '@/ui/Buttons/CustomButton';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
const OtpScreen = () => {
    return ( 
        <AuthWrapper>
   
            <Box className="otpWrapper">
            <form>
              <Grid container columnSpacing={2} rowSpacing={5}>
                
                
                <Grid item xs={3}>
                  
                  <InputFieldCommon  type="number" />
                </Grid>
                <Grid item xs={3}>
                 
                  <InputFieldCommon  type="number" />
                </Grid>
                <Grid item xs={3}>
                 <InputFieldCommon  type="number" />
               </Grid>
               <Grid item xs={3}>
                 <InputFieldCommon  type="number" />
               </Grid>
                    
                <Grid item xs={12}>
                  <CustomButton type="submit" color="primary" fullWidth>
                    <Typography variant="caption">Submit Otp</Typography>
                  </CustomButton>
                </Grid>
              </Grid>
            </form>
            </Box>

      </AuthWrapper>
     );
}
 
export default OtpScreen;