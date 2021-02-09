import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Icon from "@material-ui/core/Icon";

const specs = [
  {
    title: "Gelir Gider Yönetimi",
    icon: "attach_money",
    descs: ["Gelir ve giderlerinizi kategorize edin", "Raporları görüntüleyin"],
  },
  {
    title: "Cari Hesap Yönetimi",
    icon: "business",
    descs: ["Gelir ve giderlerinizi kategorize edin", "Raporları görüntüleyin"],
  },
  {
    title: "Aylık Raporlama",
    icon: "leaderboard",
    descs: ["Gelir ve giderlerinizi kategorize edin", "Raporları görüntüleyin"],
  },
];

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav
        className="flex j-space-between p-2"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
        }}
      >
        <Link to="/" className="logo logo--md">
          dhesap
        </Link>
        <Link to="/signin" className="button button--md button--rounded button--white--outlined">
          <Icon className="mr-1">login</Icon> Giris Yap
        </Link>
      </nav>
      <header className="header">
        <div className="heading text-white">
          <h1 className="heading-1">Paranızı</h1>
          <h2 className="heading-2">kolayca yönetin</h2>
        </div>
        <Link to="/signup" className="button button--white--outlined button--rounded">
          Kullanmaya Başla
        </Link>
      </header>
      <section className="section-intro"></section>
      <footer className="footer"></footer>
    </>
  );
};

export default Welcome;
