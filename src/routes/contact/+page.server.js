import { redirect } from '@sveltejs/kit';
export const prerender = false;

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ cookies, request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const message = formData.get('message');
        const name = formData.get('name');

        const body = JSON.stringify({ email, message, name });
        console.log(body);
        await fetch('https://api.svalencia.me/submissions/new', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        });
    }
}
