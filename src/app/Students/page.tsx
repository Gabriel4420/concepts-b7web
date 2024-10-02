import StudentsTable from "@/components/StudentsTable";
import { students } from "@/helper/students";
import React from "react";

// import { Container } from './styles';

const Students: React.FC = () => {
  return (
    <div className="h-screen bg-gradient-to-tr to-sky-500 from-indigo-800 gap-10 flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold py-5">Notas dos Estudantes</h1>
        <StudentsTable data={students}/>
    </div>
  );
};

export default Students;
