import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_req: NextRequest) {
  const tasks = await prisma.task.findMany({
    orderBy: {
      id: 'desc'
    }
  })

  return NextResponse.json(tasks)
}

export async function POST(req: NextRequest) {
  const task = await req.json()

  const newTask = await prisma.task.create({ data: task })

  return NextResponse.json(newTask)
}

export async function PUT(req: NextRequest) {
  const { id, status } = await req.json()

  const updatedTask = await prisma.task.update({ where: { id }, data: { status } })

  return NextResponse.json(updatedTask)
}


