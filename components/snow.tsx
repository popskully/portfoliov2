import Snowfall from "react-snowfall";

export default function snow() {
  return (
    <>
      <Snowfall
        // Changes the snowflake color
        color="#0152cc"
        // Applied to the canvas element
        style={{ background: "transparent" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={500}
      />
    </>
  );
}
