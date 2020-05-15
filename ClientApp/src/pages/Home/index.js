import React, { Component } from 'react';
import './style.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import hero from './../../assets/images/hero.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import a1 from './../../assets/images/a1.PNG';
import mobile from './../../assets/images/mobile.PNG';
import butler from './../../assets/images/butler.png';
import img1 from './../../assets/images/img1.png';
import img2 from './../../assets/images/img2.png';
import img3 from './../../assets/images/img3.png';
import { Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar fixed="top" className="header-home" variant="dark">
                    <Navbar.Brand href="#home" className="header__brand">Trello</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link to="/login"><Button variant="outline-light">Login</Button></Link>
                        <Link to="/sigup"><Button className="ml-2" variant="outline-light">Sigin</Button></Link>
                    </Nav>
                </Navbar>
                <Jumbotron className="banner">
                    <Container className="d-flex">
                        <Row>
                            <Col sm={6} xs={12}>
                                <h1 className="banner__title" >Trello giúp bạn làm việc có tính hợp tác hơn và làm được nhiều hơn.</h1>
                                <p className="banner__desc">
                                    Các bảng, danh sách, và thẻ của Trello cho phép bạn tổ chức và ưu tiên các dự án của bạn một cách vui vẻ, linh hoạt và xứng đáng.
                                </p>
                            </Col>
                            <Col sm={6} xs={12}>
                                <img src={hero} alt ="hinh"/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <div className="content">
                    <Container>
                        <section>
                            <Row>
                                <Col sm={6} xs={12}>
                                    <h3 className="mt-5 content__title">
                                        Làm việc với bất kỳ nhóm nào
                                    </h3>
                                    <p className=" content__desc">
                                        Dù là cho công việc, dự án phụ hay kỳ nghỉ cùng gia đình sắp tới, Trello sẽ luôn giúp tổ chức sắp xếp nhóm của bạn.
                                    </p >
                                    <a href="#to"><Button variant="secondary">Bắt đầu làm việc nhóm</Button></a>
                                </Col>
                                <Col sm={6} xs={12}>
                                    <img  src={a1} className="content__img" alt="hinh"/>
                                </Col>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <Col sm={6} xs={12} className="d-flex justify-content-center">
                                    <img  src={mobile} className="content__mobile" alt="hinh"/>
                                </Col>
                                <Col sm={6} xs={12}>
                                    <h3 className="mt-5 content__title">
                                    Thông tin nhanh
                                    </h3>
                                    <p className="content__desc">
                                    Đi vào chi tiết bằng cách thêm bình luật, tệp đính kèm, ngày hết hạn và trực tiếp hơn vào thẻ Trello. Cộng tác trên các dự án từ đầu đến cuối.
                                    </p >
                                </Col>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <Col sm={6} xs={12} className="">
                                    <h3 className="mt-5 content__title">
                                        Thông tin nhanh
                                    </h3>
                                    <p className="content__desc">
                                    Đi vào chi tiết bằng cách thêm bình luật, tệp đính kèm, ngày hết hạn và trực tiếp hơn vào thẻ Trello. Cộng tác trên các dự án từ đầu đến cuối.
                                    </p >          
                                </Col>
                                <Col sm={6} xs={12}>
                                    <img  src={butler} className="content__mobile" alt="hinh"/>
                                </Col>
                            </Row>
                        </section>
                        <section>
                            <Row className="mt-5">
                                <Col sm={6} className="offset-sm-3 text-center">
                                    <h3 className="content__title">Trello theo cách của bạn</h3>
                                    <p className="content__desc">Sử dụng Trello theo cách nhóm của bạn làm việc tốt nhất. Chúng tôi đã có sự linh hoạt và các tính năng để phù hợp với bất kỳ phong cách nhóm nào.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="4" xs="12" className="text-center">
                                    <img src={img1} className="content__image" alt="hinh"/>
                                    <h3 className=" content__title">
                                    Playbook nhóm
                                    </h3>
                                    <p className="content__desc">
                                    Thật dễ dàng để thúc đẩy nhóm của bạn lên và hoạt động với Trello. Chúng tôi đã thu thập tất cả các bảng và công cụ bạn cần để thành công trong một nguồn lực có sẵn.
                                    </p >
                                    <a href="#to"><Button  className="content__btn" variant="secondary">Lập kế hoạch chơi game</Button></a>
                                </Col>
                                <Col sm="4" xs="12" className="text-center">
                                    <img src={img2} className="content__image" alt="hinh"/>
                                    <h3 className=" content__title">
                                    Nền tảng Hiệu quả
                                    </h3>
                                    <p className="content__desc">
                                    Thật dễ dàng để thúc đẩy nhóm của bạn lên và hoạt động với Trello. Chúng tôi đã thu thập tất cả các bảng và công cụ bạn cần để thành công trong một nguồn lực có sẵn.
                                    </p >
                                    <a href="#to"><Button className="content__btn"  variant="secondary">Mở rộng quy trình làm việc của bạn</Button></a>
                                </Col>
                                <Col sm="4" xs="12" className="text-center">
                                    <img src={img3} className="content__image" alt="hinh"/>
                                    <h3 className=" content__title">
                                    Luôn Đồng bộ
                                    </h3>
                                    <p className="content__desc">
                                    Dù bạn ở đâu, Trello cũng đồng bộ với tất cả các thiết bị của bạn. Cộng tác với nhóm của bạn ở bất kỳ nơi đâu từ ngồi trên xe buýt đến ngồi trên bờ biển.
                                    </p >
                                </Col>
                            </Row>
                        </section>
                        <section>
                            <Row className="content__box mt-5 d-flex flex-column justify-content-center align-items-center text-white" >
                                <h3 className="mt-5" >Bắt đầu lên kế hoạch hôm nay</h3>
                                <p>Các công ty thuộc mọi hình dạng và kích thước đều sử dụng Trello.</p>
                                <a href="#to">
                                    <Button variant="primary" className="mb-5">Tìm hiểu cách</Button>
                                </a>
                            </Row>
                        </section>
                        <section className="content__bottom">
                            <Row className="content__bgr mt-5 mb-5"> 
                                <Col sm="4" className="offset-sm-4 text-center">
                                    <h3 className="mt-5 content__title ">Làm việc thông minh hơn với Trello</h3>
                                        <p className="content__desc">Đăng ký và trở thành một trong hàng triệu người trên thế giới sử dụng Trello để hoàn thành nhiều công việc hơn.</p>
                                        <a href="#to">
                                            <Button  variant="success" className="mb-5">Bắt đầu - miễn phí</Button>
                                        </a>
                                </Col>
                            </Row>
                        </section>
                            <p className="text-center text-primary">Bản quyền 2020. Bảo lưu toàn quyền.</p>
                    </Container>
                </div>
            </div>
        )
    }
}
export default Home;
