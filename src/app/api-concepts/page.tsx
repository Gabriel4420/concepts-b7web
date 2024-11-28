'use client'
import { User } from "@/types/User";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaInfoCircle } from "react-icons/fa";



 const Page = () => {

  

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
    } catch (error) {
      console.log("DEU Ruim");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-tr to-cyan-500 from-slate-800 gap-10 flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white text-bold py-5">Lista de usuários</h1>
        {loading &&
          toast.custom("Carregando...", {
            duration: 5000,
            style:{backgroundColor:'red', color:'HighlightText'}
          })}
        {!loading && users.length > 0 && (
          <ul>
            {users.map((i) => (
              <li key={i.id} className="text-white bg-slate-900 my-2 py-2 rounded-lg px-4">
                {i.name} || {i.email} || {i.address.city}
              </li>
            ))}
          </ul>
        )}

        {!loading &&
          users.length === 0 &&
          toast.error("Não há usuários para exibir", { duration: 3000 })}
      </div>
    </div>
  );
};

export default Page;