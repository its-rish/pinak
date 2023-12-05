import AuthWrapperComponent from "@/layout/AuthWrapper/AuthWrapperComponent";
import CustomButton from "@/ui/Buttons/CustomButton";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import { Container, Grid, Typography } from "@mui/material";

const RegisterPage = () => {
  return (
    <AuthWrapperComponent>
      
        <form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className="auth_Title" variant="h4">
                First Name
              </Typography>
              <InputFieldCommon placeholder=" First Name" type="text" />
            </Grid>
            <Grid item xs={6}>
              <Typography className="auth_Title" variant="h4">
                Last Name
              </Typography>
              <InputFieldCommon placeholder="Last Name" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Typography className="auth_Title" variant="h4">
                 Email
              </Typography>
              <InputFieldCommon placeholder="Enter Email" type="email" />
            </Grid>

            <Grid item xs={12}>
              <Typography className="auth_Title" variant="h4">
                Password
              </Typography>
              <InputFieldCommon
                placeholder="Password"
                type="password"
                isPassword
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className="auth_Title" variant="h4">
                Confirm Password
              </Typography>
              <InputFieldCommon
                placeholder="Confirm Password"
                type="password"
                isPassword
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton type="submit" color="primary" fullWidth>
                <Typography variant="caption">Register</Typography>
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      
    </AuthWrapperComponent>
  );
};

export default RegisterPage;
