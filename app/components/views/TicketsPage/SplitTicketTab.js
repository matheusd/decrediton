import purchaseTickets from "connectors/purchaseTickets";
import { KeyBlueButton } from "buttons";
import { DcrInput } from "inputs";

@autobind
class SplitTicketsTab extends React.Component{
  constructor(props) {
    super(props);
    this.state = { splitAmount: 0 };
  }

  onChangeSplitAmount(splitAmount) {
    this.setState({ splitAmount });
  }

  buySplit() {
    this.props.splitTicketPurchase(this.state.splitAmount);
  }

  render() {
    const { splitAmount } = this.state;
    const { buySplit, onChangeSplitAmount } = this;

    return (
      <div className="receive-content-nest">
        <div className="stakepool-purchase-ticket-row-wrapper">
          <div className="stakepool-purchase-ticket-row">
            <DcrInput amount={splitAmount} onChangeAmount={onChangeSplitAmount}/>
            <KeyBlueButton onClick={buySplit}>Split Purchase</KeyBlueButton>
          </div>
        </div>
      </div>
    );
  }
}

export default purchaseTickets(SplitTicketsTab);
