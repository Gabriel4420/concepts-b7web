import React from "react";
import Image from "next/image";
import { Student } from "@/types/Student";

// Definindo a interface para as colunas de dados

interface DataTableProps {
  data: Student;
}

const StudentsTable: React.FC<DataTableProps> = ({ data }) => {
  const { student } = data;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-3xl">
        <thead>
          <tr className="bg-gray-200 rounded-full text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center">Nome</th>
            <th className="py-3 px-6 text-left">Se Formou ?</th>

            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-center">Nota 1</th>
            <th className="py-3 px-6 text-center rounded-se-3xl">Nota 2</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {student.map((user: any) => (
            <tr
              key={user.id}
              className="border-b border-gray-200 hover:bg-gray-100 "
            >
              <td>
                <div className="text-left flex justify-center w-full gap-3 items-center ">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />

                  {user.name}
                </div>
              </td>

              <td className="py-3 px-6 text-left">
                <span
                  className={`${
                    user.active ? "text-green-500" : "text-red-500"
                  } font-bold`}
                >
                  {user.active ? "Não" : "Sim"}
                </span>
              </td>
              <td className="py-3 px-6 text-left">{user.email}</td>

              <td className="py-3 px-6 text-center">{user.grade1}</td>
              <td className="py-3 px-6 text-center rounded-ee-3xl">
                {user.grade2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
