import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ptBr from "../../config/texts/pt-br";
import {
  ButtonContained,
  CustomText,
  InputEmail,
  InputPassword,
} from "../../components/index";
import Styles from "./LoginStyles";
import { FormFull } from "form-full";
import { validations } from "../../utils";
import { hooks, SessionStorage } from "../../utils";
import { StorageContext } from "../../contexts/StorageContext";

import { api } from "../../services";
import { paths } from "../../navigation/navigate";

function Login() {
  const texts = ptBr.login;

  const navigate = useNavigate();
  const { loading, call } = hooks.useRequest();
  const { addData, setIsLogged } = useContext<any>(StorageContext);
  const Submit = async (data) => {
    call(null, api.getToken(data), (response) => {
      if (response.ok) {
        setIsLogged(true);
        addData("userData", response?.data?.username);
        SessionStorage.setItem(
          "token",
          response?.data?.type + " " + response?.data?.token
        );
      }
    });
  };

  const [buttonDisabled, setButton] = React.useState(true);

  return (
    <Styles.ImageBG>
      <FormFull onSubmit={Submit}>
        <Styles.Content>
          <Styles.Header></Styles.Header>
          <Styles.Title>{texts.title}</Styles.Title>

          <InputEmail
            name="username"
            label={texts.user}
            required={texts.userMessage}
            validation={validations.isEmailValid}
            placeholder="email@ctg.com.br"
          />
          <InputPassword
            name="password"
            label={texts.password}
            required={texts.passwordMessage}
            validation={validations.isPassword}
            onChange={() => {
              setButton(false);
            }}
            placeholder="Digite sua senha"
          />

          <Styles.ButtonContainer>
            <Styles.ForgotPasswordButton
              onClick={() => navigate(paths.forgetPassword)}
            >
              {texts.forgotPass}
            </Styles.ForgotPasswordButton>
          </Styles.ButtonContainer>
          <ButtonContained
            name="submit"
            loading={loading}
            disabled={buttonDisabled}
            feedback={true}
            action="submit"
            type="submit"
            label={texts.enter}
          />
          <CustomText>
            {process.env.REACT_APP_ENV + " v"}
            {process.env.REACT_APP_VERSION}
          </CustomText>
        </Styles.Content>
      </FormFull>
    </Styles.ImageBG>
  );
}

export default Login;
