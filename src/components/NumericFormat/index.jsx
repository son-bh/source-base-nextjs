import { NumericFormat as RNumericFormat } from 'react-number-format';

const NumericFormat = ({ ...props }) => <RNumericFormat thousandSeparator="," decimalSeparator="." {...props} />;

export default NumericFormat;
