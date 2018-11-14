import React, { Component } from 'react';
import Investment from '../Investment/Investment';
import { Row, Col } from 'reactstrap';

export default class InvestmentList extends Component {
    render() {
        console.log(this.props);
        return (
            <Row>
                <Col>
                    {this.props.investmentsListData
                    .filter((element) => element.investmentName.toLowerCase().includes(this.props.searchInvestmentName.toLowerCase()))
                    .map((element) => 
                        <Investment
                            key={element._id}
                            investmentId={element._id}
                            investmentName={element.investmentName}
                            investedAmount={element.investedAmount}
                            investmentLink={element.investmentLink}
                            investmentDescription={element.investmentDescription}
                            updateInvestments={this.props.updateInvestments}
                        />)
                    }
                </Col>
            </Row>   
        );
    }
};
