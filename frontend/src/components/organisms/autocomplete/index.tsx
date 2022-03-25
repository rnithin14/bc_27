import * as React from "react";
import {
  useAutocomplete,
  AutocompleteGetTagProps,
} from "@mui/base/AutocompleteUnstyled";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Typography from "../../atoms/typography";
import theme, { EXTRA_COLORS } from "../../../theme";

const Root = styled("div")(
  () => `
`
);

const InputWrapper = styled("div")(
  () => `
  width: 400px;
  border: 1px solid ${theme.palette.grey[400]}; 
  background-color: white;
  border-radius: 8px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.primary[100]};
  }

  &.focused {
    border-color: ${theme.palette.primary[200]};
  }

  & input {
    font-size: ${theme.typography.caption2.fontSize};
    font-weight:  ${theme.typography.caption2.fontWeight};
    font-style:  ${theme.typography.caption2.fontStyle};
    line-height: ${theme.typography.caption2.lineHeight};
    font-family: ${theme.typography.caption2.fontFamily};
    color:  ${theme.palette.text.primary};
    height: 46px;
    box-sizing: border-box;
    padding: 16px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(
  () => `
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 22px;
  background-color: ${EXTRA_COLORS.lightPrimary};
  border: 1px solid ${EXTRA_COLORS.lightPrimary};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 5px;
  margin: 3px;
  outline: 0;

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  () => `
  width: 400px;
  min-height: 256px;
  margin: 2px 0 0;
  display: inline-block;
  padding: 0;
  position: absolute;
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  font-family: Montserrat,sans-serif;
  background-color: #ffffff;
  overflow: auto;
  max-height: 30px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  z-index: 1;
  cursor: pointer;

  & li {
    padding: 12px 16px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
    &:hover{
      background: ${theme.palette.primary[300]};
      color: ${theme.palette.background.default};
    }
  }

  & li[aria-selected='true'] {
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

export interface AutocompleteOptionsInterface {
  formatted: string;
  lat: string;
  lon: string;
}


type AutocompleteProps = {
  autocompleteOptions: AutocompleteOptionsInterface[];
  numberOfInputs?: number;
  isInputValueChip: boolean;
  placeholder: string;
  callback?: (searchResults: any) => void;
  onInputChange?: (event: React.SyntheticEvent,value: string) => void;
  onChange?: any
  
};

export default function Autocomplete({
  autocompleteOptions,
  isInputValueChip,
  placeholder,
  onInputChange,
  onChange,
 
}: AutocompleteProps) {

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
    setAnchorEl,
    value
  } = useAutocomplete({
    onInputChange: onInputChange,
    onChange: onChange,
    id: "Autocomplete",
    multiple: true,
    options: autocompleteOptions,
    getOptionLabel: (option) => option.formatted,
  });

  return (
    <Root data-testid="Autocomplete">
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {isInputValueChip &&
            value.map((option: any, index: number) => (
              <StyledTag
                data-testid="AutocompleteChip"
                label={option.formatted}
                {...getTagProps({ index })}
              />
            ))}
          {!isInputValueChip &&
            value.map((option: any, index: number) => (
              //used sx
              <Typography variant="caption2" sx={{ padding: "16px" }}>
                {option.formatted}
              </Typography>
            ))}
          <input
            placeholder={value.length > 0 ? " " : placeholder}
            data-testid="AutocompleteInput"
            {...getInputProps()}
          />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox data-testid="AutocompleteListBox" {...getListboxProps()}>
          {(groupedOptions as typeof autocompleteOptions).map(
            (option: any, index: number) => (
              <li {...getOptionProps({ option, index })}>
                <span>{option.formatted}</span>
                <CheckIcon fontSize="small" />
              </li>
            )
          )}
        </Listbox>
      ) : null}
    </Root>
  );
}
