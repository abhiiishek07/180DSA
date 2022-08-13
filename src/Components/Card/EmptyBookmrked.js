import search from "../../Lottie/searching.json";
import Lottie from "react-lottie";
import styled from "styled-components";
import themeColor from "../../Data/themeColor.json";
import { useSelector } from "react-redux";
function EmptyBookmarked() {
  const currTheme = useSelector((state) => state.theme);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: search,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Title
        color={themeColor[currTheme][0].text}
        style={{ marginTop: "1rem" }}
      >
        {" "}
        Ohoo !! Bookmarked List is empty 🙆‍♂️
      </Title>
      <Lottie options={defaultOptions} height={1000} width={500} />
    </>
  );
}

const Title = styled.h3`
  color: ${(props) => props.color};
`;
export default EmptyBookmarked;
