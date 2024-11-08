
import { LoginProvider } from "@/contexts/LoginContext";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

export const metadata = {
  title: 'Exercicio 2 - Explicação de contexto',
  description: 'Explicação de contexto no Next.js com TypeScript',
};

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-500">
        <LoginProvider>
          <Header />
          <div className="container mx-auto">
            <Form />
          </div>
        </LoginProvider>
      </div>
    </>
  );
};

export default Page;
