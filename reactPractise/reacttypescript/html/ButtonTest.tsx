import { CustomButton } from "./Button";

function AppTest() {
  return (
    <div>
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary button
      </CustomButton>
    </div>
  );
}
