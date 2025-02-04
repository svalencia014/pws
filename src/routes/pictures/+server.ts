import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";

export async function GET(event: RequestEvent): Promise<Response> {
  return redirect(302, "https://drive.google.com/drive/folders/1e3MMOJMSO7f9JUZSy_vdQS5L7oL1w38G");
}