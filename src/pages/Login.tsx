import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import loginImage from "../assets/SideImage.webp";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validation";
// import { toast } from "sonner"
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/app/features/loginSlice";
import { type AppDispatch, type RootState } from "@/app/store";
import supabase from "@/supabase";

export function LoginPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  if (localStorage.getItem("token")) navigate("/");

  // {RTK}
  const { isLoading, data, error } = useSelector(
    (state: RootState) => state.login,
  );
  console.log({ isLoading, data, error });
  // console.log(loginData);

  interface formData {
    // userName: string,
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formData: formData) => {
    // {RTK AsyncThunk}
    dispatch(loginUser(formData));

    // try {
    //     console.log(formData)
    //     const { data, error } = await supabase.auth.signInWithPassword({
    //         // options
    //         email: formData.email,
    //         password: formData.password,
    //     })
    //     console.log(data);
    //     console.log(error);
    //     if(error) throw error
    //     // chadcn Toast
    //     toast.promise<{ name: string }>(() =>
    //         new Promise((resolve) =>
    //             setTimeout(() => resolve({ name: "Event" }), 1000)
    //         ),
    //         {loading: "Loading...", success: () => `Welcome Back 👋`, error: "Error", position:"top-center",  description: "You’re now logged in. Start exploring products and enjoy your shopping experience.", className:"text-black"},
    //     )
    //     setTimeout(()=>navigate('/'), 1500)
    // } catch (error) {
    //     console.log(error);
    //     toast.error('Invalid email or password', {position:"top-center"})
    // }
  };

  const googleRegister = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col min-h-screen gap-6 max-w-sm md:max-w-4xl mx-auto justify-center max-md:px-5",
        className,
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="mohamed@example.com"
                  className="py-5"
                />
                {errors.email?.message && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  className="py-5"
                />
                {errors.password?.message && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </Field>
              <Field>
                <Button type="submit" className="py-5 cursor-pointer">
                  Login
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field>
                <div className="relative">
                  <FcGoogle className="text-2xl absolute left-[20%] md:left-[22%] top-2" />
                  <Button
                    onClick={googleRegister}
                    variant="outline"
                    type="button"
                    className="py-5 cursor-pointer w-full"
                  >
                    <span>Login with Google</span>
                  </Button>
                </div>
              </Field>
              <FieldDescription className="text-center">
                Don&apos;t have an account? <Link to="/register">Sign up</Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src={loginImage}
              alt="Image"
              className="h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
export default LoginPage;
