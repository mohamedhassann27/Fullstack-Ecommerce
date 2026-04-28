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
import { registerSchema } from "@/validation";
import supabase from "../supabase";
import { toast } from "sonner";

export function RegisterPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();

  interface formData {
    userName: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (formData: formData) => {
    try {
      console.log(formData);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            userName: formData.userName,
          },
        },
      });
      console.log(data);
      console.log(error);
      if (error) throw error;
      toast.success("Account created successfully 🎉", {
        description:
          "We sent you a verification email. Please check your inbox to activate your account.",
        position: "top-center",
      });
      navigate("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  const googleRegister = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col min-h-screen gap-6 max-w-sm md:max-w-4xl mx-auto justify-center max-md:px-6",
        className,
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="px-6 py-4 md:px-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  {...register("userName")}
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="py-5"
                />
                <p className="text-red-500">{errors.userName?.message}</p>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="mohamed@example.com"
                  className="py-5"
                />
                {errors?.email?.message && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
                {/* <FieldDescription>
                                We will not share your email with anyone else.
                                </FieldDescription> */}
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  className="py-5"
                />
                {errors?.password?.message && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
              </Field>
              {/* <FieldDescription>
                                Must be at least 6 characters long.
                                </FieldDescription> */}
              <Field>
                <Button type="submit" className="py-5 cursor-pointer">
                  Create Account
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field>
                <div className="relative">
                  <FcGoogle className="text-2xl absolute left-[16%] md:left-[22%] top-2" />
                  <Button
                    onClick={googleRegister}
                    variant="outline"
                    type="button"
                    className="py-5 cursor-pointer w-full"
                  >
                    <span>Sign Up with Google</span>
                  </Button>
                </div>
              </Field>
              <FieldDescription className="text-center">
                Already have account? <Link to="/login">Log in</Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src={loginImage}
              alt="Image"
              className=" h-full w-full object-cover"
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
export default RegisterPage;
