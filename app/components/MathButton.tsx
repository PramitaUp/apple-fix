import { Link } from 'expo-router';

interface MathButtonProps {
  operation: string; // either "+" or "-"
  idToEdit: string;
  minOrMax?: number;
}

function MathButton({ operation, idToEdit, minOrMax }: MathButtonProps) {
  return (
    <input type="button" value={operation} onClick={
      () => {
        var elem = document.getElementById(idToEdit)

        if (elem != null) {
          var num: number = +elem.innerText
          var tempNum = 0
          
          if (operation == "+") {
            tempNum = num + 1

            if (minOrMax != undefined && tempNum > minOrMax) {
              tempNum = minOrMax
            }
          } else if (operation == "-") {
            tempNum = num - 1

            if (minOrMax != undefined && tempNum < minOrMax) {
              tempNum = minOrMax
            }
          }

          elem.innerText = tempNum.toString()
        } else {
          console.log("WARNING: element ID " + idToEdit + " not found.")
        }

      }
    }></input>
  )
}

export default MathButton;
