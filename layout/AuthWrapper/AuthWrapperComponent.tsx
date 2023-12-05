import assest from "@/json/assest";
import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

export const AuthWrapperStyled = styled(Box)`
  height: 100vh;
  .authSectionWrap {
    align-items: center;
    height: 100vh;
    .authLeft {
      figure {
        width: 400px;
        height: auto;
        line-height: 0;
        font-size: 0;
        margin-left: auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .authRight {
    }
  }
  .auth_Title {
    font-size: 16px;
    font-weight: 600px;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  .otpWrapper{
    max-width: 380px;
    width: 100%;
    margin-left: auto;
  }
`;
export interface AuthWrpperPorps {
  children: JSX.Element | JSX.Element[];
}
function AuthWrapperComponent({ children }: AuthWrpperPorps) {
  return (
    <AuthWrapperStyled>
      <Container fixed>
        <Grid
          container
          columnSpacing={4}
          rowSpacing={3}
          className="authSectionWrap"
        >
          <Grid item md={6} xs={12}>
            <Box className="authLeft">
              <figure>
                <Image
                  width={384}
                  height={524}
                  src={assest.phone}
                  alt="phone"
                />
              </figure>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="authRight">{children}</Box>
          </Grid>
        </Grid>
      </Container>
    </AuthWrapperStyled>
  );
}

export default AuthWrapperComponent;
