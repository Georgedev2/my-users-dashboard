import img from "../imgs/page-logo.png";

const PageLogo = () => {
  const style = {
    width: "150px",
    height: "37px",
  };

  return (
    <>
      <img src={img} style={style} />
    </>
  );
};

export default PageLogo;
