
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { default as MuiSelect} from '@material-ui/core/Select';

import useSelectStyles from './Select.styles';
import { ISelectProps } from "./Select.interface";

/**
 * @todo enable filterable multi select components
 * ie: https://github.com/FiretableProject/multiselect
 */
const Select = (props: ISelectProps) => {
  const classes = useSelectStyles();

  const {
    label,
    options,
    selected,
    onChange,
  } = props;

  const labelId = `select-label-${label}`;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <MuiSelect
        labelId={labelId}
        id={`select-${label}`}
        value={selected || ""}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option: string, key: number) => (
          <MenuItem value={option} key={key}>{option}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
};

export default Select;
