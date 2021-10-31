import React, { useContext } from "react";
import Page from "components/Page";
import { InputGroup, Intent, Button, Label, Card } from "@blueprintjs/core";
import { useForm, Controller } from "react-hook-form";
import { Tooltip2 } from "@blueprintjs/popover2";
import { AuthContext } from "context/AuthContext";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { state, login } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const lockButton = (
    <Tooltip2 content={`${showPassword ? "Hide" : "Show"} Password`}>
      <Button
        icon={showPassword ? "unlock" : "lock"}
        intent={Intent.WARNING}
        minimal={true}
        onClick={() => setShowPassword(!showPassword)}
      />
    </Tooltip2>
  );
  const onSubmit = (data) => {
    console.log(data);
    login({
      user: { name: "Test User", email: "test@test.com" },
      token: "ABCDEFG",
    });
  };
  return (
    <Page>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Email
            <Controller
              control={control}
              name="email"
              rules={{ required: "This field is required" }}
              render={({
                field: { onChange, onBlur, value, ref },
                formState,
              }) => (
                <InputGroup
                  large
                  onBlur={onBlur}
                  disabled={formState.isSubmitting}
                  onChange={onChange}
                  placeholder="Email"
                  type="text"
                  inputRef={ref}
                />
              )}
            />
            {errors?.email?.message || null}
          </Label>
          <Label>
            Password
            <Controller
              control={control}
              name="password"
              rules={{ required: "This field is required" }}
              render={({
                field: { onChange, onBlur, value, ref },
                formState,
              }) => (
                <InputGroup
                  large
                  onBlur={onBlur}
                  disabled={formState.isSubmitting}
                  onChange={onChange}
                  placeholder="Password"
                  rightElement={lockButton}
                  type={showPassword ? "text" : "password"}
                  inputRef={ref}
                />
              )}
            />
            {errors?.password?.message || null}
          </Label>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Page>
  );
}

export default Login;
