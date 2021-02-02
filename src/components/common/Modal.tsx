import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(p: ButtonProps) =>
    p.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

interface Props {}

const Modal = (props: Props) => {
  return (
    <div>
      <Button>Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
};

export default Modal;
