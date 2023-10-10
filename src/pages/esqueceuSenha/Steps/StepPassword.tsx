import React from "react";

import ptBr from "../../../config/texts/pt-br";

import {
  ButtonContained,
  ButtonText,
  InputPassword,
} from "../../../components";
import Styles from "../EsqueceuSenhaStyles";
import { FormFull } from "form-full";

function StepPassword({ onSubmit, goBack, loading }) {
  const texts = ptBr.forgetPassword;

  const [buttonDisabled, setButton] = React.useState(true);
  const [error, setError] = React.useState(false);
  const validatePassword = (data) => {
    if (data.newPassword === data.confirmNewPassword) {
      setError(false);
      onSubmit({ password: data.confirmNewPassword });
    } else {
      setError(true);
    }
  };
  return (
    <FormFull onSubmit={validatePassword}>
      <Styles.Content>
        <Styles.Title>{texts.titleStepTree}</Styles.Title>
        <Styles.Subtitle> {texts.subTitle[2]}</Styles.Subtitle>
        <Styles.InputBox>
          <InputPassword
            name="newPassword"
            label={texts.password}
            required={texts.passwordMessage}
            onChange={() => {
              setButton(false);
              setError(false);
            }}
          />
          <InputPassword
            name="confirmNewPassword"
            label={"CONFIRMAR SENHA"}
            required={texts.passwordMessage}
            onChange={() => {
              setButton(false);
              setError(false);
            }}
          />
          {error && (
            <Styles.ErrorMessage>
              As senhas não correspondem.
            </Styles.ErrorMessage>
          )}
        </Styles.InputBox>
        <ButtonContained
          loading={loading}
          disabled={buttonDisabled || loading}
          feedback={true}
          action="submit"
          label={texts.continue[2]}
        />
        <ButtonText onClick={() => goBack()}>{texts.cancel}</ButtonText>
      </Styles.Content>
    </FormFull>
  );
}

export default StepPassword;
