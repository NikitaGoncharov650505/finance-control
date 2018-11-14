import React, { Component } from 'react';
import {
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    InputGroup,
} from 'reactstrap'; 
import InvestmentList from '../InvestmentList/InvestmentList';

export default class Account extends Component {
    state = {
        investmentsListData: [
            {
                investmentName: 'BTG',
                investedAmount: '999',
                investmentLink: 'www.link0.com',
                investmentDescription: 'BTG DESCR',
            },
            {
                investmentName: 'ETH',
                investedAmount: '111',
                investmentLink: 'www.link1.com',
                investmentDescription: 'ETH DESCR',
            },
            {
                investmentName: 'LTC',
                investedAmount: '555',
                investmentLink: 'www.link2.com',
                investmentDescription: 'LTC DESCR of course this description can be really long and i do not care about it',
            },
        ],
        searchInvestmentName: '',
    };

    componentDidMount() {
        console.log(this.props.user);
        
    }

    

    handleChangeSearch = (event) => {
        this.setState({ searchInvestmentName: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="projects-catalog-wrapper">
                    <Row>
                        <Col
                            xs={{ size: 8, offset: 2 }}
                            sm={{ size: 4, offset: 4 }}
                            md={{ size: 3, offset: 1 }}
                            lg={{ size: 3, offset: 1 }}
                            xl={{ size: 2, offset: 1 }}
                        >
                            <FormGroup>
                                <Label>Search</Label>
                                <InputGroup>
                                    <Input placeholder="Search" value={this.state.searchInvestmentName} onChange={this.handleChangeSearch} />
                                </InputGroup> 
                            </FormGroup>
                        </Col>
                        <Col
                            xs={{ size: 12, offset: 0 }}
                            sm={{ size: 12, offset: 0 }}
                            md={{ size: 8, offset: 0 }}
                            lg={{ size: 8, offset: 0 }}
                            xl={{ size: 8, offset: 0 }}
                        >
                            <InvestmentList
                                investmentsListData={this.state.investmentsListData}
                                searchInvestmentName={this.state.searchInvestmentName}
                            />
                        </Col>
                    </Row>
                </div>
                
            </div>
        );
    }
};
