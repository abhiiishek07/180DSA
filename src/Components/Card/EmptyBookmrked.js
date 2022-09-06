import search from "../../Lottie/searching.json";
import { useLottie } from "lottie-react";
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
  const { View } = useLottie(defaultOptions);

  return (
    <>
      <Title
        color={themeColor[currTheme][0].text}
        style={{ marginTop: "0rem" }}
      >
        {" "}
        Ohoo !! Bookmarked List is empty 🙆‍♂️
      </Title>
      {View}
    </>
  );
}

const Title = styled.h3`
  color: ${(props) => props.color};
`;
export default EmptyBookmarked;
