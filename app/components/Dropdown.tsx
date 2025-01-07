import { Text, View } from "react-native";

interface DropdownProps {
  label?: string;
  id?: string;
  items: Array<string>;
}

function Dropdown({ label, id, items }: DropdownProps) {
  var hideLabel = false

  if (label == undefined) {
    hideLabel = true
  }

  return (
    <div>
      <label hidden={hideLabel}>{label} </label>

      <select id={id}>
        {
          items.map((vl, index) =>
            <option value={vl}>{vl}</option>
          )
        }
      </select>
    </div>
  )
}

export default Dropdown;
