import React from "react";
import {
  TableRowContainer,
  TableData,
  NavbarProgressBar,
} from "./NavbarTable.styles";
import { shortHandCurrency } from "../../utilities/formatMoney/formatMoney";
import PositiveArrow from "../../assets/images/positiveArrow.svg";
import NegativeArrow from "../../assets/images/negativeArrow.svg";

export default class NavbarTable extends React.Component {
  render() {
    const { isLoading, hasError, navbarData } = this.props;

    return (
      <TableRowContainer>
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>Error</p>}
        {!isLoading && !hasError && navbarData !== null && (
          <>
            <TableData>
              Coins {navbarData.data.active_cryptocurrencies}
            </TableData>
            <TableData>Exchanges {navbarData.data.markets}</TableData>
            <TableData>
              {shortHandCurrency(navbarData.data.total_market_cap.usd)}
              <img
                src={
                  navbarData.data.market_cap_change_percentage_24h_usd < 0
                    ? NegativeArrow
                    : PositiveArrow
                }
                alt="arrow-icon"
              />
            </TableData>
            <TableData>
              {shortHandCurrency(navbarData.data.total_volume.usd)}
              <NavbarProgressBar
                width={
                  (navbarData.data.total_volume.usd /
                    navbarData.data.total_market_cap.usd) *
                  100
                }
              >
                <div></div>
              </NavbarProgressBar>
            </TableData>
            <TableData>
              <img
                src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
                alt="btc-icon"
              />
              {navbarData.data.market_cap_percentage.btc.toFixed(0)}%
              <NavbarProgressBar
                width={navbarData.data.market_cap_percentage.btc}
              >
                <div></div>
              </NavbarProgressBar>
            </TableData>
            <TableData>
              <img
                src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
                alt="eth-icon"
              />
              {navbarData.data.market_cap_percentage.eth.toFixed(0)}%
              <NavbarProgressBar
                width={navbarData.data.market_cap_percentage.eth}
              >
                <div></div>
              </NavbarProgressBar>
            </TableData>
          </>
        )}
      </TableRowContainer>
    );
  }
}
