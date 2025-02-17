// app/api/items/[id]/route.ts
export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { supabase } from '@/utils/client';

// 获取单个数据 (READ)
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error } = await supabase.from('blog').select('*').eq('id', id).single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
