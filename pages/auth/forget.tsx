import AuthWrapper from '@/layout/AuthWrapper/AuthWrapperComponent';
import CustomButton from "@/ui/Buttons/CustomButton";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import { Grid, Typography } from "@mui/material";
const ForgetPassword = () => {
    return ( 
        <AuthWrapper>
   
            <form>
              <Grid container spacing={2}>
                
                
                <Grid item xs={12}>
                  <Typography className="auth_Title" variant="h4">
                     Email
                  </Typography>
                  <InputFieldCommon placeholder="Enter Email" type="email" />
                </Grid>
                    
                <Grid item xs={12}>
                  <CustomButton type="submit" color="primary" fullWidth>
                    <Typography variant="caption">Request Otp</Typography>
                  </CustomButton>
                </Grid>
              </Grid>
            </form>

      </AuthWrapper>
     );
}
 
export default ForgetPassword;