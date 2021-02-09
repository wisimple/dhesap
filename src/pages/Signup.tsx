import SignupForm from "components/user/SignupForm";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-column justify-center items-center" style={{ height: "100vh" }}>
      <div className="logo logo--bg">dhesap</div>
      <p style={{ margin: "2rem 0" }}>{t("startUsingNow")}</p>
      <SignupForm />
    </div>
  );
};

export default Signup;
