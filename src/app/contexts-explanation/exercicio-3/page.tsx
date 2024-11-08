import { PostProvider } from "@/contexts/PostContext";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { Footer } from "./components/Footer";
import FormPost from "./components/Form";

export const metadata = {
  title: "Postagens",
  description: "Visualização de postagens",
};

const PostExercise: React.FC = () => {
  return (
    <PostProvider>
      <div className="h-screen bg-gradient-to-tr to-slate-500 from-gray-800 gap-10 flex flex-col items-center justify-center">
        <Header title="Postagens sobre alguma coisa" />
        <div className="w-1/3">
          <FormPost />
        </div>
        {/* Listagem de POSTS */}
        <PostList />
        <Footer />
      </div>
    </PostProvider>
  );
};

export default PostExercise;
