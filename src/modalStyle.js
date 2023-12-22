import styled from "styled-components";

const ModalStyle = styled.div`
  /********** Modal ***********/

  .center {
    text-align: center;
  }

  .ant-row-flex {
    .gutter-row {
      .block {
        background-color: #eff4ff;
        border: 1px solid #296ed3;
        border-radius: 3px;
        padding: 18px 10px 0;
        min-height: 130px;
        margin: 20px 0 0;
        p {
          margin-bottom: 10px;
        }
      }
    }
  }

  .ant-modal-root {
    .ant-modal-centered {
      .ant-modal {
        width: 800px;
      }
    }
  }

  .disclaimer {
    color: red;
    font-size: 12px;
  }

  .reviewFormHeading {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default ModalStyle;
