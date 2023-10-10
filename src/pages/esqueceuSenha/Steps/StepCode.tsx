import React from "react";

import ptBr from "../../../config/texts/pt-br";

import { ButtonContained, ButtonText } from "../../../components";
import Styles from "../EsqueceuSenhaStyles";
import { FormFull } from "form-full";
import { hooks } from "../../../utils";

import fonts from "../../../config/fonts";
import ReactCodeInput from "react-code-input";
import { Spacing, Theme } from "../../../config";
import { FontStyles } from "../../../components";

interface PageProps {
  goBack: () => void;
  onSubmit: (data: any) => void;
  loadingOut: () => void;
  sendCode?: () => void;
}

function StepCode({ onSubmit, goBack, loadingOut, sendCode }) {
  const texts = ptBr.forgetPassword;

  const [ref, setRef] = React.useState<any>(null);

  const inputRef = React.useRef<any>();
  const [value, setValue] = React.useState("");

  const { loading, call } = hooks.useRequest();

  const sendTokenData = () => {
    if (inputRef?.current) {
      const code = inputRef.current.state.value;
      onSubmit({ code: code });
    }
  };

  return (
    <FormFull formRef={setRef} onSubmit={() => {}}>
      <Styles.Content>
        <Styles.Title>{texts.titleStepTwo}</Styles.Title>
        <Styles.Subtitle> {texts.subTitle[1]}</Styles.Subtitle>
        <div>
          <Styles.LabelContainer>
            <Styles.Subtitle>CÓDIGO:</Styles.Subtitle>
          </Styles.LabelContainer>
          <Styles.MarginBottom center>
            <ReactCodeInput
              inputStyle={{
                fontFamily: FontStyles.medium12.fontSize,
                margin: "4px",
                MozAppearance: "textfield",
                width: "56px",

                height: "50px",
                textAlign: "center",
                fontSize: "22px",
                color: "#6A6A6A",
                border: "1px solid #626366",
                borderRadius: Spacing(0.8),
              }}
              onChange={(a) => {
                setValue(a);
              }}
              value={value}
              ref={inputRef}
              forceUppercase
              type="text"
              fields={5}
              name={"code"}
              inputMode={"numeric"}
            />
          </Styles.MarginBottom>
        </div>

        <div>
          <ButtonContained
            name="continue"
            loading={loading || loadingOut}
            feedback={true}
            disabled={loading || value.length < 5 ? true : false}
            onClick={() => sendTokenData()}
            label={texts.continue[1]}
          />
          <ButtonText onClick={() => goBack()}>{texts.onBack}</ButtonText>
        </div>
      </Styles.Content>
    </FormFull>
  );
}

export default StepCode;
