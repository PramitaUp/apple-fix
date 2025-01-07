import MathButton from '../components/MathButton';

function ReefAlgaeView() {
  return (
    <div>
      <MathButton operation="-" idToEdit='num' minOrMax={0}></MathButton>

      <span id="num">0</span>

      <MathButton operation="+" idToEdit='num' minOrMax={10}></MathButton>
    </div>
  )
}

export default ReefAlgaeView;
