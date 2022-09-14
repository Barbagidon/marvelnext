import { SearchFormProps } from "./SearchForm.props";
import styles from "./SearchForm.module.css";

export const SearchForm = ({ ...props }: SearchFormProps): JSX.Element => {
  return <div {...props}>SearchForm </div>;
};
