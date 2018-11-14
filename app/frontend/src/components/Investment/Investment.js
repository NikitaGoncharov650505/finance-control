import React, { Component } from 'react';
import {
    Row,
    Col,
    Badge,
    Progress
} from 'reactstrap';

export default class Investment extends Component {
    projectClickHandler() {
        console.log('clicked project');
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
            </Row>
        );
    }
};
