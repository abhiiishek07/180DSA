import { Grid } from "@mui/material";
import styled from "styled-components";
import themeColor from "../../Data/themeColor.json";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import RuleIcon from "@mui/icons-material/Rule";
const DisplayHeading = () => {
  const currTheme = useSelector((state) => state.theme);

  return (
    <Cont>
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          height: "100%",
          padding: "0rem 4rem 0rem",
        }}
      >
        <Grid item lg={1} md={1} xs={1}>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Topic color={themeColor[currTheme][0].heading}>Q No.</Topic>
          </Wrapper>
        </Grid>
        <Grid item lg={6} md={6} xs={4}>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Topic color={themeColor[currTheme][0].heading}>Question</Topic>
          </Wrapper>
        </Grid>
        <Grid item lg={2} md={2} xs={2.5}>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Topic color={themeColor[currTheme][0].heading}>Solution</Topic>
          </Wrapper>
        </Grid>
        <Grid item lg={1} md={1} xs={1.5}>
          <Tooltip title="check the box when solved/unsolved">
            <Wrapper
              bgcolor={themeColor[currTheme][0].questionpage}
              border={themeColor[currTheme][0].questionpageborder}
            >
              <Topic color={themeColor[currTheme][0].heading}>
                <RuleIcon />
              </Topic>
            </Wrapper>
          </Tooltip>
        </Grid>
        <Grid item lg={1} md={1} xs={1.5}>
          <Tooltip title="Add notes">
            <Wrapper
              bgcolor={themeColor[currTheme][0].questionpage}
              border={themeColor[currTheme][0].questionpageborder}
            >
              <Topic color={themeColor[currTheme][0].heading}>
                <NoteAltIcon />
              </Topic>
            </Wrapper>
          </Tooltip>
        </Grid>
        <Grid item lg={1} md={1} xs={1.5}>
          <Tooltip title="Bookmark">
            <Wrapper
              bgcolor={themeColor[currTheme][0].questionpage}
              border={themeColor[currTheme][0].questionpageborder}
            >
              <Topic color={themeColor[currTheme][0].heading}>
                <BookmarkIcon />
              </Topic>
            </Wrapper>
          </Tooltip>
        </Grid>
      </Grid>
    </Cont>
  );
};
const Topic = styled.h3`
  color: ${(props) => props.color};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  height: 8vh;
  overflow: hidden;
  font-weight: bold;
`;
const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default DisplayHeading;
