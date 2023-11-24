import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_req: NextRequest) {
  const relation = req.nextUrl.searchParams.get('relation')
  const query = req.nextUrl.searchParams.get('query')

  const tasks = await prisma.task.findMany({ where:  })

  return NextResponse.json(tasks)
}

export async function POST(req: NextRequest) {
  const task = await req.json()

  const newTask = await prisma.task.create({ data: task })

  return NextResponse.json(newTask)
}
