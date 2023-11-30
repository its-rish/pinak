import assest from "@/json/assest";
import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
export const AuthWrapperStyled = styled(Box)`
  background: var(--white);
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .authLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    img {
      width: 70%;
    }
  }
  .authRight {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }
`;
export interface AuthWrpperPorps {
  children: JSX.Element | JSX.Element[];
}
function AuthWrapperComponent({ children }: AuthWrpperPorps) {
  return (
    <AuthWrapperStyled>
      <Container fixed>
        <Grid container spacing={10}>
          <Grid lg={7} xs={12}>
            <Box className="authLeft">
              <Image
              width={300}
              height={500}
                src={assest.phone}
                alt="phone"
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

export default AuthWrapperComponent;





