
// 向n8n发送请求
export async function GET(req: Request) {
    return new Response(JSON.stringify({ message: "Hello from n8n route" }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}