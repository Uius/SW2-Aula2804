import { NextResponse } from "next/server";

import dados from "@/db.json"

export async function GET() {
    //return NextResponse.json({ "mensagem" : "Generos"});
    return NextResponse.json(dados);
}