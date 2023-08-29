import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

export const LoginPage = ({
    handleUserLogin
}) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleUserLogin();
    }


    return (
    <Form onSubmit={handleFormSubmit}>
      <FormGroup floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>{" "}
      <FormGroup floating>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Label for="examplePassword">Password</Label>
      </FormGroup>{" "}
      <Button className="text-uppercase">Sign in</Button>
    </Form>
  );
};
