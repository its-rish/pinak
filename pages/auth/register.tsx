import AuthWrapperComponent from "@/layout/AuthWrapper/AuthWrapperComponent";
import CostomInput from "@/ui/Inputs/CustomInput";
import { Container } from "@mui/material";


const RegisterPage = () => {
    return (
        <AuthWrapperComponent>
            <Container>
                <CostomInput placeholder="Enter Email"  helperText="abc@email.com" type="email"/>
                <CostomInput placeholder="First name" helperText="abc" type="text"/>
                <CostomInput placeholder="Last name" helperText="cba" type="text"/>
                <CostomInput placeholder="Password" helperText="*******" type="password"/>
            </Container>
        </AuthWrapperComponent>
    );
};

export default RegisterPage;