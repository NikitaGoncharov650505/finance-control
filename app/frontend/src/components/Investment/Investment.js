import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Row,
    Col,
    Button,
} from 'reactstrap';
import UserService from '../UserService';

class Investment extends Component {
    constructor(domain) {
        super();
        this.UserService = new UserService();
        this.domain = domain || 'http://localhost:8080';
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
            <Row>
                <Col
                    xs={{ size: 12, offset: 0 }}
                    sm={{ size: 12, offset: 0 }}
                    md={{ size: 12, offset: 0 }}
                    lg={{ size: 12, offset: 0 }}
                    xl={{ size: 12, offset: 0 }}
                >
                    <h3>{this.props.investmentName}</h3>
                </Col>
                <Col
                    xs={{ size: 12, offset: 0 }}
                    sm={{ size: 12, offset: 0 }}
                    md={{ size: 12, offset: 0 }}
                    lg={{ size: 12, offset: 0 }}
                    xl={{ size: 12, offset: 0 }}
                >
                    <h3>{this.props.investedAmount}</h3>
                </Col>
                <Col
                    xs={{ size: 12, offset: 0 }}
                    sm={{ size: 12, offset: 0 }}
                    md={{ size: 12, offset: 0 }}
                    lg={{ size: 12, offset: 0 }}
                    xl={{ size: 12, offset: 0 }}
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
                    <h6>{this.props.investmentDescription}</h6>
                </Col>
                <Col
                    xs={{ size: 12, offset: 0 }}
                    sm={{ size: 12, offset: 0 }}
                    md={{ size: 12, offset: 0 }}
                    lg={{ size: 12, offset: 0 }}
                    xl={{ size: 12, offset: 0 }}
                >
                    <Button color="secondary" onClick={this.editInvestment}>Edit</Button>
                </Col>
                <Col
                    xs={{ size: 12, offset: 0 }}
                    sm={{ size: 12, offset: 0 }}
                    md={{ size: 12, offset: 0 }}
                    lg={{ size: 12, offset: 0 }}
                    xl={{ size: 12, offset: 0 }}
                >
                    <Button color="secondary" onClick={this.deleteInvestment}>X</Button>
                </Col>
            </Row>
        );
    }
};

export default withRouter(Investment);
