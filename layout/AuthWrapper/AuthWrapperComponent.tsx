import assest from "@/json/assest";
import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

export const AuthWrapperStyled = styled(Box)``;
export interface AuthWrpperPorps {
  children: JSX.Element | JSX.Element[];
}

function AuthWrapper({ children }: AuthWrpperPorps) {
  return (
    <AuthWrapperStyled>
      <Container fixed>
        <Grid container spacing={10}>
          <Grid lg={7} xs={12}>
            <Box className="authLeft">
              <Image
                alt="Image"
                width={459}
                height={200}
                src={assest.logo_img}
              />
            </Box>
          </Grid>
          <Grid lg={5} xs={12}>
            <Box className="authRight">{children}</Box>
          </Grid>
        </Grid>
      </Container>
    </AuthWrapperStyled>
  );
}

export default AuthWrapper;
