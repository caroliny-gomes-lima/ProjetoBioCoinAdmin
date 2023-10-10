import React from "react";

import ptBr from "../../../config/texts/pt-br";

import { FormFull } from "form-full";
import { validations } from "../../../utils";
import Styles from "../EsqueceuSenhaStyles";
import { ButtonContained, ButtonText, InputEmail } from "../../../components";
interface PageProps {
  goBack: () => void;
  onSubmit: (data: any) => void;
  loading: boolean;
}
function StepEmail({ goBack, onSubmit, loading }: PageProps): JSX.Element {
  const texts = ptBr.forgetPassword;
  const [buttonDisabled, setButton] = React.useState(true);

  return (
    <FormFull onSubmit={onSubmit}>
      <Styles.Content>
        <Styles.Title>{texts.titleStepOne}</Styles.Title>
        <Styles.Subtitle> {texts.subTitle[0]}</Styles.Subtitle>
        <Styles.InputBox>
          <InputEmail
            name="email"
            label={texts.user}
            required={texts.userMessage}
            validation={validations.isEmailValid}
            onChange={() => {
              setButton(false);
            }}
          />
        </Styles.InputBox>
        <div>
          <ButtonContained
            name="continue"
            loading={loading}
            disabled={buttonDisabled || loading}
            feedback={true}
            action="submit"
            label={texts.continue[0]}
          />
          <ButtonText onClick={goBack}>{texts.onBack}</ButtonText>
        </div>
      </Styles.Content>
    </FormFull>
  );
}

export default StepEmail;
