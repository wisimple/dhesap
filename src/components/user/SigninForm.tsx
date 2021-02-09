import FacebookIcon from "@material-ui/icons/Facebook";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signin } from "store/auth/actions";

import { useTranslation } from "react-i18next";
import { RootState } from "store";
import Button from "components/common/inputs/Button";

import Error from "@material-ui/icons/Error";
import { Link } from "react-router-dom";

interface Props extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const SigninForm = ({ ...rest }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => state.authState);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <form className="form" onSubmit={handleSubmit} {...rest}>
      <div className="form__group">
        <input
          type="email"
          className="input"
          id="email"
          placeholder={t("inputs.yourEmailAddress")}
          value={email}
          onChange={({ target }) => setemail(target.value)}
          required
        />
      </div>
      <div className="form__group">
        <input
          type="password"
          className="input"
          id="password"
          placeholder={t("inputs.password")}
          value={password}
          onChange={({ target }) => setpassword(target.value)}
          required
        />
      </div>
      {error && (
        <div className="form__group">
          <div className="alert alert--red">
            <Error className="mr-1" /> {error}
          </div>
        </div>
      )}
      <div className="form__group">
        <Button loading={loading} type="submit" block>
          {t("auth.signin")}
        </Button>
      </div>
      <div className="form__group" style={{ textAlign: "center" }}>
        {t("dontYouHaveAccount")}{" "}
        <Link to="/signup" className="link">
          {t("auth.signup")}
        </Link>
      </div>
    </form>
  );
};

export default SigninForm;
