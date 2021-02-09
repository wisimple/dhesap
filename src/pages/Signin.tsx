import SigninForm from "components/user/SigninForm";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-column justify-center items-center" style={{ height: "100vh" }}>
      <div className="logo logo--bg" style={{ marginBottom: "3rem" }}>
        dhesap
      </div>
      <SigninForm />
    </div>
  );
};

export default Signup;
