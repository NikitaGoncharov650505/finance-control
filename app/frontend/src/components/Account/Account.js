import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Row,
    Col,
    FormGroup,
    Input,
    InputGroup,
    Button,
} from 'reactstrap'; 
import InvestmentList from '../InvestmentList/InvestmentList';
import UserService from '../UserService';

class Account extends Component {
    constructor() {
        super();
        this.UserService = new UserService();
    }

    state = {
        investmentsListData: [],
        searchInvestmentName: '',
    };

    componentDidMount() {
        this.updateInvestments();
    }

    updateInvestments = async () => {
        const value = await this.UserService.getInvestments(this.props.user.id);
        this.setState({investmentsListData: value.investments});
    }

    createInvestment = () => {
        const { history, user } = this.props;
        history.push({
          pathname: `/create-investment/${user.id}`,
        });
    }

    handleChangeSearch = (event) => {
        this.setState({ searchInvestmentName: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="account-page">
                    
                    <Row>
                        <Col
                            xs={{ size: 11, offset: 1 }}
                            sm={{ size: 11, offset: 1 }}
                            md={{ size: 11, offset: 1 }}
                            lg={{ size: 11, offset: 1 }}
                            xl={{ size: 11, offset: 1 }}
                        >
                            <Button color="secondary" onClick={this.createInvestment}>+</Button>
                        </Col>
                        <Col
                            xs={{ size: 10, offset: 1 }}
                            sm={{ size: 8, offset: 2 }}
                            md={{ size: 8, offset: 2 }}
                            lg={{ size: 6, offset: 3 }}
                            xl={{ size: 6, offset: 3 }}
                        >
                            <FormGroup>
                                <InputGroup>
                                    <Input placeholder="Search" value={this.state.searchInvestmentName} onChange={this.handleChangeSearch} />
                                </InputGroup>
                                
                            </FormGroup>
                        </Col>
                        <Col
                            xs={{ size: 10, offset: 1 }}
                            sm={{ size: 8, offset: 2 }}
                            md={{ size: 8, offset: 2 }}
                            lg={{ size: 6, offset: 3 }}
                            xl={{ size: 6, offset: 3 }}
                        >
                            <InvestmentList
                                investmentsListData={this.state.investmentsListData}
                                searchInvestmentName={this.state.searchInvestmentName}
                                updateInvestments={this.updateInvestments}
                            />
                        </Col>
                    </Row>
                </div>
                
            </div>
        );
    }
};

export default withRouter(Account);
