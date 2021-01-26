import AccountForm from 'components/account/AccountForm';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  return <AccountForm onSubmitEnd={() => history.goBack()} />;
};

export default Create;
