import AuthWrapperComponent from "@/layout/AuthWrapper/AuthWrapperComponent";
import CustomButton from "@/ui/Buttons/CustomButton";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import { Container, Grid, Typography } from "@mui/material";

const RegisterPage = () => {
  return (
    <AuthWrapperComponent>
      <Container>
        {/* <CostomInput placeholder="Enter Email"  helperText="abc@email.com" type="email"/>
                <CostomInput placeholder="First name" helperText="abc" type="text"/>
                <CostomInput placeholder="Last name" helperText="cba" type="text"/>
                <CostomInput placeholder="Password" helperText="*******" type="password"/> */}
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
                First Name
              </Typography>
              <InputFieldCommon placeholder="Last Name" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Typography className="auth_Title" variant="h4">
                First Name
              </Typography>
              <InputFieldCommon placeholder="Enter Email" type="email" />
            </Grid>

            <Grid item xs={12}>
              <Typography className="auth_Title" variant="h4">
                First Name
              </Typography>
              <InputFieldCommon
                placeholder="Password"
                type="password"
                isPassword
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className="auth_Title" variant="h4">
                First Name
              </Typography>
              <InputFieldCommon
                placeholder="Confirm Password"
                type="password"
                isPassword
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton type="submit" color="primary">
                <Typography variant="caption">Submit</Typography>
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </AuthWrapperComponent>
  );
};

export default RegisterPage;
