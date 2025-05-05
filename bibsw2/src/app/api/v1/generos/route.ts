import { NextResponse } from "next/server";

import dados from "@/db.json"
import { request } from "http";

export async function GET() {
    //return NextResponse.json({ "mensagem" : "Generos"});
    return NextResponse.json(dados);
}

export async function POST(request : Request){
    const data = await request.json();
    dados.push(data)
    return NextResponse.json(dados);
}