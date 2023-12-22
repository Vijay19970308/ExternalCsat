import React, { Component } from "react";
import {
    Button,
    notification,
    Spin,
    Form,
    Rate,
    Modal,
    Row,
    Col,
    Card
} from "antd";

import TextArea from "antd/lib/input/TextArea";
import PageStyle from "./pageStyle";
import ModalStyle from "./modalStyle";
import crossRefresh from "./assets/cross.png";
import { getCsatRating, submitCsatRating } from "./api";
const ratingDescriptions = [
    "(1) Completely disagree",
    "-",
    "-",
    "(7) Completely agree"
];
const ratingDesc = ["Completely disagree",
    "",
    "",
    "",
    "",
    "",
    "Completely agree"]

const ratingQuestions = [
    {
        value: "campaignOpsUnderstoodRating",
        callback: "handleManagementChange"
    },
    { value: "qualityOfTheOutputRating", callback: "handleQualityChange" },
    { value: "timelineForTheProjectRating", callback: "handleTimeLineChange" },
    {
        value: "campaignOpsWasProactiveRating",
        callback: "handleCampaignOpsProactiveChange"
    },
    {
        value: "campaignOperationsServiceRating",
        callback: "handleCampaignOperationsServiceRating"
    }
];

class CsatRating extends Component {
    state = {
        dataLoadInProgress: false,
        overAllRating: 0,
        panel1Rating: 0,
        panel2Rating: 0,
        panel3Rating: 0,
        panel4Rating: 0,
        panel5Rating: 0,
        comments: "",
        visible: false,
        disabled: false,
        disableTextArea: false,
        disableSubmit: true,
        disableClear: true,
        campaignStatus: undefined,
        campaignId: undefined,
        userEmail: undefined
    };

    async componentDidMount() {
        const campaignId = localStorage.getItem("campaignId");
        const campaignStatus = await getCsatRating({ campaignId });
        this.setState({ campaignStatus, campaignId, userEmail: this.props?.userInfo?.email || undefined });
    }


    componentWillUpdate(nextState) {
        if (
            nextState.panel1Rating !== this.state.panel1Rating &&
            nextState.panel2Rating !== this.state.panel2Rating &&
            nextState.panel3Rating !== this.state.panel3Rating &&
            nextState.panel4Rating !== this.state.panel4Rating &&
            nextState.panel5Rating !== this.state.panel5Rating
        ) {
            return false;
        }
    }

    componentWillUnmount() {
        localStorage.setItem("campaignId", undefined);
    }

    onChange = (pagination, filters, sorter) => {
        this.setState({ dataLoadInProgress: true, filteredInfo: filters });
        this.setState(
            {
                fileType: filters.fileType || [],
                uploadedBy: filters.uploadedBy || []
            },
            () => {
                this.getProjectFilesDetails();
            }
        );
    };

    handleOverAllChange = e => {
        this.setState({
            // overAllRating: e,
            disableSubmit: false,
            disableClear: false
        });
    };

    handleManagementChange = e => {
        this.setState({
            panel1Rating: e,
            disableClear: false
        });
    };

    handleQualityChange = e => {
        this.setState({
            panel2Rating: e,
            disableClear: false
        });
    };

    handleTimeLineChange = e => {
        this.setState({
            panel3Rating: e,
            disableClear: false
        });
    };

    handleCampaignOpsProactiveChange = e => {
        this.setState({
            panel4Rating: e,
            disableClear: false
        });
    };

    handleCampaignOperationsServiceRating = e => {
        this.setState({
            panel5Rating: e,
            disableClear: false
        });
    };

