import LoginForm from "@/src/components/form/loginForm";
import LoginSkeleton from "@/src/components/ui/skeleton/loginSkeleton";
import { FC, Suspense } from "react";

type TLoginPageProps = object;

const LoginPage: FC<TLoginPageProps> = () => {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
