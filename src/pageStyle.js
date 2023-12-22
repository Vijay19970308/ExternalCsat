import styled from "styled-components";

const PageStyle = styled.div`

width:80vw;
  /************ Project Details *************/

  .right {
    text-align: right;
  }
  .custom-tab {
    padding: 0 6px;
  }
  .ant-btn-group {
    .ant-btn {
      border-color: #296ed3;
      &.active {
        background-color: #296ed3;
        color: #ffffff;
      }
    }
  }

  .tab-data {
    .ant-card {
      .ant-card-head {
        background-color: #b2cce5
        color: #ffffff;
      }
      border-radius: 4px;
    }
    .ant-list-item-meta {
      max-width: 50%;
    }
    b {
      max-width: 50%;
    }
    .ant-list-item-meta-title {
      margin-bottom: 0px;
    }
    .ant-list-split .ant-col .ant-list-item {
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-list-item .ant-form-item {
      margin-bottom: auto;
    }
    .ant-col-24 {
      text-align: right;
      &.edit {
        padding: 0 15px;
        .ant-btn {
          background-color: #ffffff !important;
        }
      }
    }
    .ant-col-12 {
      padding: 0 15px;
      .details {
        background-color: #ffffff;
        box-shadow: 0 0 4px 2px #ddd;
        border-radius: 2px;
        padding: 2px 10px;
        margin-top: 15px;
        min-height: 189px;
        .title {
          background-color: rgba(
            237,244,248
            1
          );
          margin: -2px -10px 0;
          padding: 10px 25px;
          font-size: 18px;
          font-weight: 600;
        }
        .ant-row {
          border-bottom: 1px solid #ccc;
          padding: 8px 0;
          :last-child {
            border-bottom: 0;
          }
          .ant-col-12 {
            .ant-form-item {
              margin: 0;
              padding: 0;
            }
            :first-child {
              p {
                margin: 3px 0;
              }
            }
            :last-child {
              p {
                margin: 3px 0 0;
                font-weight: 600;
              }
              .ant-select,
              .ant-calendar-picker {
                width: 100%;
              }
            }
          }
        }
      }
      .right {
        text-align: right;
        padding: 0 15px;
      }
    }
  }

  .overAllScoreLabel {
    font-size: 20px;
    color: black;
    padding: 7px 0;
  }

  ul.ant-rate.overAllRating {
    font-size: 27px;
  }

  .ratingNumber {
    font-size: 30px;
    width: 100px;
    height: 42px;
    color: crimson;
    text-align: center;
    background-color: #e3e3e3;
  }

  .panelCard .ant-card-head {
    background-color: #b2cce5
  }

  .panelRatingNumber {
    font-size: 20px;
    width: 60px;
    margin: 0 auto;
    color: crimson;
    text-align: center;
    height: 24px;
    background-color: #e3e3e3;
  }

  .stars-container {
    border:none;
    .ant-card-body {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .panelRating {
    font-size: 18px;
    li {
      min-width: 35px;
    }
  }

  button.ant-btn.clearButton {
    margin: 0 15px 0 0;
  }

  .buttonSection {
    margin: 25px 0px;
    text-align: right;
  }

  .projectFeedbackSection {
    margin: 5% 0;
  }

  .overAllPanelSection {
    margin: 3% 0;
  }
  .panelSection {
    margin: 5% 0;
  }
  .block-1 {
    margin: 8px;
    .details-title {
      background-color: #40a2bd;
      color: #ffffff;
      border-radius: 2px;
      margin: 25px 14px 0px;
      padding: 0px 17px 0px;
      line-height: 3;
      font-size: 16px;
      font-weight: 600;
      /* min-height: 189px; */
    }
    .details {
      box-shadow: none;
    }
  }

  .block-2 {
    margin-top: 10px;
  }

  @media (min-width: 1367px) {
    ul.ant-rate.overAllRating {
      font-size: 30px;
    }

    .overAllScoreLabel {
      padding: 15px 0;
    }
    .panelRatingNumber {
      font-size: 25px;
      width: 70px;
      margin: 0 auto;
      color: crimson;
      text-align: center;
      height: 35px;
      background-color: #e3e3e3;
    }

    .panelRating {
      font-size: 25px;
    }

    .activeProjectLists {
      padding: 12.5px;
    }
  }

  .ant-input-affix-wrapper .ant-input#projectDetails_projectName {
    font-family: monospace;
    padding-left: var(--character-width);
  }

  .wrap-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // width: 200px;
    display: block;
  }

  .reason {
     width: 250px;
  }

  

  .wrap-text span {
    padding-left: 0.5em;
  }

  #project-details {
    padding: 10px;
    background: white;
  }

  #project-details label {
    line-height: 20px;
  }

  #project-details .ant-form-item-label,
  .ant-form-explain,
  .ant-form-explain span {
    white-space: break-spaces;
  }

  #project-details .ant-form-item {
    margin-bottom: 0;
  }

  .align-upload {
    display: flex;
    flex-direction: column;
  }

  .dotted-border {
    border-bottom: 1px dotted;
    border-color: #303030;
    padding: 15px;
  }

  .dotted-border .ant-col {
    padding-left: 0 !important;
    padding-right: 0 !important;
    
  }
  
  .project {
    max-width: 380px;
  }
  .postProductionAction {
    color: #e1242a;
    max-width: 50px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .modificationDetails,
  .postLaunchDefects {
    min-height:200px;
    padding: 0px 10px;
    .modification-details,
    .post-launch-defects {
      overflow-x: auto;
    }
    th {
      background: rgb(231, 242, 248);
      border-right: 1px solid white;
      font-weight: bold;
    }
  }

  .add-row-button {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 25px;
    z-index: 100;
    top: 3px;
    cursor: pointer;
  }
  .ant-rate-star {
    margin-right: 0px !important;
  }
  .rating-container {
    border:none;
    .ant-card-head {
      background-color: rgb(231, 242, 248);
      color: #535353;
      font-weight: bold;
      font-size: 28px;
      padding: 5px;
    }
    .ant-card-body {
      padding: 0px 0px 10px 0px;
    }
    .rating-descriptions {
      display: flex;
      .descriptions-container {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        .description-box {
          gap: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
  }

  .textFeedback {
    background-color: transparent;
    border: 2px solid #aab1b9;
    padding: 8px 12px;
    border-radius: 6px;
    box-sizing: border-box;
    height: 150px;
    width:100%;
    line-height: 1.467;
    font-size: 15px;
    transition: border .25s linear,color .25s linear,background-color .25s linear;
  }

  .textFeedback:focus {
    border-color: #ff163d;
    border-width: 4px;
    outline: 0;
    border-right-width: 4px !important;
}

.feedbackCard {
  border:none;
}

.feedbackCard .ant-card-head,
 .feedbackCard .ant-card-head-title,
  .rating-container .ant-card-head-title,
   .rating-container .ant-card-head {
  background-color:#fff !important;
  flex:none;
  font-size: 15px !important;
  border:none;
  padding:7px !important;
}

.stars-container .ant-card-grid {
 padding:15px !important;
 box-shadow:none;
}

.refreshIcon:focus, .refreshIcon:active {
  outline: #ff163d auto 5px !important;
}

.ant-table-pagination.ant-pagination {
  float:none;
  text-align:center;
}

.feedbackCard .ant-card-body {
 padding: 15px 0px 0px 20px;
}
 
.workflow-issues-tab.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
  border-bottom: 5px solid white;
  margin: 0px;
  background-color:rgb(231,242,248);
  font-weight:600;
  border-left: 5px solid white;
}

.modification-details .ant-form-item, .post-launch-defects .ant-form-item{
  margin:0px;
}

.noDataFound {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  padding: 60px;
}

.modification-details tr {
  vertical-align:middle;
}

.data {
  padding-top:10px;
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
}

`;

export default PageStyle;
