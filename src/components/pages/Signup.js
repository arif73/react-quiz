import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />

        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Enter passsword"
            icon="lock"
          />
          <TextInput
            type="password"
            placeholder="Confirm passsword"
            icon="lock_clock"
          />
        </Form>

        <Checkbox text="I agree to the Terms &amp; Conditions" />

        <Button>Submit Now</Button>

        <div class="info">
          Already have an account? <a href="login.html">Login</a> instead.
        </div>
      </div>
    </>
  );
}