    handleCsatSubmit = (
        overAllRating,
        panel1Rating,
        panel2Rating,
        panel3Rating,
        panel4Rating,
        panel5Rating,
        comments
    ) => {
        const { userEmail, campaignId } = this.state;
        const feedback = this.props.form?.getFieldValue("feedbackDetails");
        const obj = {
            campaignId: campaignId || 368312,
            timelineForTheProjectRating: panel3Rating,
            campaignOpsUnderstoodRating: panel1Rating,
            qualityOfTheOutputRating: panel2Rating,
            campaignOpsWasProactiveRating: panel4Rating,
            campaignOperationsServiceRating: panel5Rating,
            externalUserEmail: userEmail || "vijay.kumar@takeda.com",
            feedback
        };
        this.setState({ dataLoadInProgress: true });
        submitCsatRating(obj).then(() => {
            this.setState({
                // visible: false,
                disabled: true,
                disableTextArea: true
            });

            notification["success"]({
                message: "csat feedback submitted",
                description: "thanks",
                duration: 4
            });

            const campaignStatus = getCsatRating(campaignId).then(() => {
                this.setState({ dataLoadInProgress: false, visible: false });
            });
            this.setState({
                campaignStatus
            });
        });
    };
    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false
        });
    };

    handleCommentChange = e => {
        this.setState({
            comments: e.target.value,
            disableClear: false
        });
    };

    clearFields = () => {
        this.setState({
            overAllRating: 0,
            panel1Rating: 0,
            panel2Rating: 0,
            panel3Rating: 0,
            panel4Rating: 0,
            panel5Rating: 0,
            comments: "",
            visible: false,
            disabled: false,
            disableTextArea: false,
            disableSubmit: true,
            disableClear: true
        });
        this.props.form.resetFields();
    };

    render() {
        const {
            isRatedByUser,
            feedback,
            campaignStatus
        } = this.state;
        const {
            overAllRating,
            panel1Rating,
            panel2Rating,
            panel3Rating,
            panel4Rating,
            panel5Rating,
            comments,
            disabled,
            disableClear,
            dataLoadInProgress
        } = this.state;
        const { getFieldDecorator } = this.props.form;
        const gridStyle2 = {
            width: "73%",
            textAlign: "start"
        };
        const ratingTitle = [
            "1. Campaign Ops understood my requirement for the project.",
            "2. Quality of the output delivered by the campaign Ops fully met my expectations.",
            "3. Timelines for the Project delivery were aligned with my expectations.",
            "4. Campaign Ops was proactive in communicating with me throughout the project.",
            "5. I will use Campaign Operations services for my future campaigns.",
        ];
        return (
            <PageStyle>
                <Spin spinning={dataLoadInProgress} size="large">
                    <Card
                        style={{ textAlign: "center", padding: "10px", border: "none" }}
                        className="card-title-wrapper"
                        title={"CSAT Survey"}
                    >
                        <p
                            style={{
                                fontSize: 16,
                                color: "rgba(0, 0, 0, 0.85)",
                                marginBottom: 16,
                                fontWeight: 500,
                                padding: 0
                            }}
                        >
                            {"Please help us by giving your feedback through this customer satisfaction survey."}
                        </p>

                        <Card title={"Please rate your satisfaction with Campaign Operations in the following aspects:"}
                            className="rating-container">
                            <Row className="rating-descriptions">
                                <Col style={{ width: "77%" }} />
                                <Col
                                    style={{ width: "28%", paddingRight: "10px" }}
                                    className="descriptions-container"
                                >
                                    {ratingDescriptions.map((ratingDescription, i) => {
                                        return (
                                            <Col key={i} className="description-box">
                                                {/* <Row style={{ fontSize: "20px" }}>{i + 1}</Row> */}
                                                <Row style={{ fontSize: "15px", whiteSpace: "nowrap" }}>
                                                    {ratingDescription}
                                                </Row>
                                            </Col>
                                        );
                                    })}
                                </Col>
                            </Row>
                        </Card>
                        {ratingQuestions.map(({ value, callback }, i) => {
                            const key = i + 1;
                            return (
                                <Card type="inner" className="stars-container" style={i % 2 !== 0 ? { backgroundColor: "#00000008" } : {}} key={key}>
                                    <Card.Grid hoverable={false} style={gridStyle2}>
                                        {ratingTitle[key - 1]}
                                        <span style={{ color: "red" }}>&#42;</span>
                                    </Card.Grid>
                                    <Col
                                        xxl={12}
                                        xl={12}
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                        style={{
                                            width: "26%",
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            justifyContent: "flex-end"
                                        }}
                                    >
                                        {
                                            !isRatedByUser ?
                                                <img
                                                    alt="refresh"
                                                    className="refreshIcon"
                                                    src={crossRefresh}
                                                    onClick={() => { this[callback](0) }}
                                                    style={{ fontSize: '16px', marginRight: "5px", cursor: "pointer", height: "20px" }}
                                                />
                                                : ""}
                                        <Rate
                                            count={7}
                                            disabled={disabled || isRatedByUser}
                                            className="panelRating"
                                            value={
                                                isRatedByUser
                                                    ? this.props.project[value]
                                                    : this.state[`panel${key}Rating`]
                                            }
                                            tooltips={ratingDesc}
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                alignContent: "center",
                                                flexWrap: "nowrap",
                                                flexDirection: "row"
                                            }}
                                            onChange={e => this[callback](e)}
                                        />
                                    </Col>
                                </Card>
                            );
                        })}
                        {
                            <Card type="inner" title={"How can we improve the service we provide for you?"} className="feedbackCard" >
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}
                                >
                                    <Form.Item style={{
                                        width: "100%"
                                    }}
                                    >
                                        {getFieldDecorator(`feedbackDetails`, {
                                            rules: [
                                                {
                                                    required: false,
                                                    whitespace: true,
                                                    message: "Please Enter your FeedBack Details"
                                                }
                                            ],
                                            initialValue: feedback
                                        })(
                                            <TextArea
                                                className="textFeedback"
                                                disabled={disabled || isRatedByUser}
                                                rows={10}
                                                onChange={() => { this.setState({ disableClear: false }) }}
                                                placeholder={"Enter your Feedback Details"}
                                            />
                                        )}
                                    </Form.Item>

                                </Col>
                            </Card>
                        }
                        <div className="buttonSection">
                            <Button
                                disabled={disabled || isRatedByUser || disableClear}
                                onClick={() => this.clearFields()}
                                className="clearButton"
                            >
                                {"Reset"}
                            </Button>
                            <Button
                                type="primary"
                                className="submitButton"
                                disabled={
                                    !(
                                        panel1Rating &&
                                        panel2Rating &&
                                        panel3Rating &&
                                        panel4Rating &&
                                        panel5Rating &&
                                        campaignStatus === 'SURVEY_IN_PROCESS'
                                    )
                                }
                                onClick={this.showModal}
                            >
                                {"submit"}
                            </Button>
                        </div>
                    </Card>
                </Spin>

                <Modal
                    title={
                        <span style={{ color: "#000" }}>
                            {"CSAT Survey"}
                        </span>
                    }
                    className="complete-task-modal"
                    centered={true}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    maskClosable={false}
                    footer={null}
                >
                    <ModalStyle>
                        <Form>
                            <p>
                                <span
                                    style={{
                                        fontSize: 14,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    {"Do you want to submit the survey?"}
                                </span>
                            </p>
                            <div
                                style={{
                                    display: "flex", justifyContent: "center", gap: "10px", alignItems: "center",
                                    alignContent: "center",
                                    flexDirection: "row",
                                    flexWrap: "nowrap"
                                }}
                            >
                                <Button
                                    key="submit"
                                    type="primary"
                                    onClick={() =>
                                        this.handleCsatSubmit(
                                            overAllRating,
                                            panel1Rating,
                                            panel2Rating,
                                            panel3Rating,
                                            panel4Rating,
                                            panel5Rating,
                                            comments
                                        )
                                    }
                                    loading={dataLoadInProgress}
                                >
                                    {"Yes"}
                                </Button>
                                <Button
                                    key="cancel"
                                    type="secondary"
                                    onClick={() => this.handleCancel()}
                                >
                                    {"No"}
                                </Button>
                            </div>
                        </Form>
                    </ModalStyle>
                </Modal>
            </PageStyle>
        );
    }
}



const Csat = Form.create({ name: "csat" })(CsatRating);

export default Csat;
