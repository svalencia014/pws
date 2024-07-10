//@ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  redirect(302, 'https://drive.google.com/drive/folders/11YH1d9dr7-iBtDb89C0SGMv4EUqBAL4i?usp=sharing');
}
