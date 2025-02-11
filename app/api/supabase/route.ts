// app/api/items/route.ts
export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server'

// 获取所有数据 (READ)
export async function GET() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from('blog').select('*');
    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 创建数据 (CREATE)
export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const body = await req.json();
    const { data, error } = await supabase.from('blog').insert([body]);
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 更新数据 (UPDATE)
export async function PUT(req: Request) {

    try {
      const supabase = await createClient()
      const body = await req.json();
      const { id, ...updateData } = body;
      if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

      const { data, error } = await supabase.from('blog').update(updateData).eq('id', id);
      if (error) throw error;
      return NextResponse.json(data);
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}