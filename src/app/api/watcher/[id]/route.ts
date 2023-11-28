import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const watchers = await prisma.watcher.findMany({ where: { taskId: +params.id } })

  return NextResponse.json(watchers)
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const name: string = await req.json()
  const watchers = await prisma.watcher.create({
    data: {
      taskId: +params.id,
      name
    } 
  })

  return NextResponse.json(watchers)
}
