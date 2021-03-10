import Button from "components/common/inputs/Button";
import { useEffect, useState } from "react";
import Check from "@material-ui/icons/Check";
import ScrollableSelect from "components/common/inputs/ScrollableSelect";
import { useDispatch, useSelector } from "react-redux";
import { ITransaction, ITransactionCrudDto } from "models/Transaction";
import Avatar from "components/common/Avatar";

import { RootState } from "store";
import { createTransaction, deleteTransaction, updateTransaction } from "store/transaction/actions";
import { getAllAccounts } from "store/account/actions";
import { getAllCategories } from "store/category/actions";
import ScrollableSelectMulti from "components/common/inputs/ScrollableSelectMulti";
import Icon from "@material-ui/core/Icon";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MoneyText from "components/common/MoneyText";

interface Props {
  data?: ITransaction;
  loading?: boolean;
  onSubmitEnd?: () => void;
}

const TransactionForm = ({ data, loading, onSubmitEnd = () => {} }: Props) => {
  const { t } = useTranslation();
  const [isPositive, setisPositive] = useState(false);
  const [accountIndex, setaccountIndex] = useState(0);
  const [selectedCategoryIds, setselectedCategoryIds] = useState<Array<string>>([]);
  const [amount, setamount] = useState(0);
  const [description, setdescription] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const { opLoading } = useSelector((state: RootState) => state.transactionState);
  const { accounts, loading: accountsLoading } = useSelector((state: RootState) => state.accountState);
  const { categories, loading: categoriesLoading } = useSelector((state: RootState) => state.categoryState);

  useEffect(() => {
    if (categories.length < 1) {
      dispatch(getAllCategories());
    }
    if (accounts.length < 1) {
      dispatch(getAllAccounts());
    }
  }, []);

  useEffect(() => {
    if (data) {
      if (data.amnt < 0) setisPositive(false);
      setamount(Math.abs(data.amnt));
      setaccountIndex(accounts.findIndex((account) => account._id === data.from._id));
      setdescription(data.desc || "");
      console.log(data.ctgrs);

      setselectedCategoryIds(data.ctgrs?.map((c) => c._id) || []);
    }
  }, [data, accounts, categories]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    const transactionCrudDto: ITransactionCrudDto = {
      from: accounts[accountIndex]._id,

      amnt: isPositive ? amount : -amount,
      ctgrs: selectedCategoryIds.length ? selectedCategoryIds : undefined,
      desc: description || undefined,
    };

    console.log(transactionCrudDto);

    if (data) {
      await dispatch(updateTransaction(data._id, transactionCrudDto));
    } else {
      await dispatch(createTransaction(transactionCrudDto));
    }
    onSubmitEnd();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="flex button-group">
            <Button block outlined={!isPositive} onClick={() => setisPositive(true)} color="green">
              {isPositive && <Check className="icon icon--left" />}
              <div className="flex flex-column">
                <span className="mb-1">{t("income")}</span>
                <small>
                  {t("or")} {t("creditor")}
                </small>
              </div>
            </Button>
            <Button block outlined={isPositive} onClick={() => setisPositive(false)} color="red">
              {!isPositive && <Check className="icon icon--left" />}
              <div className="flex flex-column">
                <span className="mb-1">{t("expense")}</span>
                <small>
                  {t("or")} {t("debtor")}
                </small>
              </div>
            </Button>
          </div>
        </div>
        <div className="form__group">
          <input
            type="number"
            step="any"
            className="input"
            name="amnt"
            placeholder={`0 ${accounts[accountIndex]?.crny || ""}`}
            autoFocus={!data ? true : false}
            value={amount ? amount : ""}
            onChange={({ target }) => setamount(parseFloat(target.value))}
          />
          <label htmlFor="amnt" className="label label--linear">
            {t("amount")} ({accounts[accountIndex]?.crny || ""})
          </label>
        </div>
        {accounts.length > 0 && (
          <div className="flex flex-column justify-center items-center" style={{ height: 100 }}>
            <p className="mb-1">{t("upToDateBalance")}</p>
            <MoneyText
              size="large"
              amount={accounts[accountIndex]?.blnc}
              currency={accounts[accountIndex]?.crny}
            />
          </div>
        )}
        <div className="form__group">
          <div className="flex">
            <div className="flex-grow">
              <select
                name="account"
                className="input"
                onChange={({ target }) => setaccountIndex(target.selectedIndex)}
                value={accounts[accountIndex]?._id}
              >
                {accounts.map((account) => (
                  <option key={account._id} value={account._id}>
                    {account.name}
                  </option>
                ))}
              </select>
              <label htmlFor="account" className="label label--linear">
                {t("selectAnAccount")}
              </label>
            </div>
            <Button disabled={accountsLoading} outlined size="sm" style={{ marginLeft: 5, width: 80 }}>
              <Link to={`/me/accounts/${accounts[accountIndex]?._id}`}>{t("transactionHistory")}</Link>
            </Button>
          </div>
        </div>

        <div className="form__group">
          <ScrollableSelectMulti
            options={categories}
            selectedIds={selectedCategoryIds}
            onChanged={(selectedIds) => setselectedCategoryIds(selectedIds)}
            renderItem={(category, index, isSelected) => {
              const { icon } = category;
              return (
                <Button outlined={!isSelected} rounded size="md">
                  <Icon className="mr-1">{icon.name}</Icon>
                  {category.name}
                </Button>
              );
            }}
          />
          <label className="label label--linear">
            {t("selectTheCategories")} <small>({t("youCanChooseMultiple")})</small>
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            name="desc"
            id="desc"
            className="input"
            placeholder={t("note")}
            value={description}
            onChange={({ target }) => setdescription(target.value)}
          />
        </div>

        <div className="form__group">
          <Button
            type="submit"
            loading={opLoading}
            disabled={loading || categoriesLoading || accountsLoading}
          >
            {t("save")}
          </Button>
        </div>

        {data && (
          <div className="form__group">
            <Button
              outlined
              color="red"
              onClick={() => {
                dispatch(deleteTransaction(data._id));
                history.go(-2);
              }}
            >
              {t("delete")}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default TransactionForm;
