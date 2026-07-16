import {cookies} from "next/headers";
import {redirect} from "next/navigation";
export default async function Root(){const lang=(await cookies()).get("semeco-language")?.value;redirect(lang==="es"?"/es":"/en")}
