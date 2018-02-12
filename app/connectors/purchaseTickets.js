import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectorMap } from "../fp";
import * as sel from "../selectors";
import * as ca from "../actions/ControlActions";
import * as cla from "../actions/ClientActions";

const mapStateToProps = selectorMap({
  ticketPrice: sel.ticketPrice,
  spendingAccounts: sel.spendingAccounts,
  rescanRequest: sel.rescanRequest,
  hasTicketsToRevoke: sel.hasTicketsToRevoke
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onPurchaseTickets: ca.purchaseTicketsAttempt,
  splitTicketPurchase: cla.splitTicketPurchase,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
