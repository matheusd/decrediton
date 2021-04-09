import { useDex } from "./hooks";
import { PassphraseModalButton } from "buttons";
import { StandaloneHeader } from "layout";
import { FormattedMessage as T } from "react-intl";
import { DEX_ICON } from "constants";

export const LoginPageContent = () => {
  const { onLoginDex, loginAttempt } = useDex();

  return (
    <PassphraseModalButton
      disabled={loginAttempt}
      passphraseLabel={<T id="dex.loginDexPassphrase" m="DEX Passphrase" />}
      modalTitle={<T id="dex.loginPassphrase" m="Enter DEX Passphrase" />}
      loading={loginAttempt}
      onSubmit={onLoginDex}
      buttonLabel={<T id="dex.loginPassphraseButton" m="Login" />}
    />
  );
};

export const LoginPageHeader = () => (
  <StandaloneHeader
    title={<T id="dex.loginPage.title" m="DEX Login" />}
    description={
      <T id="dex.loginPage.description" m={"Login and connect wallet to Dex"} />
    }
    iconType={DEX_ICON}
  />
);