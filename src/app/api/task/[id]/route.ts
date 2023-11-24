import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const id = +params.id
  const task = await prisma.task.findFirst({ where: { id } })

  return NextResponse.json(task)
}
