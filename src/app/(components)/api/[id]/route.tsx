import { Students } from "../student";


export async function PATCH(request:Request,{params}:{params:{id:string}}){
    const student=await request.json();
    const students=Students.find((el)=>el.id == params.id);
    students.name=student.name;
    return Response.json(students)
}

export async function DELETE(request:Request,{params}:{params:{id:string}}){
    const student=await request.json();
    const students=Students.find((el)=>el.id == params.id);
    Students.splice(students,1);
    return Response.json("delete successful")
}