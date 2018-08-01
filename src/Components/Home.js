import React, { Component } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UnsignedInNav from './UnsignedInNav';
import Footer from './Footer';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    // componentDidMount(){
    //     console.log('kjkkjjkjk');
    //     toast.success('succes');
    // }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render(){
        return(
            <div>
                <section id="body">
                        <UnsignedInNav />
                        <div className="container">
                            <div className="d-flex searchContainer" id="loginContainer">
                                <div id="loginWrapper" className="justify-content-center align-self-center">
                                    <div className="search-box white-bg" id="indexSearchBox">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                onClick={() => { this.toggle('1'); }}
                                                >
                                                Business Name
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                className={classnames({ active: this.state.activeTab === '2' })}
                                                onClick={() => { this.toggle('2'); }}
                                                >
                                                Business Location
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                className={classnames({ active: this.state.activeTab === '3' })}
                                                onClick={() => { this.toggle('3'); }}
                                                >
                                                Business Category
                                                </NavLink>
                                            </NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <Row>
                                                <Col sm="12">
                                                    <div className="tab-pane fade show active" id="pills-name" role="tabpanel" aria-labelledby="pills-name-tab">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control inputSearch" placeholder="Search business by name ..." aria-label="pills-name-input" aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-outline-secondary btnSearch" type="button">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <Row>
                                                <Col sm="12">
                                                    <div className="tab-pane fade show active" id="pills-name" role="tabpanel" aria-labelledby="pills-name-tab">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control inputSearch" placeholder="Search business by location ..." aria-label="pills-name-input" aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-outline-secondary btnSearch" type="button">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <Row>
                                                <Col sm="12">
                                                    <div className="tab-pane fade show active" id="pills-name" role="tabpanel" aria-labelledby="pills-name-tab">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control inputSearch" placeholder="Search business by category ..." aria-label="pills-name-input" aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-outline-secondary btnSearch" type="button">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                </Row>
                                            </TabPane>
                                            </TabContent>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <Footer /> 
            </div> 
        );
    }
}

export default Home;