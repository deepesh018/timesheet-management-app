import { NextResponse } from "next/server";

export async function GET() {
  const data = [
  {
    week: 1,
    date: '1 - 5 January, 2024',
    status: 'COMPLETED',
    action: 'View',
    statusColor: 'bg-green-100 text-green-600'
  },
  {
    week: 2,
    date: '8 - 12 January, 2024',
    status: 'COMPLETED',
    action: 'View',
    statusColor: 'bg-green-100 text-green-600'
  },
  {
    week: 3,
    date: '15 - 19 January, 2024',
    status: 'INCOMPLETE',
    action: 'Update',
    statusColor: 'bg-yellow-100 text-yellow-600'
  },
  {
    week: 4,
    date: '22 - 26 January, 2024',
    status: 'COMPLETED',
    action: 'View',
    statusColor: 'bg-green-100 text-green-600'
  },
  {
    week: 5,
    date: '28 January - 1 February, 2024',
    status: 'MISSING',
    action: 'Create',
    statusColor: 'bg-red-100 text-red-600'
  },
  ];
  return NextResponse.json(data);
}
