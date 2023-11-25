import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()
  console.log('† line 6 data', data)

  const newTask = await prisma.task.create({ data })

  return NextResponse.json(newTask)
}
