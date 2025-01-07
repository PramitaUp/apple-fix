interface TextInputProps {
  label?: string;
  id?: string;
  editable?: boolean;
}

function TextInput({ label, id, editable }: TextInputProps) {
  var hideLabel = false

  if (label == undefined) {
    hideLabel = true
  }

  if (editable != undefined) {
    editable = !editable;
  }

  return (
    <div>
      <label hidden={hideLabel}>{label} </label>

      <input type="text" disabled={editable}></input>
    </div>
  )
}

export default TextInput;
