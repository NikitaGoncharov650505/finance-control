import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Row,
    Col,
    Button,
} from 'reactstrap';
import UserService from '../UserService';
import './Investment.styles.css';

class Investment extends Component {
    constructor() {
        super();
        this.UserService = new UserService();
    }

    deleteInvestment = async () => {
        await this.UserService.deleteInvestment(this.props.investmentId);
        this.props.updateInvestments();
    }

    editInvestment = async () => {
        const { history } = this.props;
        history.push({
          pathname: `/edit-investment/${this.props.investmentId}`,
        });
    }

    render() {
        return (
            <div className="investment-wrapper">
                <Row>
                    <Col
                        xs={{ size: 2, offset: 0 }}
                        sm={{ size: 2, offset: 0 }}
                        md={{ size: 2, offset: 0 }}
                        lg={{ size: 2, offset: 0 }}
                        xl={{ size: 2, offset: 0 }}
                    >
                        <h3>{this.props.investmentName}</h3>
                    </Col>
                    <Col
                        xs={{ size: 4, offset: 0 }}
                        sm={{ size: 4, offset: 0 }}
                        md={{ size: 4, offset: 0 }}
                        lg={{ size: 4, offset: 0 }}
                        xl={{ size: 4, offset: 0 }}
                    >
                        <h3>{this.props.investedAmount}</h3>
                    </Col>
                    <Col
                        xs={{ size: 3, offset: 0 }}
                        sm={{ size: 3, offset: 0 }}
                        md={{ size: 3, offset: 0 }}
                        lg={{ size: 3, offset: 0 }}
                        xl={{ size: 1, offset: 4 }}
                    >

                        <Button color="secondary" onClick={this.editInvestment}>Edit</Button>
                    </Col>
                    <Col
                        xs={{ size: 3, offset: 0 }}
                        sm={{ size: 3, offset: 0 }}
                        md={{ size: 3, offset: 0 }}
                        lg={{ size: 3, offset: 0 }}
                        xl={{ size: 1, offset: 0 }}
                    >
                        <Button color="secondary" onClick={this.deleteInvestment}>X</Button>
                    </Col>

                    <Col
                        xs={{ size: 6, offset: 0 }}
                        sm={{ size: 6, offset: 0 }}
                        md={{ size: 4, offset: 0 }}
                        lg={{ size: 2, offset: 0 }}
                        xl={{ size: 2, offset: 0 }}
                    >
                        <h3>Link:</h3>
                    </Col>
                    <Col
                        xs={{ size: 6, offset: 0 }}
                        sm={{ size: 6, offset: 0 }}
                        md={{ size: 8, offset: 0 }}
                        lg={{ size: 10, offset: 0 }}
                        xl={{ size: 10, offset: 0 }}
                    >
                        <h3>{this.props.investmentLink}</h3>
                    </Col>
                    <Col
                        xs={{ size: 12, offset: 0 }}
                        sm={{ size: 12, offset: 0 }}
                        md={{ size: 12, offset: 0 }}
                        lg={{ size: 12, offset: 0 }}
                        xl={{ size: 12, offset: 0 }}
                    >
                        <h4>{this.props.investmentDescription}</h4>
                    </Col>
                    
                 </Row>
            </div>
        );
    }
};

export default withRouter(Investment);
