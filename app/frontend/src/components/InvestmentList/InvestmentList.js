import React, { Component } from 'react';
import Investment from '../Investment/Investment';
import { Row, Col } from 'reactstrap';

export default class InvestmentList extends Component {
    render() {
        return (
            <Row>
                <Col>
                    {this.props.investmentsListData
                    .filter((element) => element.investmentName.toLowerCase().includes(this.props.searchInvestmentName.toLowerCase()))
                    .map((element) => 
                        <Investment
                            key={element.investmentName}
                            investmentName={element.investmentName}
                            investedAmount={element.investedAmount}
                            investmentLink={element.investmentLink}
                            investmentDescription={element.investmentDescription}
                        />)
                    }
                </Col>
            </Row>   
        );
    }
};
