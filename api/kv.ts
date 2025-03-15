// app/api/save/route.ts
import { kvClient } from "@/lib/kv-client";
import { NextResponse } from "next/server";

interface KvRequest{
    key:any,
    value:any
}

export async function KvPOST(request: KvRequest) {
    
  try {
    const { key, value } = request;
    
    // 加密存储（可选） - { encrypt: true }
    await kvClient.set(key, value);

    return NextResponse.json({
      success: true,
      message: `数据已保存至 ${key}`,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
export default { KvPOST };
