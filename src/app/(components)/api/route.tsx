import { Students } from "./student";

export async function GET(){
    return Response.json(Students)
}

export async function POST(request:Request){
    const student=await request.json();
    const students={
        id:Students.length+1,
        name:student.name
    }
    return Response.json(students)
}

